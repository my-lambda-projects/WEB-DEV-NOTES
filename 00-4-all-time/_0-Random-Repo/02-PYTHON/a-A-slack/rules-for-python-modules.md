# Rules for Python Modules

First some definitions:

_Module_ : a single .py file is a module

_Package_ : a collection of modules, usually in a folder

_Submodule_ : a python module inside a sub directory of a module

## Exporting things

Inside a python script, any variables, functions or classes are automatically
exported and can be imported by name.

If you want to control which things get exported from a python module you can
set the variable `__all__` equal to a list of strings representing the things
to export.

## The Rules

### Using the `import` statement

- When you import a .py file as a module, it just runs that file.
- When you import a directory as a module, it runs `__init__.py`

## Using the `python` command line interpreter

- When you run a .py file it runs that file
- When you run a directory it runs `__main__.py`
- When you run a directory with the `-m` option, it searches `sys.path` for the module and runs both the `__init__.py` and the `__main__.py`

## Documentation on import

- [Import System](https://docs.python.org/3/reference/import.html)
- [Import Statement](https://docs.python.org/3/reference/simple_stmts.html#import)
