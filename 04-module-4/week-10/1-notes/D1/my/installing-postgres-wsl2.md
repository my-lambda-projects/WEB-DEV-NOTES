
> IMPORTANT: These instructions are for Windows users running WSL 2. Please upgrade if at all possible because the experience is much easier and smoother not only for PostgreSQL, but for other tools you'll learn in the future (such as docker).
>
> If you have not done so already, please try to upgrade using the [official instructions from Microsoft](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

You will install two pieces of software so that you can start using PostgreSQL. You will install **PostgreSQL** itself along with all of its tools. Then you will also install **Postbird**, a cross-platform graphical user interface that makes working with SQL and PostgreSQL easier than using the command line tool `psql`.

When you read "Window installation" and "Ubuntu "Installation", that means the OS that's running. So, you have a Windows installation, **Windows 10**, that runs automatically when you boot your computer. Then, when you start the Ubuntu installation (which runs through WSL 2), it's as if there's a separate computer running inside your computer (in other words, a **virtual machine**). Please pay careful attention to which installation to use for each step in these instructions.

Verify WSL Version
------------------

Before you begin, open **Powershell** and run this command

    wsl --list --verbose

You should see something like this

      NAME      STATE           VERSION
    * Ubuntu    Running         2

Confirm your **Ubuntu installation** is running in WSL 2 by looking at the number at the end of the line with your ubuntu version on it. If you see a "1" at the end, first try this command to switch to WSL 2.

    wsl --set-version Ubuntu 2

Replace "Ubuntu" with the actual name of your distribution (as shown by the list command above).

If the commands in this section do NOT work (because you were unable to install WSL 2 since your Windows version cannot be updated), please switch to the instructions for Windows with WSL 1.

Installing PostgreSQL 12
------------------------

In order to install PostgreSQL on Ubuntu, you will use the built-in package manager, `apt`. Open the terminal use usually use for **Ubuntu**, and enter the following commands.

    sudo apt update
    sudo apt install postgresql-12

The first command ensures you have the latest links for downloads; the second command performs the PostgreSQL install. You'll see a bunch of output. When prompted, confirm the installation.

You can confirm the installation by checking the version number of the command line utility which comes with **PostgreSQL**.

    psql --version

You should see something like the following.

    psql (PostgreSQL) 12.4 (Ubuntu 12.4-0ubuntu0.20.04.1)

Configure PostgreSQL
--------------------

(Continue working in the Ubuntu terminal.)

### Part A - Allow connections from local machine

An important step to setting up PostgreSQL is to allow connections to databases from anywhere on your local machine, including Windows. Another name for your local machine is `localhost`.

Begin by editing the `postgresql` configuration file to listen on localhost. (The instructions that follow use the `vim` editor. If you prefer another, that's fine because you will be able to achieve the same result.)

    sudo vim /etc/postgresql/12/main/postgresql.conf

Search for "localhost" by typing `/localhost` followed by ENTER. You should get to a line that looks like this.

    #listen_addresses = 'localhost'           # what IP address(es) to listen on;

If you aren't there yet, type `/` followed by ENTER to search again.

If the line does not start with "#", that's great. You do not need to make any changes. You can now exit by typing `:q!`.

If you see a "#" at the start of the line, use your arrow keys to move the cursor under it, then type `x`. This will delete the "#". Now you can save and close this file by typing `:wq`, and hitting `Enter`.

### Part B - Start the service

**PostgreSQL** is a database engine which runs as a service. You can think of a service like a background application so it can run whether you see it or not. If the `postgresql` service is NOT running, you will NOT be able to access your databases.

Here are three helpful commands.

*   `sudo service postgresql status` to check whether databases are available for connections from code or tools
*   `sudo service postgresql stop` to make databases unavailable
*   `sudo service postgresql start` to make databases available

A status of `down` indicates the service is NOT running; `online` means it's running.

It is a good idea to check the status of the postgresql service now. If it's running (`online`), and you changed the configuration file in the previous section, then stop the service. Now, start the `postgresql` service.

> Warning: The service will stop automatically when your machine shuts down or reboots. So if you have trouble connecting in the future, check the status of ths `postgresql` service and start it again.

### Part C - User for login

Start the PostgreSQL command line tool (`psql`) as postgres user.

    sudo -u postgres psql

Notice the prompt changed to `postgres=#`.

Set a password for the `postgres` user. Notice the semicolon at the end.

    ALTER ROLE <username> SUPERUSER;

> Tip: If you forgot the semicolon, then `psql` thinks you are continuing your command on a second line. That's useful for longer commands, but not necessary at this time. The prompt will change subtly from using an '=' to a '-' (like this `postgres-#`). The quick fix is to type the semicolon (;) followed by ENTER. This will run the command and restore the original prompt.

Next, add a password for the `postgres` user. The single quotes are required around the password, but will not be included in the password when you use it later. Replace "**\*\*\*\***" with a password you can remember.

    ALTER USER <username> WITH ENCRYPTED PASSWORD '*******';

Now, you can exit `psql` using either Ctrl+d or typing `\q` followed by ENTER.

Installing Postbird
-------------------

Head over to the [Postbird releases page on GitHub](https://github.com/Paxa/postbird/releases). Click the installer for Windows which you can recognize because it's the only file in the list that ends with ".exe" (for example, "Postbird-Setup-0.8.4.exe").

![Download Postbird](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/download-postbird.png)

After that installer downloads, run it. You will get a warning from Windows that this is from an unidentified developer.

![Postbird installation warning](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/postbird-installation-warning.png)

You should get used to seeing this because many open-source applications aren't signed with the Microsoft Store for monetary and philosophical reasons.

If you trust Paxa like App Academy and tens of thousands of other developers do, then click the link that reads "More info" and the "Run anyway" button.

![Postbird run anyway](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/postbird-installation-run-anyway.png)

When it's done installing, it will launch itself. Test it out by typing "postgres" into the "Username" field, and the password from your installation in the "Password" field. Click the Connect button. It should properly connect to the running PostgreSQL server.

You can close **Postbird** for now. It also installed an icon on your desktop. You can launch it from there or from your Start Menu at any time.

What you did
------------

You installed and configured PostgreSQL 12, a relational database management system, and tools to use it! Well done!

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/js-py---oct-2020-online/week-10-oct-2020-online/installing-postgresql-on-windows-wsl-
