# WEEK-02 DAY-1<br>*Nodejs* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Running JS Locally Lesson Learning Objectives](#running-js-locally-lesson-learning-objectives)
  - [Terminal Basics](#terminal-basics)
  - [File tree](#file-tree)
- [Basic terminal navigation](#basic-terminal-navigation)
  - [Navigation of the Unix file system](#navigation-of-the-unix-file-system)
  - [What you learned](#what-you-learned)
- [Setup & Installations on Windows 10](#setup-installations-on-windows-10)
  - [Windows Subsytem for Linux (WSL) and Ubuntu](#windows-subsytem-for-linux-wsl-and-ubuntu)
  - [Git](#git)
  - [Google Chrome](#google-chrome)
  - [Node.js](#nodejs)
  - [Unzip](#unzip)
  - [Mocha.js](#mochajs)
  - [Python 3](#python-3)
  - [*Note about WSL*](#note-about-wsl)
  - [Now, you have everything installed!](#now-you-have-everything-installed)
- [Setup & Installations on macOS Catalina or Mojave](#setup-installations-on-macos-catalina-or-mojave)
  - [Preparing your machine](#preparing-your-machine)
  - [What you learned](#what-you-learned-1)
  - [Running JavaScript Code](#running-javascript-code)
  - [Node REPL vs. JavaScript File](#node-repl-vs-javascript-file)
  - [What you learned](#what-you-learned-2)
- [Running JavaScript Locally](#running-javascript-locally)
  - [Phase 1: Creating files and folders](#phase-1-creating-files-and-folders)
  - [Phase 2: Using Node to run JavaScript files](#phase-2-using-node-to-run-javascript-files)
  - [Phase 3: Running tests using Mocha](#phase-3-running-tests-using-mocha)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Running JS Locally Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Match the commands ls, cd, pwd to their descriptions
2. Given a folder structure diagram, a list of 'cd (path)' commands and target
   files, match the paths to the target files.
3. Use VSCode to create a folder. Within the folder create a .js file containing
   `console.log('hello new world');` and save it.
4. Use node to execute a JavaScript file in the termina terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Match the commands ls, cd, pwd to their descriptions
2. Given a folder structure diagram, a list of 'cd (path)' commands and target
   files, match the paths to the target files.
3. Use VSCode to create a folder. Within the folder create a .js file containing
   `console.log('hello new world');` and save it.
4. Use node to execute a JavaScript file in the terminal
________________________________________________________________________________
## Terminal Basics

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

# Basic terminal navigation

**NOTE:** `Unix` is a term we will be using a lot in the future. It refers to
the parent operating system upon which Mac is built upon and Linux is inspired
by. They have (nearly) identical commands and features and both use the
Terminal. Windows is not Unix based and the commands are slightly different. For
the rest of the course we will only support Unix/Linux and we will not give any
additional Windows specific commands.

## Navigation of the Unix file system

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

________________________________________________________________________________
# Setup & Installations on Windows 10

This reading is only applicable to Windows users. If you're on macOS, please use
the instructions in **Setup & Installations (macOS)**.

## Windows Subsytem for Linux (WSL) and Ubuntu

Test if you have Ubuntu installed by typing "Ubuntu" in the search box in the
bottom app bar that reads "Type here to search". If you see a search result that
reads "Ubuntu" with "App" under it, then you have it installed. Otherwise,
follow these instructions to install the WSL and Ubuntu.

1. In the application search box in the bottom bar, type "PowerShell" to find
   the application named "Windows PowerShell"
1. Right-click on "Windows PowerShell" and choose "Run as administrator" from
   the popup menu
1. In the blue PowerShell window, type the following:
   `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
1. Restart your computer
1. In the application search box in the bottom bar, type "Store" to find the
   application named "Microsoft Store"
1. Click "Microsoft Store"
1. Click the "Search" button in the upper-right corner of the window
1. Type in "Ubuntu"
1. Click "Run Linux on Windows (Get the apps)"
1. Click the orange tile labeled "Ubuntu"
1. Click "Install"
1. After it downloads, click "Launch"
1. If you get the option, pin the application to the task bar. Otherwise,
   right-click on the orange Ubuntu icon in the task bar and choose "Pin to
   taskbar"
1. Wait for it to install the local files
1. When prompted to "Enter new UNIX username", type your first name with no
   spaces
1. When prompted, enter and retype a password for this UNIX user (it can be the
   same as your Windows password)
1. Confirm your installation by typing the command `whoami` followed by Enter at
   the prompt (it should print your first name)
1. You need to update your packages, so type `sudo apt update` (if prompted for
   your password, enter it)
1. You need to upgrade your packages, so type `sudo apt upgrade`  (if prompted
   for your password, enter it)

## Git

Git comes with Ubuntu, so there's nothing to install. However, you should
configure it using the following instructions.

1. Open an Ubuntu terminal if you don't have one open already.
1. You need to configure Git, so type `git config --global user.name "Your
   Name"` with replacing "Your Name" with your real name.
1. You need to configure Git, so type `git config --global user.email
   your@email.com` with replacing "your@email.com" with your real email.

## Google Chrome

Test if you have Chrome installed by typing "Chrome" in the search box in the
bottom app bar that reads "Type here to search". If you see a search result that
reads "Chrome" with "App" under it, then you have it installed. Otherwise,
follow these instructions to install Google Chrome.

1. Open Microsoft Edge, the blue "e" in the task bar, and type in
   http://chrome.google.com. Click the "Download Chrome" button. Click the
   "Accept and Install" button after reading the terms of service. Click "Save"
   in the "What do you want to do with ChromeSetup.exe" dialog at the bottom of
   the window. When you have the option to "Run" it, do so. Answer the questions
   as you'd like. Set it as the default browser.
1. Right-click on the Chrome icon in the task bar and choose "Pin to taskbar"

## Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing
`node --version`. If it reports "Command 'node' not found", then you need to
follow these directions.

1. In the Ubuntu terminal, type `sudo apt update` and press Enter
2. In the Ubuntu terminal, type `sudo apt install build-essential` and
   press Enter
3. In the Ubuntu terminal, type `curl -o-
   https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and
   press Enter
4. In the Ubuntu terminal, type `. ./.bashrc` and press Enter
5. In the Ubuntu terminal, type `nvm install --lts` and press Enter
6. Confirm that **node** is installed by typing `node --version` and seeing it
   print something that is not "Command not found"!

## Unzip

For your projects you will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

## Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing
`which mocha`. If it prints a path, then you're good. Otherwise, if it prints
nothing, install Mocha.js by typing `npm install -g mocha`.

## Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt
install python3`. Test it by typing `python3 --version` and seeing it print a
number.

## *Note about WSL*

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open.  So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

## Now, you have everything installed!

________________________________________________________________________________
# Setup & Installations on macOS Catalina or Mojave

Being a developer isn't just about hacking away into the wee hours of the
morning or debugging a new feature. All craftspeople must have mastery of their
tools to be successful in their trade, and programmers are no different. For a
developer the most important tools are our CLI, text editor, web browser,
compiler, package manager, and Node environment for running JavaScript. Mastery
of these tools will be invaluable for the entire duration of our careers.

This reading will cover the installation of the basic tools you'll need to run
code on your computer.

When you finish this reading, you should have:

- Installed Visual Studio Code (VS Code)
- Installed Node & NPM (Node Package Manager)
- Installed Google Chrome
- Installed Xcode & Homebrew (Mac)
- Installed Python 3

## Preparing your machine

The commands you need to enter are listed below. Here we will install basic
developer tools, such as [homebrew][homebrew] (a 3rd party package manager for
MacOS), [Xcode][xcode] (a library of developer tools provided by Apple), VS Code
(a full-featured text-editor), and Node (a JavaScript runtime environment).

### Chrome

Here at App Academy, our browser of choice is Google Chrome. This isn't super
important at the beginning of the course, but once we get into frontend
development (writing code that runs in a web browser) the Chrome Devtools will
be crucial for debugging every manner of issue.

To install Google Chrome, download the necessary files and follow the
instructions on the [Google Chrome website][chrome-dl].

[chrome-dl]: https://www.google.com/chrome/browser/desktop/index.html

### Xcode

Let's start with Xcode. The Xcode command line tools are a requirement for
installing the homebrew package manager in the next step.

**NOTE: If you are using a Linux machine you will not be able to install Xcode
or homebrew.**

Install the Xcode command line tools by running the following from the console.

```sh
$ xcode-select --install
```

To conclude the installation you will need to agree to the Xcode license. Start
the Xcode app, click "Agree", and allow the installation to finish. Then you can
go ahead and quit the Xcode app.

### Homebrew

Homebrew is kind of like a low-tech App Store. It allows us access to and the
ability to install a wide variety of software and command line tools from the
console. These are distinct from those hosted on the App Store and will need to
be managed by Homebrew.

Enter the following in your terminal to download and install Homebrew:

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

You will be given a list of dependencies that will be installed and prompted to
continue or abort. Press `RETURN` to continue.

Let's break this command down a bit. `curl`, a command-line tool commonly used
for downloading files from the internet, is used to download the Homebrew
installation file. The `"$(...)"` transforms the file content into a string.
Finally, the string is passed to a Ruby language executable (`/usr/bin/ruby` is
where the system Ruby executable file is stored on our machine) with the `-e`
flag to tell Ruby to run the argument as code.

Check out the [Homebrew website][homebrew] to learn the basic commands.

[xcode]: https://itunes.apple.com/us/app/xcode/id497799835
[homebrew]: https://brew.sh/

### Node.js & NPM

[Node.js][node] is a very powerful runtime environment built on Google Chrome's
JavaScript V8 Engine. It is used to develop I/O intensive applications like
video streaming sites, robots, and other general purpose applications. For our
purposes Node provides a way for us to run JavaScript outside of the browser.

We want to use a version manager with Node to help us manage potential conflicts
between versions and dependencies. In this case we will be using [NVM][nvm]
(Node Version Manager) to install/manage Node.js.

Open up your console (the Terminal application on Mac) and run the following:

```sh
# download and run the official install script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# update your terminal config (you will now have access to the nvm command)
source ~/.bashrc

# install a stable version of node
nvm install 10.16

# set version 10.16.0 as default version
nvm use 10.16

# verify install/config
which node # => /Users/username/.nvm/versions/node/v10.16.0/bin/node
```

Node comes with a package manager called [NPM][npm], which provides access to a
whole ecosystem of libraries and tools we can use. NPM comes pre-bundled with
Node, so there is no additional work for us to do. By default we don't need any
additional libraries, and any additional packages we do need to use will be
installed on a project-by-project basis.

### VS Code

This one is pretty easy. Go to website for [Visual Studio Code][vs-code], then
download and install VS Code.

To verify that the shell commands were installed correctly, run `which code` in
your terminal. If `code` is not a recognized command, open the VS Code editor,
open the Command Palette (`Cmd+Shift+P` on macOS ,`Ctrl+Shift+P` on Linux) and
type `shell command` to find the `Shell Command: Install 'code' command in PATH`
command. Then restart the terminal. This will now allow you to easily open files
in VS Code from the terminal using the `code` command followed by a file or
directory.

Next, we'll want to install a few useful VS Code extensions and configure VS
Code to play nice with these extensions. Download [this zip
file][vscode-script], which contains a script that will do the work for you.
Unzip the file and open the `setup_vscode` directory. Navigate into that
directory in the terminal (drag and drop the folder over to the terminal icon on
macOS or right click in the directory and select `Open in Terminal` on most
Linux distributions).

To run the script, run the command:

```sh
~ ./setup-vs-code.sh
```

The script will do the rest. Now restart VS Code and you'll be good to go.

[node]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm
[npm]: https://docs.npmjs.com/
[vs-code]: https://code.visualstudio.com/
[vscode-script]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/setup-vs-code.zip

### Mocha testing framework

The last thing we'll be installing will be Mocha. Mocha is a JavaScript testing
framework that we will be using to test our work in the future. Here are the
instructions of how to install `mocha`!

#### Installing Mocha

1. Open Terminal
2. Enter this command: `npm install -g mocha`
3. To test your installation, run the command: `mocha --version`. If it returns
   a version number, you've successfully installed mocha! Otherwise, let your
   instructor know and they'll help you fix things.

### Installing Python3

You can just use _homebrew_ for this install, too.

```
brew install python
```

## What you learned

How to install the various tools you'll need to create a development
environment.

After you finished this reading you should have the following installed:

- Virtual Studio Code (VS Code)
- Node & NPM (Node Package Manager)
- Mocha the JavaScript testing framework
- Google Chrome
- Xcode & Homebrew (Mac)
- Python 3

________________________________________________________________________________
## Running JavaScript Code

JavaScript is **the** language of the _Internet_! Whenever you browse your
favorite website (google, facebook, twitter, appacademy.io), your web browser is
executing JavaScript code. There are two main environments we use to run
JavaScript: the first is the browser (Chrome, Firefox, etc.) and the second is
Node. Writing code for the browser, (aka front end engineering), requires a lot
more than just understanding JavaScript, so we'll come back to that topic later
in the course. For now, we will concentrate on running JavaScript on our
computers using Node.

So what is [Node][node] exactly? [Node.js][node] is a very powerful runtime
environment built on Google Chrome's JavaScript V8 Engine. It is used to develop
I/O intensive applications like video streaming sites, robots, and other general
purpose applications. For our purposes the most advantageous feature of Node is
that it provides a way for us to run JavaScript outside of the browser.

Now that you have Node installed on your local computer it's time to run some
JavaScript! Running your own code on your own computer is a rite of passage for all
developers. We know you are up to the challenge!

By the end of this reading you should be able to:

- Use the Node REPL to test out simple expressions and functions
- Use VSCode to create a folder and a `.js` file within that folder
- Use Node to run a `.js` file

[node]: https://nodejs.org/en/

## Node REPL vs. JavaScript File

Before we begin running code we wanted to make a clear distinction. Using Node
there are two ways that we can run JavaScript code:

1. using the **Node REPL**
2. using Node to run a **.js file**

Both the Node REPL and using a JavaScript file are common ways to execute
JavaScript code, but they are useful in different scenarios:

**Node REPL** (Read, Evaluate, Print, Loop) is used for testing quick ideas. The
Node REPL is useful when playing around with any curiosities you have because
you can see how an expression is evaluated quickly. Any code that you type into
the Node REPL will be lost when you exit the REPL. If you've ever used a program
that let you write a line of code and execute it immediately, without a separate
command, then you've used a REPL.

**JS Files** are used for saving code for the long term. If you create a `.js`
file and save it then all the code within can be referenced and used later. When
you work on problem sets, projects, and anything else you want to save, you
should always save your code to a `.js` file!

### Using the Node REPL

To use the **Node REPL**, simply open up your command line (Terminal) and enter
the command `node`. In the examples below we use the `$` to show that we are in
the command line (in our case Terminal).

```js
~ $ node
Welcome to Node.js
Type ".help" for more information.
>
```

Notice that as soon as we enter the `node` command, we get a welcome message and
we see our Terminal icon change to look like this: `>`. This `>` icon means that
we are inside the Node REPL, so we can type any valid JavaScript lines and see
what they evaluate to:

```js
~ $ node
Welcome to Node.js
Type ".help" for more information.
> 1 + 1
2
> let message = "Hello" + "world"
undefined
> message
'Helloworld'
```

We can also define functions in the Node REPL though you'll find writing them in
that environment is not super fun due to the Node REPL not being optimized for
that kind of coding.

Here is an example of defining and invoking a function using `node`:

```js
~ $ node
Welcome to Node.js
Type ".help" for more information.

> function sayHello () {
... console.log("hello!");
... }
undefined
> sayHello();
hello!
```

If you want to exit the Node REPL, and head back to our plain old command line
enter the command `.exit` in the REPL. Doing this will get rid of the `>` icon,
which means we are no longer in the REPL. When we are back inside our command
line we can enter the normal commands (i.e `cd`, `ls`, `pwd`):

```js
$ node
> 1 + 1
2
> "How do I get out of here" + "!?!?"
'How do I get out of here!?!?'
> .exit
~ $
```

### Using JavaScript Files

The first thing you'll need in order to run a JavaScript file is to create a
file that will contain the code you will be running. A new file is like a blank
canvas - just awaiting the chance to be made into art.

If you don't currently have a dedicated coding folder start off by creating a
new folder somewhere accessible, like your `Desktop` folder. Then you can open
that folder using VS Code. From there you can simply create a "New File". In
order to create a JavaScript file, make sure that you change the file name to
one that ends in `.js`, for example `myFile.js`.

Now take a moment to enter some code into your new `.js` file like the
following:

```js
// AppAcademyWork/myFile.js
console.log("hello world!");
```

Don't forget to save the file with your new code!

Now to run a JS file you need to first go into the folder that contains that
file by using `cd` in your command line. Feel free to use `ls` to list your
folders and see where you have to go. Once you are inside of the correct folder,
run `node <fileName>`, for example `node myFile.js`. When you enter these
commands, be aware of the capitalization. **File names are case sensitive**!

```sh
~ $ ls
Downloads
Desktop
Music
Videos

~ $ cd Desktop
~ Desktop $ ls
AppAcademyWork

~ Desktop $ cd AppAcademyWork

~ AppAcademyWork $ ls
myFile.js

~ AppAcademyWork $ node myFile.js
Hello world

```

That is how you run JavaScript on your local computer! You create and save a
file, navigate to that file in your terminal, then run the file using the `node`
command followed by the filename (`node <fileName>`).

## What you learned

- How to use the Node REPL to test out simple expressions and functions
- How to use VSCode to create a folder and a `.js` file within that folder
- How to use Node to run a `.js` file

________________________________________________________________________________
# Running JavaScript Locally

Now it's time to become a leet Hacker and put your new found Terminal skills to
the test! In the past you have been writing JavaScript within the confines of
the App Academy Online platform but it's time to break free and start writing
code on your local computer.

In this project we'll be working VS Code to create new folders and files, Node
to run JavaScript, and `mocha` to help us run tests.

## Phase 1: Creating files and folders

We'll kick off this project by creating a folder for to contain the code you
write. This would be a good time to create a folder for your work here at App
Academy. Feel free to name the folder whatever you like - just make sure you
remember where you put it (the Desktop is the ideal place)! Once you've created
a folder for your work create a new folder within that folder. This folder will
be representative of some of the work you do for this project, so name it
`firstProject`.

The first thing you'll want to do with this `firstProject` folder is open it up
in VS Code. Once you've entered VS Code you can go to "File" then "New File" to
create a new file. Name this file `phaseOne.js`.

Now we'll teach you a fun trick - in the Sidebar of VS Code you should see the
folder named `firstProject` and if you click the arrow beside it you should see
the file named `phaseOne.js`. Let's create a second file in the `firstProject`
directory but this time we'll use a nifty VS code shortcut. If you click within
the `firstProject` folder and type `a` then a new file will be automatically
created and you will be able to quickly name this file. Here is a gif of us
doing the same thing:

![gif](images/file-name-gif.gif)

So you can use both the "New File" option or the above shortcut to create new
files. Additionally, you create subdirectories within a directory by typing
`Shift + a`. For now create new files and folders using whatever method is most
comfortable.

Name the second file you created above `phaseTwo.js` and let's go run some
JavaScript.

## Phase 2: Using Node to run JavaScript files

### Phase 2A: Using the Node REPL

The first way we'll run JavaScript today is by using the Node REPL. Open a
window of the Terminal application and type in the command:

```sh
~ $ node
>
```

You should see your icon change to look like this: `>`. Now do the following to
get comfortable with using the Node REPL:

1. Write a `console.log` statement that will print "Hello Node!"
2. Write four mathematical expressions:
   - each using one of the following symbols: `+`, `-`, `*` and `%`
3. Write a function named `addTwo` that will accept a number as an argument and
   then will `return` the number with `2` added to it. Next, invoke `addTwo`
   passing in a number as an argument.

The Node REPL is an interactive code environment which allows you to test how
JavaScript will react to simple expressions.  Learning to use a REPL to test
ideas and to ask your coding environment questions (as shown in the above
simple and quick problems) is a great way to teach yourself, and become more
self-sufficient as a programmer.

### Phase 2B: Using Node to run JavaScript files

In the `phaseOne.js` file we previously created write a simple `console.log`
statement that will print "Look at me go!" to the console. Next, open a window
of the Terminal application on your computer and navigate to the `firstProject`
directory. Once inside the directory run the code within the `phaseOne.js` file
by using the following command:

```sh
~ firstProject $ node phaseOne.js
```

You should see "Look at me go!" printed to the console.

Congratulations, you've just run JavaScript on your computer using both the Node
REPL and by running a `.js` file!

Celebrate your victory by writing a new function in the `phaseTwo.js` file.
Write a function named `helloNode` that when invoked will `return` the string
"Hello Node". Try invoking your function below where you defined it and use
`node` to run the file:

```sh
~ firstProject $ node phaseTwo.js
~ firstProject $
```

Notice how you don't see anything printed to the console! That is because we
`return`ed the value but didn't print it to the console. Now try wrapping your
function call for `helloNode` in a `console.log` statement. Then run the
`phaseTwo.js` file again using `node`. You should see "Hello Node" printed to
the console.

Nice! You've now written and run a function using a `.js` file. For the rest of
this course you will be utilizing VS Code and Node to write and run code.

## Phase 3: Running tests using Mocha

At work, you will often be writing tests for your own code to ensure it works.
Here at App Academy you will primarily be running tests we have written for you
to guide your development. Now that you know how to write and run code in this
environment let's practice using `mocha` to _test_ the output of functions.
We'll do a deep dive into testing practices soon - but for now know that
**testing** is how we can ensure that functions work the way we expect them to.
While you had previously used `console.log` to see if your functions gave the
expected output when given a certain input, Mocha automates this process for
you.

We will now go over an important testing workflow you'll be using a lot in the
future of this course. The workflow we are talking about breaks down into
several steps:

1. Download problems & tests
2. Start working on an individual problem
3. Run tests (also known as `specs`) to see if you have solved the problem
   successfully
4. Move onto to the next problem and repeat steps 2 & 3

We'll now walk through what each of these steps entails.

#### Step One: Download problems & tests

- Click [here][skeleton] to download a `.zip` file containing the problems
  you'll be working on.
> *Note:* If you use Windows you might find it easier to use `curl` to download the zip file into your WSL. Here's how to do that:
> 1) right click on the link to the zip file and copy the link to your clipboard
> 2) In the Ubuntu Terminal type the following:
> `curl -o skeleton.zip ` and then paste in the link you copied and press Enter. This will download the zip file into your current directory. It should look something like this: `curl -o skeleton.zip https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/skeleton.zip`
> 3) Use `unzip` to unzip the file like this: `unzip skeleton.zip`
>
> You can use this method anytime you need to download zip files for your projects.

- Unzip/Uncompress the file somewhere you can access easily, like your `Desktop`
  folder. Unzipping the file will leave you with a folder named `skeleton`.
- Within the `skeleton` folder there will be folder named `problems`. You'll now
  be working on completing each of these problem in order.

#### Step Two: Start working on an individual problem

- Open up the `problems` folder in VS Code, you'll see the problems are numbered
  in sequential order.

**Only write your code to the `.js` files in the `problems` folder. Do not move
or edit any of the files in the `test` folder. Also, do not change the names of
the files in the `problems` folder.** The reason for this is because the tests
are expecting to find the files in a certain place and with the names we
provided for each function. Moving or editing files could cause the tests to
break.

#### Step Three: Run tests to see if you have solved the problem successfully

- In your Terminal, use the `cd` command to navigate into the `skeleton` folder.
  - _Note_: If you unzipped the `skeleton` onto your `Desktop`, you need to `cd`
    into your `Desktop` first, then `cd` into `skeleton`.
- From here you can now use the `mocha` command to run the problem set against
  the mocha test cases we provided:

```sh
~ skeleton $ mocha
```

- If you scroll up toward the top of the `mocha` output, you will see a quick
  breakdown of what specs were passed. You can test with `mocha` as many times
  as you want to!

Here is an example of setting up a problem set in the command line:

```sh
~ $ cd Desktop/
~ Desktop $ ls
 skeleton

~ Desktop $ cd skeleton/

~ skeleton $ ls
 problems test

~ skeleton $ mocha
  diffArrayLen()
    1) should return a boolean indicating the lengths of the arrays are the same

  avgValue()
    2) should return the average of an array of numbers

  ... etc.

  0 passing
  9 failing
```

If you have any trouble with this don't hesitate to ask a TA for help!

You can feel free at any point to move your `skeleton` folder into the
`firstProject` folder you created in the previous phase. Just make you you
navigate to it correctly!

#### A note about testing manually

- If you'd like to test a problem manually (without Mocha), you can still do
  that. You can wrap function invocations in `console.log` statements below
  where each function is defined in the file.
  - Then you can `cd` into the `skeleton` folder and run the individual `.js`
    files using `node`. (for example: `node 01-diff-array-lens.js`)
- Before moving on from a problem, be sure to verify your function works as
  expected using `mocha`.

Now go forth and solve the problems you've been given! Once you've passed all
the tests give yourself a pat on the back for passing your first series of
specs. May you have many more passed specs in your future! 🙌

[skeleton]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/skeleton.zip
