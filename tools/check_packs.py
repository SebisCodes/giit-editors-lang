"""Checks the language packs: every language has the same files and, in each JSON file, the same
keys as English (lists with the same length), and no text is empty. Run it after changing a pack:

    python3 tools/check_packs.py

The interface packs (<code>/common.js, <code>/<editor>.js) are dictionaries keyed by the English
text; they are checked to exist for every language that has the editor's page pack.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE = 'en'


def main():
    """Runs every check and prints the problems.

    Returns:
        None: exits with status 1 when a problem is found.
    """
    languages = sorted(d for d in os.listdir(ROOT) if len(d) == 2 and os.path.isdir(os.path.join(ROOT, d)))
    problems = []
    source_files = get_json_files(SOURCE)
    for language in languages:
        if language == SOURCE:
            continue
        files = get_json_files(language)
        problems += [f'{language}: {name} is missing' for name in sorted(source_files - files)]
        problems += [f'{language}: {name} has no English source' for name in sorted(files - source_files)]
        for name in sorted(files & source_files):
            problems += [f'{language}/{name}: {problem}' for problem in check_values(read_json(SOURCE, name), read_json(language, name), '')]
            script = name.replace('.json', '.js') if name not in ('overview.json',) else ''
            if script and not os.path.isfile(os.path.join(ROOT, language, script)):
                problems.append(f'{language}: {script} is missing')
    for problem in problems:
        print(problem)
    print(f'{len(languages)} languages, {len(source_files)} page packs each: ' + ('all keys present' if not problems else f'{len(problems)} problems'))
    sys.exit(1 if problems else 0)


def get_json_files(language):
    """Returns the JSON files of a language.

    Args:
        language (str): the language code.

    Returns:
        set[str]: the file names.
    """
    return {name for name in os.listdir(os.path.join(ROOT, language)) if name.endswith('.json')}


def read_json(language, name):
    """Reads one JSON pack.

    Args:
        language (str): the language code.
        name (str): the file name.

    Returns:
        object: the parsed content.
    """
    with open(os.path.join(ROOT, language, name), encoding='utf-8') as file:
        return json.load(file)


def check_values(source, other, path):
    """Compares a value of a language with the English one.

    Args:
        source (object): the English value.
        other (object): the value of the other language.
        path (str): the dotted key of the value, empty at the top.

    Returns:
        list[str]: the problems found.
    """
    where = path or '(top)'
    if isinstance(source, dict):
        if not isinstance(other, dict):
            return [f'{where} is not an object']
        problems = [f'{path + "." if path else ""}{key} is missing' for key in source if key not in other]
        for key in source:
            if key in other:
                problems += check_values(source[key], other[key], f'{path + "." if path else ""}{key}')
        return problems
    if isinstance(source, list):
        if not isinstance(other, list) or len(other) != len(source):
            return [f'{where} has {len(other) if isinstance(other, list) else "no"} entries, English {len(source)}']
        problems = []
        for index, (a, b) in enumerate(zip(source, other)):
            problems += check_values(a, b, f'{where}[{index}]')
        return problems
    if isinstance(source, str) and source and isinstance(other, str) and not other.strip():
        return [f'{where} is empty']
    return []


main()
