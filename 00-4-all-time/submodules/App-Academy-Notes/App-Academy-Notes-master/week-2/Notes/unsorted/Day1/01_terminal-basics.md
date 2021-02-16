# Terminal Basics
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [File tree](#file-tree)
  - [Essential terminology](#essential-terminology)
- [Basic terminal navigation](#basic-terminal-navigation)
  - [Navigation of the Unix file system](#navigation-of-the-unix-file-system)
  - [Navigation commands](#navigation-commands)
  - [Directory Shortcuts](#directory-shortcuts)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Part of the journey of growing into a skilled programmer is about becoming
proficient with the tools we have at our disposal. The terminal is a text-based
system that allows you, as a user, to control your computer and do everything
from creating new files and folders to starting up entire applications.

Interacting with the terminal is something you will most likely do everyday in
your coding career. You may find the terminal initially intimidating to use -
all commands must be entered as text and the terminal has its own language.
However, once we get over this initial learning curve, you'll discover the
terminal is your most powerful tool!

Let's start with the basics. There are a few differences between this tool on
Mac and Windows environments; we'll be sure to highlight these differences as we
go. On Mac and Linux we use the **Terminal**, while on Windows we use the
**Command Prompt**. Both applications are analogous and you can launch them
normally by searching your apps.

When you finish this reading, you should be able to:

- Start a terminal session on your local computer
- Utilize the commands `ls`, `cd`, and `pwd` to navigate a computer's file
  systems.
- Navigate through a file tree to access specific directories

## File tree

As you start writing code on your local computer you'll find it soon becomes
essential to have the ability to navigate around your file system. Before we
start exploring the syntax of how to navigate your file system - we'll introduce
you to the basics of how your files are structured.

Below is a basic visualization of what a file tree might look like
<sub>[1][1]</sub> :

![file-directory](images/directory_structure.png)

[1]: https://info474-s17.github.io/book/introduction-to-the-command-line.html

### Essential terminology

To explain the above picture properly we first need to go over some important
terminology that we'll be using for the rest of the course.

- **directory** - same as a folder on your computer; a directory can contain
  many files or subdirectories (folders within themselves)
- **root** - the outer most main directory of our computer represented by `/`
- **path** - location on your computer specified by directories.
  `/Desktop/photos/cats.pdf` is an example of a path.

Now take a look again at the visualization above and things will make a little
more sense. The **root** directory sits at the top of the chart as the outer
main directory. All other **directories** can be accessed from root by following
a **path** (the dotted lines in the chart above). All directories can contain
both files and subdirectories.

Two more important words to know are:

- **CLI** - (short for Command Line Interface) is the text-based user interface
  used to view and manage computer files. (_Terminal_ for Mac & Linux vs.
  _Command Prompt_ for Windows).
- **GUI** - (Graphic User Interface) is the visual alternative of the CLI. The
  GUI is probably what you've been using to navigate your computer so far (with
  icons representing folders and files).

The CLI, Command Line Interface, predates the graphic interface you are familiar
with. Many coding specific programs can _only_ be run from the command line
(like `Node`!). Working with your own computer will really help these ideas sink
in, and once your have fluency with commands in the CLI you'll find it much
faster to do essential tasks. Plus, matrix ninja w00t.

## Basic terminal navigation

**NOTE:** `Unix` is a term we will be using a lot in the future. It refers to
the parent operating system upon which Mac is built upon and Linux is inspired
by. They have (nearly) identical commands and features and both use the
Terminal. Windows is not Unix based and the commands are slightly different. For
the rest of the course we will only support Unix/Linux and we will not give any
additional Windows specific commands.

### Navigation of the Unix file system

Let's get started! Search your computer for an Application named "Terminal".
Upon opening the application a new Terminal window will greet you with:

```sh
~ $
```

### Navigation commands

We'll start by covering some basic commands that you will find yourself using
all the time:

- `ls` - lists all the files and subdirectories in the current directory
- `cd [path]` - changes the current directory to the directory specified by the
  `path` argument. (i.e. `cd /cats` would enter a directory named "cats").
- `pwd` - short for "Print Working Directory". The `pwd` command lists the path
  to your current location in your file system starting from the _root_.

> When opening a fresh terminal window the default directory opened will be the
> _home_ directory. Your home directory will be represented by a `~`. So for
> example, if your computer user's name was `janedoe` then a fresh terminal
> would open to `~` and using the `pwd` command would print out your current
> location as `/Users/janedoe/`.

To navigate through directories in the command line, we need to specify which
directories to go through. Let's say we are in the home directory for our user,
(`~`), and want to navigate into a directory we have on our Desktop (for example
`photos`). We need to first go into the `Desktop` directory, and then go into
`photos`.

```sh
~ $ ls
Applications    Desktop
Documents       Downloads
Library         Movies
Music           Pictures

~ $ cd Desktop

~ Desktop $ ls
photos          lectures
memes           projects

~ Desktop $ cd photos

~ photos $ ls
cats.jpeg       hey_programmers.gif
```

Notice, after we navigate to a new folder using `cd`, the current path before
the `$` changed to reflect where we currently are in our _file system_. Test
changing directories in your Terminal.

You can also navigate into and through multiple directories at once by
specifying a path of a directory and its subdirectory:

```sh
~ $ ls
Applications    Desktop
Documents       Downloads
Library         Movies
Music           Pictures

~ $ cd Desktop/photos

~ photos $ ls
cats.jpeg       hey_programmers.gif
```

If you ever need a reminder on where you are in your file system you can use the
`pwd` command. Let's take a look at at how to use `pwd` continuing from our
above example:

```sh
~ photos $ ls
cats.jpeg       hey_programmers.gif

~ photos $ pwd
/Users/rose/Desktop/photos
```

### Directory Shortcuts

Use the command `cd ..` to go back to the previous directory. If we are in the
`photos` directory on our `Desktop`, and want to go back to the `Desktop`:

```sh
~ photos $ cd ..
~ Desktop $
```

Use the command `cd` (by itself) to go back to your home directory instantly:

```sh
~ photos $ cd
~ $
```

Those are the basics of navigating around the terminal! We'll trickle in more
commands as we move forward, but you'll use `ls`, `pwd` and `cd` the most.

## What you learned

- How to start a new terminal session
- How to navigate your file system using `cd`, `ls`, and `pwd`
- How to navigate through a file tree to access specific directories
