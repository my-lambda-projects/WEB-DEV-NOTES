```

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

sudo apt-get update
[sudo] password for bryan:
Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [109 kB]
Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
Get:4 http://archive.ubuntu.com/ubuntu focal-backports InRelease [101 kB]
Get:5 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [395 kB]
Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [698 kB]
Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [90.4 kB]
Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [5580 B]
Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [80.7 kB]
Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main Translation-en [175 kB]
Get:11 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [12.8 kB]
Get:12 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [521 kB]
Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [11.3 kB]
Get:14 http://archive.ubuntu.com/ubuntu focal-updates/restricted amd64 Packages [103 kB]
Get:15 http://archive.ubuntu.com/ubuntu focal-updates/restricted Translation-en [15.8 kB]
Get:16 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [701 kB]
Get:17 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [68.6 kB]
Get:18 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [138 kB]
Get:19 http://security.ubuntu.com/ubuntu focal-security/multiverse amd64 Packages [1256 B]
Get:20 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [13.4 kB]
Get:21 http://archive.ubuntu.com/ubuntu focal-updates/multiverse amd64 Packages [20.0 kB]
Fetched 3375 kB in 1s (2330 kB/s)
Reading package lists... Done

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

sudo apt-get dist-upgrade
Reading package lists... Done
Building dependency tree
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  apt apt-utils curl libapt-pkg6.0 libcurl3-gnutls libcurl4 libparted2 libssl-dev libssl1.1
  linux-libc-dev openssl parted python-apt-common python3-apt
14 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 7989 kB of archives.
After this operation, 9216 B of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libapt-pkg6.0 amd64 2.0.2ubuntu0.2 [832 kB]Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 apt amd64 2.0.2ubuntu0.2 [1290 kB]
Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 apt-utils amd64 2.0.2ubuntu0.2 [213 kB]
Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libssl-dev amd64 1.1.1f-1ubuntu2.1 [1582 kB]
Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libssl1.1 amd64 1.1.1f-1ubuntu2.1 [1319 kB]Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 openssl amd64 1.1.1f-1ubuntu2.1 [620 kB]
Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 parted amd64 3.3-4ubuntu0.20.04.1 [43.3 kB]Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libparted2 amd64 3.3-4ubuntu0.20.04.1 [159 kB]
Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python-apt-common all 2.0.0ubuntu0.20.04.2 [17.7 kB]
Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3-apt amd64 2.0.0ubuntu0.20.04.2 [155 kB]
Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 curl amd64 7.68.0-1ubuntu2.4 [161 kB]
Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcurl4 amd64 7.68.0-1ubuntu2.4 [234 kB]
Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcurl3-gnutls amd64 7.68.0-1ubuntu2.4 [231 kB]
Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 linux-libc-dev amd64 5.4.0-58.64 [1130 kB]Fetched 7989 kB in 1s (7748 kB/s)
Preconfiguring packages ...
(Reading database ... 50946 files and directories currently installed.)
Preparing to unpack .../libapt-pkg6.0_2.0.2ubuntu0.2_amd64.deb ...
Unpacking libapt-pkg6.0:amd64 (2.0.2ubuntu0.2) over (2.0.2ubuntu0.1) ...
Setting up libapt-pkg6.0:amd64 (2.0.2ubuntu0.2) ...
(Reading database ... 50946 files and directories currently installed.)
Preparing to unpack .../apt_2.0.2ubuntu0.2_amd64.deb ...
Unpacking apt (2.0.2ubuntu0.2) over (2.0.2ubuntu0.1) ...
Setting up apt (2.0.2ubuntu0.2) ...
(Reading database ... 50946 files and directories currently installed.)
Preparing to unpack .../00-apt-utils_2.0.2ubuntu0.2_amd64.deb ...
Unpacking apt-utils (2.0.2ubuntu0.2) over (2.0.2ubuntu0.1) ...
Preparing to unpack .../01-libssl-dev_1.1.1f-1ubuntu2.1_amd64.deb ...
Unpacking libssl-dev:amd64 (1.1.1f-1ubuntu2.1) over (1.1.1f-1ubuntu2) ...
Preparing to unpack .../02-libssl1.1_1.1.1f-1ubuntu2.1_amd64.deb ...
Unpacking libssl1.1:amd64 (1.1.1f-1ubuntu2.1) over (1.1.1f-1ubuntu2) ...
Preparing to unpack .../03-openssl_1.1.1f-1ubuntu2.1_amd64.deb ...
Unpacking openssl (1.1.1f-1ubuntu2.1) over (1.1.1f-1ubuntu2) ...
Preparing to unpack .../04-parted_3.3-4ubuntu0.20.04.1_amd64.deb ...
Unpacking parted (3.3-4ubuntu0.20.04.1) over (3.3-4) ...
Preparing to unpack .../05-libparted2_3.3-4ubuntu0.20.04.1_amd64.deb ...
Unpacking libparted2:amd64 (3.3-4ubuntu0.20.04.1) over (3.3-4) ...
Preparing to unpack .../06-python-apt-common_2.0.0ubuntu0.20.04.2_all.deb ...
Unpacking python-apt-common (2.0.0ubuntu0.20.04.2) over (2.0.0ubuntu0.20.04.1) ...
Preparing to unpack .../07-python3-apt_2.0.0ubuntu0.20.04.2_amd64.deb ...
Unpacking python3-apt (2.0.0ubuntu0.20.04.2) over (2.0.0ubuntu0.20.04.1) ...
Preparing to unpack .../08-curl_7.68.0-1ubuntu2.4_amd64.deb ...
Unpacking curl (7.68.0-1ubuntu2.4) over (7.68.0-1ubuntu2.2) ...
Preparing to unpack .../09-libcurl4_7.68.0-1ubuntu2.4_amd64.deb ...
Unpacking libcurl4:amd64 (7.68.0-1ubuntu2.4) over (7.68.0-1ubuntu2.2) ...
Preparing to unpack .../10-libcurl3-gnutls_7.68.0-1ubuntu2.4_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.68.0-1ubuntu2.4) over (7.68.0-1ubuntu2.2) ...
Preparing to unpack .../11-linux-libc-dev_5.4.0-58.64_amd64.deb ...
Unpacking linux-libc-dev:amd64 (5.4.0-58.64) over (5.4.0-56.62) ...
Setting up apt-utils (2.0.2ubuntu0.2) ...
Setting up libssl1.1:amd64 (1.1.1f-1ubuntu2.1) ...
Setting up linux-libc-dev:amd64 (5.4.0-58.64) ...
Setting up libcurl3-gnutls:amd64 (7.68.0-1ubuntu2.4) ...
Setting up libssl-dev:amd64 (1.1.1f-1ubuntu2.1) ...
Setting up libparted2:amd64 (3.3-4ubuntu0.20.04.1) ...
Setting up python-apt-common (2.0.0ubuntu0.20.04.2) ...
Setting up libcurl4:amd64 (7.68.0-1ubuntu2.4) ...
Setting up curl (7.68.0-1ubuntu2.4) ...
Setting up openssl (1.1.1f-1ubuntu2.1) ...
Setting up python3-apt (2.0.0ubuntu0.20.04.2) ...
Setting up parted (3.3-4ubuntu0.20.04.1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.1) ...
Processing triggers for man-db (2.9.1-1) ...

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

ln -s /mnt/c/0-a-A-October

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

cd 0-a-A-October

00-weeks            03-Interview-Prep       07-aa-Personal-Docs  6-Official-Test-Taking
01-EVERYTHING-ELSE  04-videos-from-lecture  08-Sandbox
02-student-website  05-orginization         09-slack

\___________________________________________________
bryan_dir:0-a-A-October_exitstatus:0 ====>

sudo apt-get install -y gcc g++ libxml2 make ruby ruby-dev ruby-bundler
[sudo] password for bryan:
Reading package lists... Done
Building dependency tree
Reading state information... Done
g++ is already the newest version (4:9.3.0-1ubuntu2).
g++ set to manually installed.
gcc is already the newest version (4:9.3.0-1ubuntu2).
gcc set to manually installed.
libxml2 is already the newest version (2.9.10+dfsg-5).
libxml2 set to manually installed.
make is already the newest version (4.2.1-1.2).
make set to manually installed.
The following additional packages will be installed:
  fonts-lato libgmp-dev libgmpxx4ldbl libjs-jquery libruby2.7 rake ruby-minitest ruby-molinillo
  ruby-net-http-persistent ruby-net-telnet ruby-power-assert ruby-test-unit ruby-thor ruby-xmlrpc ruby2.7
  ruby2.7-dev ruby2.7-doc rubygems-integration zip
Suggested packages:
  gmp-doc libgmp10-doc libmpfr-dev ri bundler
The following NEW packages will be installed:
  fonts-lato libgmp-dev libgmpxx4ldbl libjs-jquery libruby2.7 rake ruby ruby-bundler ruby-dev
  ruby-minitest ruby-molinillo ruby-net-http-persistent ruby-net-telnet ruby-power-assert ruby-test-unit
  ruby-thor ruby-xmlrpc ruby2.7 ruby2.7-dev ruby2.7-doc rubygems-integration zip
0 upgraded, 22 newly installed, 0 to remove and 0 not upgraded.
Need to get 10.1 MB of archives.
After this operation, 60.0 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu focal/main amd64 fonts-lato all 2.0-2 [2698 kB]
Get:2 http://archive.ubuntu.com/ubuntu focal/main amd64 libgmpxx4ldbl amd64 2:6.2.0+dfsg-4 [9128 B]
Get:3 http://archive.ubuntu.com/ubuntu focal/main amd64 libgmp-dev amd64 2:6.2.0+dfsg-4 [320 kB]
Get:4 http://archive.ubuntu.com/ubuntu focal/main amd64 libjs-jquery all 3.3.1~dfsg-3 [329 kB]
Get:5 http://archive.ubuntu.com/ubuntu focal/main amd64 rubygems-integration all 1.16 [5092 B]
Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 ruby2.7 amd64 2.7.0-5ubuntu1.2 [95.6 kB]
Get:7 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby amd64 1:2.7+1 [5412 B]
Get:8 http://archive.ubuntu.com/ubuntu focal/main amd64 rake all 13.0.1-4 [61.6 kB]
Get:9 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-minitest all 5.13.0-1 [40.9 kB]
Get:10 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-net-telnet all 0.1.1-2 [12.6 kB]
Get:11 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-power-assert all 1.1.7-1 [11.4 kB]
Get:12 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-test-unit all 3.3.5-1 [73.2 kB]
Get:13 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-xmlrpc all 0.3.0-2 [23.8 kB]
Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libruby2.7 amd64 2.7.0-5ubuntu1.2 [3524 kB]
Get:15 http://archive.ubuntu.com/ubuntu focal/universe amd64 ruby-molinillo all 0.6.4-1 [19.8 kB]
Get:16 http://archive.ubuntu.com/ubuntu focal/universe amd64 ruby-net-http-persistent all 2.9.4-2 [16.3 kB]Get:17 http://archive.ubuntu.com/ubuntu focal/universe amd64 ruby-thor all 0.19.4-1 [43.9 kB]
Get:18 http://archive.ubuntu.com/ubuntu focal/universe amd64 ruby-bundler all 2.1.4-1 [281 kB]
Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 ruby2.7-dev amd64 2.7.0-5ubuntu1.2 [182 kB]
Get:20 http://archive.ubuntu.com/ubuntu focal/main amd64 ruby-dev amd64 1:2.7+1 [4632 B]
Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 ruby2.7-doc all 2.7.0-5ubuntu1.2 [2159 kB]Get:22 http://archive.ubuntu.com/ubuntu focal/main amd64 zip amd64 3.0-11build1 [167 kB]
Fetched 10.1 MB in 2s (6647 kB/s)
Selecting previously unselected package fonts-lato.
(Reading database ... 50946 files and directories currently installed.)
Preparing to unpack .../00-fonts-lato_2.0-2_all.deb ...
Unpacking fonts-lato (2.0-2) ...
Selecting previously unselected package libgmpxx4ldbl:amd64.
Preparing to unpack .../01-libgmpxx4ldbl_2%3a6.2.0+dfsg-4_amd64.deb ...
Unpacking libgmpxx4ldbl:amd64 (2:6.2.0+dfsg-4) ...
Selecting previously unselected package libgmp-dev:amd64.
Preparing to unpack .../02-libgmp-dev_2%3a6.2.0+dfsg-4_amd64.deb ...
Unpacking libgmp-dev:amd64 (2:6.2.0+dfsg-4) ...
Selecting previously unselected package libjs-jquery.
Preparing to unpack .../03-libjs-jquery_3.3.1~dfsg-3_all.deb ...
Unpacking libjs-jquery (3.3.1~dfsg-3) ...
Selecting previously unselected package rubygems-integration.
Preparing to unpack .../04-rubygems-integration_1.16_all.deb ...
Unpacking rubygems-integration (1.16) ...
Selecting previously unselected package ruby2.7.
Preparing to unpack .../05-ruby2.7_2.7.0-5ubuntu1.2_amd64.deb ...
Unpacking ruby2.7 (2.7.0-5ubuntu1.2) ...
Selecting previously unselected package ruby.
Preparing to unpack .../06-ruby_1%3a2.7+1_amd64.deb ...
Unpacking ruby (1:2.7+1) ...
Selecting previously unselected package rake.
Preparing to unpack .../07-rake_13.0.1-4_all.deb ...
Unpacking rake (13.0.1-4) ...
Selecting previously unselected package ruby-minitest.
Preparing to unpack .../08-ruby-minitest_5.13.0-1_all.deb ...
Unpacking ruby-minitest (5.13.0-1) ...
Selecting previously unselected package ruby-net-telnet.
Preparing to unpack .../09-ruby-net-telnet_0.1.1-2_all.deb ...
Unpacking ruby-net-telnet (0.1.1-2) ...
Selecting previously unselected package ruby-power-assert.
Preparing to unpack .../10-ruby-power-assert_1.1.7-1_all.deb ...
Unpacking ruby-power-assert (1.1.7-1) ...
Selecting previously unselected package ruby-test-unit.
Preparing to unpack .../11-ruby-test-unit_3.3.5-1_all.deb ...
Unpacking ruby-test-unit (3.3.5-1) ...
Selecting previously unselected package ruby-xmlrpc.
Preparing to unpack .../12-ruby-xmlrpc_0.3.0-2_all.deb ...
Unpacking ruby-xmlrpc (0.3.0-2) ...
Selecting previously unselected package libruby2.7:amd64.
Preparing to unpack .../13-libruby2.7_2.7.0-5ubuntu1.2_amd64.deb ...
Unpacking libruby2.7:amd64 (2.7.0-5ubuntu1.2) ...
Selecting previously unselected package ruby-molinillo.
Preparing to unpack .../14-ruby-molinillo_0.6.4-1_all.deb ...
Unpacking ruby-molinillo (0.6.4-1) ...
Selecting previously unselected package ruby-net-http-persistent.
Preparing to unpack .../15-ruby-net-http-persistent_2.9.4-2_all.deb ...
Unpacking ruby-net-http-persistent (2.9.4-2) ...
Selecting previously unselected package ruby-thor.
Preparing to unpack .../16-ruby-thor_0.19.4-1_all.deb ...
Unpacking ruby-thor (0.19.4-1) ...
Selecting previously unselected package ruby-bundler.
Preparing to unpack .../17-ruby-bundler_2.1.4-1_all.deb ...
Unpacking ruby-bundler (2.1.4-1) ...
Selecting previously unselected package ruby2.7-dev:amd64.
Preparing to unpack .../18-ruby2.7-dev_2.7.0-5ubuntu1.2_amd64.deb ...
Unpacking ruby2.7-dev:amd64 (2.7.0-5ubuntu1.2) ...
Selecting previously unselected package ruby-dev:amd64.
Preparing to unpack .../19-ruby-dev_1%3a2.7+1_amd64.deb ...
Unpacking ruby-dev:amd64 (1:2.7+1) ...
Selecting previously unselected package ruby2.7-doc.
Preparing to unpack .../20-ruby2.7-doc_2.7.0-5ubuntu1.2_all.deb ...
Unpacking ruby2.7-doc (2.7.0-5ubuntu1.2) ...
Selecting previously unselected package zip.
Preparing to unpack .../21-zip_3.0-11build1_amd64.deb ...
Unpacking zip (3.0-11build1) ...
Setting up fonts-lato (2.0-2) ...
Setting up ruby-power-assert (1.1.7-1) ...
Setting up rubygems-integration (1.16) ...
Setting up ruby-minitest (5.13.0-1) ...
Setting up zip (3.0-11build1) ...
Setting up libgmpxx4ldbl:amd64 (2:6.2.0+dfsg-4) ...
Setting up ruby-test-unit (3.3.5-1) ...
Setting up ruby-net-telnet (0.1.1-2) ...
Setting up ruby2.7-doc (2.7.0-5ubuntu1.2) ...
Setting up libjs-jquery (3.3.1~dfsg-3) ...
Setting up ruby-xmlrpc (0.3.0-2) ...
Setting up libgmp-dev:amd64 (2:6.2.0+dfsg-4) ...
Setting up ruby2.7 (2.7.0-5ubuntu1.2) ...
Setting up ruby (1:2.7+1) ...
Setting up ruby-thor (0.19.4-1) ...
Setting up rake (13.0.1-4) ...
Setting up ruby-net-http-persistent (2.9.4-2) ...
Setting up ruby-molinillo (0.6.4-1) ...
Setting up ruby-bundler (2.1.4-1) ...
Setting up libruby2.7:amd64 (2.7.0-5ubuntu1.2) ...
Setting up ruby2.7-dev:amd64 (2.7.0-5ubuntu1.2) ...
Setting up ruby-dev:amd64 (1:2.7+1) ...
Processing triggers for man-db (2.9.1-1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.1) ...

\___________________________________________________
bryan_dir:0-a-A-October_exitstatus:0 ====>

sudo apt-get install gnupg2
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  gnupg2
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 5316 B of archives.
After this operation, 51.2 kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu focal/universe amd64 gnupg2 all 2.2.19-3ubuntu2 [5316 B]
Fetched 5316 B in 0s (24.2 kB/s)
Selecting previously unselected package gnupg2.
(Reading database ... 71864 files and directories currently installed.)
Preparing to unpack .../gnupg2_2.2.19-3ubuntu2_all.deb ...
Unpacking gnupg2 (2.2.19-3ubuntu2) ...
Setting up gnupg2 (2.2.19-3ubuntu2) ...
Processing triggers for man-db (2.9.1-1) ...

\___________________________________________________
bryan_dir:0-a-A-October_exitstatus:0 ====>

cd ..

,  0-a-A-October  get-pip.py  misc  node_modules  package-lock.json

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

cd ..

bryan

\___________________________________________________
bryan_dir:home_exitstatus:0 ====>

cd ..

bin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr
boot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var

\___________________________________________________
bryan_dir:/_exitstatus:0 ====>

cd home/

bryan

\___________________________________________________
bryan_dir:home_exitstatus:0 ====>

cd bryan/

,  0-a-A-October  get-pip.py  misc  node_modules  package-lock.json

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

ll
total 1984
-rw-r--r--  1 bryan bryan       0 Dec  4 05:35 ,
drwxr-xr-x 13 bryan bryan    4096 Dec 12 22:17 ./
drwxr-xr-x  3 root  root     4096 Dec  4 04:25 ../
lrwxrwxrwx  1 bryan bryan      23 Dec  4 22:56 .aws -> /mnt/c/Users/bryan/.aws/
lrwxrwxrwx  1 bryan bryan      25 Dec  4 22:56 .azure -> /mnt/c/Users/bryan/.azure/
-rw-------  1 bryan bryan   33928 Dec 12 22:29 .bash_history
-rw-r--r--  1 bryan bryan     220 Dec  4 04:25 .bash_logout
-rw-r--r--  1 bryan bryan    9016 Dec  4 20:29 .bashrc
drwxr-xr-x  8 bryan bryan    4096 Dec 10 14:19 .cache/
drwx------  4 bryan bryan    4096 Dec  7 14:55 .config/
drwxr-xr-x  4 bryan bryan    4096 Dec  4 22:56 .docker/
-rw-------  1 bryan bryan      41 Dec 12 03:54 .git-credentials
-rw-r--r--  1 bryan bryan      81 Dec  9 07:12 .gitconfig
drwxr-xr-x  2 bryan bryan    4096 Dec  4 04:25 .landscape/
drwxr-xr-x  5 bryan bryan    4096 Dec  6 19:34 .local/
-rw-r--r--  1 bryan bryan       0 Dec 12 00:31 .motd_shown
-rw-------  1 bryan bryan     202 Dec  7 14:57 .netrc
drwxr-xr-x  7 bryan bryan    4096 Dec 12 22:25 .npm/
drwxr-xr-x  8 bryan bryan    4096 Dec  9 08:00 .nvm/
-rw-r--r--  1 bryan bryan     807 Dec  4 04:25 .profile
-rw-------  1 bryan bryan     381 Dec 11 19:08 .psql_history
drwx------  2 bryan bryan    4096 Dec  5 01:26 .ssh/
-rw-r--r--  1 bryan bryan       0 Dec  4 04:27 .sudo_as_admin_successful
drwxr-xr-x  5 bryan bryan    4096 Dec  4 04:26 .vscode-server/
-rw-r--r--  1 bryan bryan     183 Dec 11 21:27 .wget-hsts
-rw-r--r--  1 bryan bryan    1933 Dec  4 05:31 .wsl-config
lrwxrwxrwx  1 bryan bryan      20 Dec 12 22:17 0-a-A-October -> /mnt/c/0-a-A-October/
-rw-r--r--  1 bryan bryan 1886796 Dec  6 19:33 get-pip.py
drwxr-xr-x  3 bryan bryan    4096 Dec  5 01:15 misc/
drwxr-xr-x  3 bryan bryan    4096 Dec  4 15:41 node_modules/
-rw-r--r--  1 bryan bryan     317 Dec  4 15:41 package-lock.json

\___________________________________________________
bryan_dir:~_exitstatus:0 ====>

cd node_modules/

postgres

\___________________________________________________
bryan_dir:node_modules_exitstatus:0 ====>

code .

\___________________________________________________
bryan_dir:node_modules_exitstatus:0 ====>
sudo gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
gpg: directory '/root/.gnupg' created
gpg: keybox '/root/.gnupg/pubring.kbx' created
gpg: /root/.gnupg/trustdb.gpg: trustdb created
gpg: key 105BD0E739499BDB: public key "Piotr Kuczynski <piotr.kuczynski@gmail.com>" imported
gpg: key 3804BB82D39DC0E3: public key "Michal Papis (RVM signing) <mpapis@gmail.com>" imported
gpg: Total number processed: 2
gpg:               imported: 2

\___________________________________________________
bryan_dir:node_modules_exitstatus:0 ====>

sudo apt-get install gnupg2
Reading package lists... Done
Building dependency tree
Reading state information... Done
gnupg2 is already the newest version (2.2.19-3ubuntu2).
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.

\___________________________________________________
bryan_dir:node_modules_exitstatus:0 ====>

sudo apt install inetutils-tracerout
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package inetutils-tracerout

\___________________________________________________
bryan_dir:node_modules_exitstatus:100 ====>

dpkg --lis
dpkg: error: unknown option --lis

Type dpkg --help for help about installing and deinstalling packages [*];
Use 'apt' or 'aptitude' for user-friendly package management;
Type dpkg -Dhelp for a list of dpkg debug flag values;
Type dpkg --force-help for a list of forcing options;
Type dpkg-deb --help for help about manipulating *.deb files;

Options marked [*] produce a lot of output - pipe it through 'less' or 'more' !

\___________________________________________________
bryan_dir:node_modules_exitstatus:2 ====>

dpkg --list
Desired=Unknown/Install/Remove/Purge/Hold
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                              Version                           Architecture Description
+++-=================================-=================================-============-=================================================>
ii  accountsservice                   0.6.55-0ubuntu12~20.04.4          amd64        query and manipulate user account information
ii  adduser                           3.118ubuntu2                      all          add and remove users and groups
ii  alsa-topology-conf                1.2.2-1                           all          ALSA topology configuration files
ii  alsa-ucm-conf                     1.2.2-1ubuntu0.5                  all          ALSA Use Case Manager configuration files
ii  apache2                           2.4.41-4ubuntu3.1                 amd64        Apache HTTP Server
ii  apache2-bin                       2.4.41-4ubuntu3.1                 amd64        Apache HTTP Server (modules and other binary file>
ii  apache2-data                      2.4.41-4ubuntu3.1                 all          Apache HTTP Server (common files)
ii  apache2-utils                     2.4.41-4ubuntu3.1                 amd64        Apache HTTP Server (utility programs for web serv>
ii  apparmor                          2.13.3-7ubuntu5.1                 amd64        user-space parser utility for AppArmor
ii  apport                            2.20.11-0ubuntu27.13              all          automatically generate crash reports for debugging
ii  apport-symptoms                   0.23                              all          symptom scripts for apport
ii  apt                               2.0.2ubuntu0.2                    amd64        commandline package manager
ii  apt-utils                         2.0.2ubuntu0.2                    amd64        package management related utility programs
ii  at                                3.1.23-1ubuntu1                   amd64        Delayed job execution and batch processing
ii  autoconf                          2.69-11.1                         all          automatic configure script builder
ii  automake                          1:1.16.1-4ubuntu6                 all          Tool for generating GNU Standards-compliant Makef>
ii  autotools-dev                     20180224.1                        all          Update infrastructure for config.{guess,sub} files
ii  base-files                        11ubuntu5.2                       amd64        Debian base system miscellaneous files
ii  base-passwd                       3.5.47                            amd64        Debian base system master password and group files
ii  bash                              5.0-6ubuntu1.1                    amd64        GNU Bourne Again SHell
ii  bash-completion                   1:2.10-1ubuntu1                   all          programmable completion for the bash shell
ii  bc                                1.07.1-2build1                    amd64        GNU bc arbitrary precision calculator language
ii  bcache-tools                      1.0.8-3ubuntu0.1                  amd64        bcache userspace tools
ii  bind9-dnsutils                    1:9.16.1-0ubuntu2.4               amd64        Clients provided with BIND 9
ii  bind9-host                        1:9.16.1-0ubuntu2.4               amd64        DNS Lookup Utility
ii  bind9-libs:amd64                  1:9.16.1-0ubuntu2.4               amd64        Shared Libraries used by BIND 9
ii  binutils                          2.34-6ubuntu1                     amd64        GNU assembler, linker and binary utilities
ii  binutils-common:amd64             2.34-6ubuntu1                     amd64        Common files for the GNU assembler, linker and bi>
ii  binutils-x86-64-linux-gnu         2.34-6ubuntu1                     amd64        GNU binary utilities, for x86-64-linux-gnu target
ii  bison                             2:3.5.1+dfsg-1                    amd64        YACC-compatible parser generator
ii  bolt                              0.8-4ubuntu1                      amd64        system daemon to manage thunderbolt 3 devices
ii  bsdmainutils                      11.1.2ubuntu3                     amd64        collection of more utilities from FreeBSD
ii  bsdutils                          1:2.34-0.1ubuntu9.1               amd64        basic utilities from 4.4BSD-Lite
ii  btrfs-progs                       5.4.1-2                           amd64        Checksumming Copy on Write Filesystem utilities
ii  build-essential                   12.8ubuntu1.1                     amd64        Informational list of build-essential packages
ii  busybox-initramfs                 1:1.30.1-4ubuntu6.3               amd64        Standalone shell setup for initramfs
ii  busybox-static                    1:1.30.1-4ubuntu6.3               amd64        Standalone rescue shell with tons of builtin util>
ii  byobu                             5.133-0ubuntu1                    all          text window manager, shell multiplexer, integrate>
ii  bzip2                             1.0.8-2                           amd64        high-quality block-sorting file compressor - util>
ii  ca-certificates                   20201027ubuntu0.20.04.1           all          Common CA certificates
ii  cloud-guest-utils                 0.31-7-gd99b2d76-0ubuntu1         all          cloud guest utilities
ii  cloud-init                        20.3-2-g371b392c-0ubuntu1~20.04.1 all          initialization and customization tool for cloud i>
ii  cloud-initramfs-copymods          0.45ubuntu1                       all          copy initramfs modules into root filesystem for l>
ii  cloud-initramfs-dyn-netconf       0.45ubuntu1                       all          write a network interface file in /run for BOOTIF
ii  cmdtest                           0.32.14.gcdfe14e-1                all          blackbox testing of Unix command line programs
ii  command-not-found                 20.04.4                           all          Suggest installation of packages in interactive b>
ii  console-setup                     1.194ubuntu3                      all          console font and keymap setup program
ii  console-setup-linux               1.194ubuntu3                      all          Linux specific part of console-setup
ii  coreutils                         8.30-3ubuntu2                     amd64        GNU core utilities
ii  cpio                              2.13+dfsg-2                       amd64        GNU cpio -- a program to manage archives of files
ii  cpp                               4:9.3.0-1ubuntu2                  amd64        GNU C preprocessor (cpp)
ii  cpp-9                             9.3.0-17ubuntu1~20.04             amd64        GNU C preprocessor
ii  cron                              3.0pl1-136ubuntu1                 amd64        process scheduling daemon
ii  cryptsetup                        2:2.2.2-3ubuntu2.3                amd64        disk encryption support - startup scripts
ii  cryptsetup-bin                    2:2.2.2-3ubuntu2.3                amd64        disk encryption support - command line tools
ii  cryptsetup-initramfs              2:2.2.2-3ubuntu2.3                all          disk encryption support - initramfs integration
ii  cryptsetup-run                    2:2.2.2-3ubuntu2.3                all          transitional dummy package for cryptsetup
ii  curl                              7.68.0-1ubuntu2.4                 amd64        command line tool for transferring data with URL >
ii  dash                              0.5.10.2-6                        amd64        POSIX-compliant shell
ii  dbus                              1.12.16-2ubuntu2.1                amd64        simple interprocess messaging system (daemon and >
ii  dbus-user-session                 1.12.16-2ubuntu2.1                amd64        simple interprocess messaging system (systemd --u>
ii  dbus-x11                          1.12.16-2ubuntu2.1                amd64        simple interprocess messaging system (X11 deps)
ii  dconf-gsettings-backend:amd64     0.36.0-1                          amd64        simple configuration storage system - GSettings b>
ii  dconf-service                     0.36.0-1                          amd64        simple configuration storage system - D-Bus servi>
ii  debconf                           1.5.73                            all          Debian configuration management system
ii  debconf-i18n                      1.5.73                            all          full internationalization support for debconf
ii  debianutils                       4.9.1                             amd64        Miscellaneous utilities specific to Debian
ii  diffutils                         1:3.7-3                           amd64        File comparison utilities
ii  dirmngr                           2.2.19-3ubuntu2                   amd64        GNU privacy guard - network certificate managemen>
ii  distro-info-data                  0.43ubuntu1.4                     all          information about the distributions' releases (da>
ii  dmeventd                          2:1.02.167-1ubuntu1               amd64        Linux Kernel Device Mapper event daemon
ii  dmidecode                         3.2-3                             amd64        SMBIOS/DMI table decoder
ii  dmsetup                           2:1.02.167-1ubuntu1               amd64        Linux Kernel Device Mapper userspace library
ii  dnsutils                          1:9.16.1-0ubuntu2.4               all          Transitional package for bind9-dnsutils
ii  dosfstools                        4.1-2                             amd64        utilities for making and checking MS-DOS FAT file>
ii  dpkg                              1.19.7ubuntu3                     amd64        Debian package management system
ii  dpkg-dev                          1.19.7ubuntu3                     all          Debian package development tools
ii  e2fsprogs                         1.45.5-2ubuntu1                   amd64        ext2/ext3/ext4 file system utilities
ii  eatmydata                         105-7                             all          Library and utilities designed to disable fsync a>
ii  ed                                1.16-1                            amd64        classic UNIX line editor
ii  eject                             2.1.5+deb1+cvs20081104-14         amd64        ejects CDs and operates CD-Changers under Linux
ii  ethtool                           1:5.4-1                           amd64        display or change Ethernet device settings
ii  fakeroot                          1.24-1                            amd64        tool for simulating superuser privileges
ii  fdisk                             2.34-0.1ubuntu9.1                 amd64        collection of partitioning utilities
ii  file                              1:5.38-4                          amd64        Recognize the type of data in a file using "magic>
ii  finalrd                           6~ubuntu20.04.1                   all          final runtime directory for shutdown
ii  findutils                         4.7.0-1ubuntu1                    amd64        utilities for finding files--find, xargs
ii  fontconfig-config                 2.13.1-2ubuntu3                   all          generic font configuration library - configuration
ii  fonts-dejavu-core                 2.37-1                            all          Vera font family derivate with additional charact>
ii  fonts-lato                        2.0-2                             all          sans-serif typeface family font
ii  fonts-ubuntu-console              0.83-4ubuntu1                     all          console version of the Ubuntu Mono font
ii  friendly-recovery                 0.2.41                            all          Make recovery boot mode more user-friendly
ii  ftp                               0.17-34.1                         amd64        classical file transfer client
ii  fuse                              2.9.9-3                           amd64        Filesystem in Userspace
ii  fwupd                             1.3.11-1~focal1                   amd64        Firmware update daemon
ii  fwupd-signed                      1.27.1ubuntu2+1.3.11-1~focal1     amd64        Linux Firmware Updater EFI signed binary
ii  g++                               4:9.3.0-1ubuntu2                  amd64        GNU C++ compiler
ii  g++-9                             9.3.0-17ubuntu1~20.04             amd64        GNU C++ compiler
ii  gawk                              1:5.0.1+dfsg-1                    amd64        GNU awk, a pattern scanning and processing langua>
ii  gcc                               4:9.3.0-1ubuntu2                  amd64        GNU C compiler
ii  gcc-10-base:amd64                 10.2.0-5ubuntu1~20.04             amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-9                             9.3.0-17ubuntu1~20.04             amd64        GNU C compiler
ii  gcc-9-base:amd64                  9.3.0-17ubuntu1~20.04             amd64        GCC, the GNU Compiler Collection (base package)
ii  gdisk                             1.0.5-1                           amd64        GPT fdisk text-mode partitioning tool
ii  gettext-base                      0.19.8.1-10build1                 amd64        GNU Internationalization utilities for the base s>
ii  gir1.2-glib-2.0:amd64             1.64.1-1~ubuntu20.04.1            amd64        Introspection data for GLib, GObject, Gio and GMo>
ii  gir1.2-packagekitglib-1.0         1.1.13-2ubuntu1.1                 amd64        GObject introspection data for the PackageKit GLi>
ii  git                               1:2.25.1-1ubuntu3                 amd64        fast, scalable, distributed revision control syst>
ii  git-man                           1:2.25.1-1ubuntu3                 all          fast, scalable, distributed revision control syst>
ii  glib-networking:amd64             2.64.2-1ubuntu0.1                 amd64        network-related giomodules for GLib
ii  glib-networking-common            2.64.2-1ubuntu0.1                 all          network-related giomodules for GLib - data files
ii  glib-networking-services          2.64.2-1ubuntu0.1                 amd64        network-related giomodules for GLib - D-Bus servi>
ii  gnupg                             2.2.19-3ubuntu2                   all          GNU privacy guard - a free PGP replacement
ii  gnupg-l10n                        2.2.19-3ubuntu2                   all          GNU privacy guard - localization files
ii  gnupg-utils                       2.2.19-3ubuntu2                   amd64        GNU privacy guard - utility programs
ii  gnupg2                            2.2.19-3ubuntu2                   all          GNU privacy guard - a free PGP replacement (dummy>
ii  gpg                               2.2.19-3ubuntu2                   amd64        GNU Privacy Guard -- minimalist public key operat>
ii  gpg-agent                         2.2.19-3ubuntu2                   amd64        GNU privacy guard - cryptographic agent
ii  gpg-wks-client                    2.2.19-3ubuntu2                   amd64        GNU privacy guard - Web Key Service client
ii  gpg-wks-server                    2.2.19-3ubuntu2                   amd64        GNU privacy guard - Web Key Service server
ii  gpgconf                           2.2.19-3ubuntu2                   amd64        GNU privacy guard - core configuration utilities
ii  gpgsm                             2.2.19-3ubuntu2                   amd64        GNU privacy guard - S/MIME version
ii  gpgv                              2.2.19-3ubuntu2                   amd64        GNU privacy guard - signature verification tool
ii  grep                              3.4-1                             amd64        GNU grep, egrep and fgrep
ii  groff-base                        1.22.4-4build1                    amd64        GNU troff text-formatting system (base system com>
ii  gsettings-desktop-schemas         3.36.0-1ubuntu1                   all          GSettings desktop-wide schemas
ii  gyp                               0.1+20180428git4d467626-3ubuntu1  all          Cross-platform build script generator
ii  gzip                              1.10-0ubuntu4                     amd64        GNU compression utilities
ii  hdparm                            9.58+ds-4                         amd64        tune hard disk parameters for high performance
ii  hostname                          3.23                              amd64        utility to set/show the host name or domain name
ii  htop                              2.2.0-2build1                     amd64        interactive processes viewer
ii  icu-devtools                      66.1-2ubuntu2                     amd64        Development utilities for International Component>
ii  info                              6.7.0.dfsg.2-5                    amd64        Standalone GNU Info documentation browser
ii  init                              1.57                              amd64        metapackage ensuring an init system is installed
ii  init-system-helpers               1.57                              all          helper tools for all init systems
ii  initramfs-tools                   0.136ubuntu6.3                    all          generic modular initramfs generator (automation)
ii  initramfs-tools-bin               0.136ubuntu6.3                    amd64        binaries used by initramfs-tools
ii  initramfs-tools-core              0.136ubuntu6.3                    all          generic modular initramfs generator (core tools)
ii  install-info                      6.7.0.dfsg.2-5                    amd64        Manage installed documentation in info format
ii  iproute2                          5.5.0-1ubuntu1                    amd64        networking and traffic control tools
ii  iptables                          1.8.4-3ubuntu2                    amd64        administration tools for packet filtering and NAT
ii  iputils-ping                      3:20190709-3                      amd64        Tools to test the reachability of network hosts
ii  iputils-tracepath                 3:20190709-3                      amd64        Tools to trace the network path to a remote host
ii  irqbalance                        1.6.0-3ubuntu1                    amd64        Daemon to balance interrupts for SMP systems
ii  isc-dhcp-client                   4.4.1-2.1ubuntu5                  amd64        DHCP client for automatically obtaining an IP add>
ii  isc-dhcp-common                   4.4.1-2.1ubuntu5                  amd64        common manpages relevant to all of the isc-dhcp p>
ii  iso-codes                         4.4-1                             all          ISO language, territory, currency, script codes a>
ii  javascript-common                 11                                all          Base support for JavaScript library packages
ii  kbd                               2.0.4-4ubuntu2                    amd64        Linux console font and keytable utilities
ii  keyboard-configuration            1.194ubuntu3                      all          system-wide keyboard preferences
ii  klibc-utils                       2.0.7-1ubuntu5                    amd64        small utilities built with klibc for early boot
ii  kmod                              27-1ubuntu2                       amd64        tools for managing Linux kernel modules
ii  kpartx                            0.8.3-1ubuntu2                    amd64        create device mappings for partitions
ii  krb5-locales                      1.17-6ubuntu4.1                   all          internationalization support for MIT Kerberos
ii  landscape-common                  19.12-0ubuntu4.1                  amd64        Landscape administration system client - Common f>
ii  language-selector-common          0.204.2                           all          Language selector for Ubuntu
ii  less                              551-1ubuntu0.1                    amd64        pager program similar to more
ii  libaccountsservice0:amd64         0.6.55-0ubuntu12~20.04.4          amd64        query and manipulate user account information - s>
ii  libacl1:amd64                     2.2.53-6                          amd64        access control list - shared library
ii  libaio1:amd64                     0.3.112-5                         amd64        Linux kernel AIO access library - shared library
ii  libalgorithm-diff-perl            1.19.03-2                         all          module to find differences between files
ii  libalgorithm-diff-xs-perl         0.04-6                            amd64        module to find differences between files (XS acce>
ii  libalgorithm-merge-perl           0.08-3                            all          Perl module for three-way merge of textual data
ii  libapache2-mod-php7.4             7.4.3-4ubuntu2.4                  amd64        server-side, HTML-embedded scripting language (Ap>
ii  libapparmor1:amd64                2.13.3-7ubuntu5.1                 amd64        changehat AppArmor library
ii  libappstream4:amd64               0.12.10-2                         amd64        Library to access AppStream services
ii  libapr1:amd64                     1.6.5-1ubuntu1                    amd64        Apache Portable Runtime Library
ii  libaprutil1:amd64                 1.6.1-4ubuntu2                    amd64        Apache Portable Runtime Utility Library
ii  libaprutil1-dbd-sqlite3:amd64     1.6.1-4ubuntu2                    amd64        Apache Portable Runtime Utility Library - SQLite3>
ii  libaprutil1-ldap:amd64            1.6.1-4ubuntu2                    amd64        Apache Portable Runtime Utility Library - LDAP Dr>
ii  libapt-pkg6.0:amd64               2.0.2ubuntu0.2                    amd64        package management runtime library
ii  libarchive13:amd64                3.4.0-2ubuntu1                    amd64        Multi-format archive and compression library (sha>
ii  libargon2-1:amd64                 0~20171227-0.2                    amd64        memory-hard hashing function - runtime library
ii  libasan5:amd64                    9.3.0-17ubuntu1~20.04             amd64        AddressSanitizer -- a fast memory error detector
ii  libasn1-8-heimdal:amd64           7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - ASN.1 library
ii  libasound2:amd64                  1.2.2-2.1ubuntu2.2                amd64        shared library for ALSA applications
ii  libasound2-data                   1.2.2-2.1ubuntu2.2                all          Configuration files and profiles for ALSA drivers
ii  libassuan0:amd64                  2.5.3-7ubuntu2                    amd64        IPC library for the GnuPG components
ii  libasyncns0:amd64                 0.8-6                             amd64        Asynchronous name service query library
ii  libatm1:amd64                     1:2.5.1-4                         amd64        shared library for ATM (Asynchronous Transfer Mod>
ii  libatomic1:amd64                  10.2.0-5ubuntu1~20.04             amd64        support library providing __atomic built-in funct>
ii  libattr1:amd64                    1:2.4.48-5                        amd64        extended attribute handling - shared library
ii  libaudit-common                   1:2.8.5-2ubuntu6                  all          Dynamic library for security auditing - common fi>
ii  libaudit1:amd64                   1:2.8.5-2ubuntu6                  amd64        Dynamic library for security auditing
ii  libauthen-sasl-perl               2.1600-1                          all          Authen::SASL - SASL Authentication framework
ii  libbinutils:amd64                 2.34-6ubuntu1                     amd64        GNU binary utilities (private shared library)
ii  libblkid1:amd64                   2.34-0.1ubuntu9.1                 amd64        block device ID library
ii  libbrotli1:amd64                  1.0.7-6ubuntu0.1                  amd64        library implementing brotli encoder and decoder (>
ii  libbsd0:amd64                     0.10.0-1                          amd64        utility functions from BSD systems - shared libra>
ii  libbz2-1.0:amd64                  1.0.8-2                           amd64        high-quality block-sorting file compressor librar>
ii  libc-ares2:amd64                  1.15.0-1build1                    amd64        asynchronous name resolver
ii  libc-bin                          2.31-0ubuntu9.1                   amd64        GNU C Library: Binaries
ii  libc-dev-bin                      2.31-0ubuntu9.1                   amd64        GNU C Library: Development binaries
ii  libc6:amd64                       2.31-0ubuntu9.1                   amd64        GNU C Library: Shared libraries
ii  libc6-dev:amd64                   2.31-0ubuntu9.1                   amd64        GNU C Library: Development Libraries and Header F>
ii  libcanberra0:amd64                0.30-7ubuntu1                     amd64        simple abstract interface for playing event sounds
ii  libcap-ng0:amd64                  0.7.9-2.1build1                   amd64        An alternate POSIX capabilities library
ii  libcap2:amd64                     1:2.32-1                          amd64        POSIX 1003.1e capabilities (library)
ii  libcap2-bin                       1:2.32-1                          amd64        POSIX 1003.1e capabilities (utilities)
ii  libcbor0.6:amd64                  0.6.0-0ubuntu1                    amd64        library for parsing and generating CBOR (RFC 7049)
ii  libcc1-0:amd64                    10.2.0-5ubuntu1~20.04             amd64        GCC cc1 plugin for GDB
ii  libcom-err2:amd64                 1.45.5-2ubuntu1                   amd64        common error description library
ii  libcrypt-dev:amd64                1:4.4.10-10ubuntu4                amd64        libcrypt development files
ii  libcrypt1:amd64                   1:4.4.10-10ubuntu4                amd64        libcrypt shared library
ii  libcryptsetup12:amd64             2:2.2.2-3ubuntu2.3                amd64        disk encryption support - shared library
ii  libctf-nobfd0:amd64               2.34-6ubuntu1                     amd64        Compact C Type Format library (runtime, no BFD de>
ii  libctf0:amd64                     2.34-6ubuntu1                     amd64        Compact C Type Format library (runtime, BFD depen>
ii  libcurl3-gnutls:amd64             7.68.0-1ubuntu2.4                 amd64        easy-to-use client-side URL transfer library (Gnu>
ii  libcurl4:amd64                    7.68.0-1ubuntu2.4                 amd64        easy-to-use client-side URL transfer library (Ope>
ii  libdata-dump-perl                 1.23-1                            all          Perl module to help dump data structures
ii  libdb5.3:amd64                    5.3.28+dfsg1-0.6ubuntu2           amd64        Berkeley v5.3 Database Libraries [runtime]
ii  libdbus-1-3:amd64                 1.12.16-2ubuntu2.1                amd64        simple interprocess messaging system (library)
ii  libdconf1:amd64                   0.36.0-1                          amd64        simple configuration storage system - runtime lib>
ii  libdebconfclient0:amd64           0.251ubuntu1                      amd64        Debian Configuration Management System (C-impleme>
ii  libdevmapper-event1.02.1:amd64    2:1.02.167-1ubuntu1               amd64        Linux Kernel Device Mapper event support library
ii  libdevmapper1.02.1:amd64          2:1.02.167-1ubuntu1               amd64        Linux Kernel Device Mapper userspace library
ii  libdns-export1109                 1:9.11.16+dfsg-3~ubuntu1          amd64        Exported DNS Shared Library
ii  libdpkg-perl                      1.19.7ubuntu3                     all          Dpkg perl modules
ii  libdrm-amdgpu1:amd64              2.4.101-2                         amd64        Userspace interface to amdgpu-specific kernel DRM>
ii  libdrm-common                     2.4.101-2                         all          Userspace interface to kernel DRM services -- com>
ii  libdrm-intel1:amd64               2.4.101-2                         amd64        Userspace interface to intel-specific kernel DRM >
ii  libdrm-nouveau2:amd64             2.4.101-2                         amd64        Userspace interface to nouveau-specific kernel DR>
ii  libdrm-radeon1:amd64              2.4.101-2                         amd64        Userspace interface to radeon-specific kernel DRM>
ii  libdrm2:amd64                     2.4.101-2                         amd64        Userspace interface to kernel DRM services -- run>
ii  libeatmydata1:amd64               105-7                             amd64        Library and utilities to disable fsync and friend>
ii  libedit2:amd64                    3.1-20191231-1                    amd64        BSD editline and history libraries
ii  libefiboot1:amd64                 37-2ubuntu2.2                     amd64        Library to manage UEFI variables
ii  libefivar1:amd64                  37-2ubuntu2.2                     amd64        Library to manage UEFI variables
ii  libelf1:amd64                     0.176-1.1build1                   amd64        library to read and write ELF files
ii  libencode-locale-perl             1.05-1                            all          utility to determine the locale encoding
ii  liberror-perl                     0.17029-1                         all          Perl module for error/exception handling in an OO>
ii  libestr0:amd64                    0.1.10-2.1                        amd64        Helper functions for handling strings (lib)
ii  libevent-2.1-7:amd64              2.1.11-stable-1                   amd64        Asynchronous event notification library
ii  libexpat1:amd64                   2.2.9-1build1                     amd64        XML parsing C library - runtime library
ii  libexpat1-dev:amd64               2.2.9-1build1                     amd64        XML parsing C library - development kit
ii  libext2fs2:amd64                  1.45.5-2ubuntu1                   amd64        ext2/ext3/ext4 file system libraries
ii  libfakeroot:amd64                 1.24-1                            amd64        tool for simulating superuser privileges - shared>
ii  libfastjson4:amd64                0.99.8-2                          amd64        fast json library for C
ii  libfdisk1:amd64                   2.34-0.1ubuntu9.1                 amd64        fdisk partitioning library
ii  libffi7:amd64                     3.3-4                             amd64        Foreign Function Interface library runtime
ii  libfido2-1:amd64                  1.3.1-1ubuntu2                    amd64        library for generating and verifying FIDO 2.0 obj>
ii  libfile-basedir-perl              0.08-1                            all          Perl module to use the freedesktop basedir specif>
ii  libfile-desktopentry-perl         0.22-1                            all          Perl module to handle freedesktop .desktop files
ii  libfile-fcntllock-perl            0.22-3build4                      amd64        Perl module for file locking with fcntl(2)
ii  libfile-listing-perl              6.04-1                            all          module to parse directory listings
ii  libfile-mimeinfo-perl             0.29-1                            all          Perl module to determine file types
ii  libfl2:amd64                      2.6.4-6.2                         amd64        SHARED library for flex (a fast lexical analyzer >
ii  libflac8:amd64                    1.3.3-1build1                     amd64        Free Lossless Audio Codec - runtime C library
ii  libfont-afm-perl                  1.20-2                            all          Font::AFM - Interface to Adobe Font Metrics files
ii  libfontconfig1:amd64              2.13.1-2ubuntu3                   amd64        generic font configuration library - runtime
ii  libfontenc1:amd64                 1:1.1.4-0ubuntu1                  amd64        X11 font encoding library
ii  libfreetype6:amd64                2.10.1-2ubuntu0.1                 amd64        FreeType 2 font engine, shared library files
ii  libfribidi0:amd64                 1.0.8-2                           amd64        Free Implementation of the Unicode BiDi algorithm
ii  libfuse2:amd64                    2.9.9-3                           amd64        Filesystem in Userspace (library)
ii  libfwupd2:amd64                   1.3.11-1~focal1                   amd64        Firmware update daemon library
ii  libfwupdplugin1:amd64             1.3.11-1~focal1                   amd64        Firmware update daemon plugin library
ii  libgcab-1.0-0:amd64               1.4-1                             amd64        Microsoft Cabinet file manipulation library
ii  libgcc-9-dev:amd64                9.3.0-17ubuntu1~20.04             amd64        GCC support library (development files)
ii  libgcc-s1:amd64                   10.2.0-5ubuntu1~20.04             amd64        GCC support library
ii  libgcrypt20:amd64                 1.8.5-5ubuntu1                    amd64        LGPL Crypto library - runtime library
ii  libgd3:amd64                      2.2.5-5.2ubuntu2                  amd64        GD Graphics Library
ii  libgdbm-compat4:amd64             1.18.1-5                          amd64        GNU dbm database routines (legacy support runtime>
ii  libgdbm6:amd64                    1.18.1-5                          amd64        GNU dbm database routines (runtime version)
ii  libgirepository-1.0-1:amd64       1.64.1-1~ubuntu20.04.1            amd64        Library for handling GObject introspection data (>
ii  libgl1:amd64                      1.3.1-1ubuntu0.20.04.1            amd64        Vendor neutral GL dispatch library -- legacy GL s>
ii  libgl1-mesa-dri:amd64             20.0.8-0ubuntu1~20.04.1           amd64        free implementation of the OpenGL API -- DRI modu>
ii  libglapi-mesa:amd64               20.0.8-0ubuntu1~20.04.1           amd64        free implementation of the GL API -- shared libra>
ii  libglib2.0-0:amd64                2.64.3-1~ubuntu20.04.1            amd64        GLib library of C routines
ii  libglib2.0-bin                    2.64.3-1~ubuntu20.04.1            amd64        Programs for the GLib library
ii  libglib2.0-data                   2.64.3-1~ubuntu20.04.1            all          Common files for GLib library
ii  libglvnd0:amd64                   1.3.1-1ubuntu0.20.04.1            amd64        Vendor neutral GL dispatch library
ii  libglx-mesa0:amd64                20.0.8-0ubuntu1~20.04.1           amd64        free implementation of the OpenGL API -- GLX vend>
ii  libglx0:amd64                     1.3.1-1ubuntu0.20.04.1            amd64        Vendor neutral GL dispatch library -- GLX support
ii  libgmp-dev:amd64                  2:6.2.0+dfsg-4                    amd64        Multiprecision arithmetic library developers tools
ii  libgmp10:amd64                    2:6.2.0+dfsg-4                    amd64        Multiprecision arithmetic library
ii  libgmpxx4ldbl:amd64               2:6.2.0+dfsg-4                    amd64        Multiprecision arithmetic library (C++ bindings)
ii  libgnutls30:amd64                 3.6.13-2ubuntu1.3                 amd64        GNU TLS library - main runtime library
ii  libgomp1:amd64                    10.2.0-5ubuntu1~20.04             amd64        GCC OpenMP (GOMP) support library
ii  libgpg-error0:amd64               1.37-1                            amd64        GnuPG development runtime library
ii  libgpgme11:amd64                  1.13.1-7ubuntu2                   amd64        GPGME - GnuPG Made Easy (library)
ii  libgpm2:amd64                     1.20.7-5                          amd64        General Purpose Mouse - shared library
ii  libgssapi-krb5-2:amd64            1.17-6ubuntu4.1                   amd64        MIT Kerberos runtime libraries - krb5 GSS-API Mec>
ii  libgssapi3-heimdal:amd64          7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - GSSAPI support library
ii  libgstreamer1.0-0:amd64           1.16.2-2                          amd64        Core GStreamer libraries and elements
ii  libgudev-1.0-0:amd64              1:233-1                           amd64        GObject-based wrapper library for libudev
ii  libgusb2:amd64                    0.3.4-0.1                         amd64        GLib wrapper around libusb1
ii  libhcrypto4-heimdal:amd64         7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - crypto library
ii  libheimbase1-heimdal:amd64        7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - Base library
ii  libheimntlm0-heimdal:amd64        7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - NTLM support library
ii  libhogweed5:amd64                 3.5.1+really3.5.1-2               amd64        low level cryptographic library (public-key crypt>
ii  libhtml-form-perl                 6.07-1                            all          module that represents an HTML form element
ii  libhtml-format-perl               2.12-1                            all          module for transforming HTML into various formats
ii  libhtml-parser-perl               3.72-5                            amd64        collection of modules that parse HTML text docume>
ii  libhtml-tagset-perl               3.20-4                            all          data tables pertaining to HTML
ii  libhtml-tree-perl                 5.07-2                            all          Perl module to represent and create HTML syntax t>
ii  libhttp-cookies-perl              6.08-1                            all          HTTP cookie jars
ii  libhttp-daemon-perl               6.06-1                            all          simple http server class
ii  libhttp-date-perl                 6.05-1                            all          module of date conversion routines
ii  libhttp-message-perl              6.22-1                            all          perl interface to HTTP style messages
ii  libhttp-negotiate-perl            6.01-1                            all          implementation of content negotiation
ii  libhx509-5-heimdal:amd64          7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - X509 support library
ii  libice6:amd64                     2:1.0.10-0ubuntu1                 amd64        X11 Inter-Client Exchange library
ii  libicu-dev:amd64                  66.1-2ubuntu2                     amd64        Development files for International Components fo>
ii  libicu66:amd64                    66.1-2ubuntu2                     amd64        International Components for Unicode
ii  libidn2-0:amd64                   2.2.0-2                           amd64        Internationalized domain names (IDNA2008/TR46) li>
ii  libio-html-perl                   1.001-1                           all          open an HTML file with automatic charset detection
ii  libio-socket-ssl-perl             2.067-1                           all          Perl module implementing object oriented interfac>
ii  libio-stringy-perl                2.111-3                           all          modules for I/O on in-core objects (strings/array>
ii  libip4tc2:amd64                   1.8.4-3ubuntu2                    amd64        netfilter libip4tc library
ii  libip6tc2:amd64                   1.8.4-3ubuntu2                    amd64        netfilter libip6tc library
ii  libipc-system-simple-perl         1.26-1                            all          Perl module to run commands simply, with detailed>
ii  libisc-export1105:amd64           1:9.11.16+dfsg-3~ubuntu1          amd64        Exported ISC Shared Library
ii  libisl22:amd64                    0.22.1-1                          amd64        manipulating sets and relations of integer points>
ii  libisns0:amd64                    0.97-3                            amd64        Internet Storage Name Service - shared libraries
ii  libitm1:amd64                     10.2.0-5ubuntu1~20.04             amd64        GNU Transactional Memory Library
ii  libjansson4:amd64                 2.12-1build1                      amd64        C library for encoding, decoding and manipulating>
ii  libjbig0:amd64                    2.1-3.1build1                     amd64        JBIGkit libraries
ii  libjpeg-turbo8:amd64              2.0.3-0ubuntu1.20.04.1            amd64        IJG JPEG compliant runtime library.
ii  libjpeg8:amd64                    8c-2ubuntu8                       amd64        Independent JPEG Group's JPEG runtime library (de>
ii  libjs-inherits                    2.0.4-1                           all          Browser library that exposes inherits function fr>
ii  libjs-is-typedarray               1.0.0-2                           all          JavaScript library checking if object is TypedArr>
ii  libjs-jquery                      3.3.1~dfsg-3                      all          JavaScript library for dynamic web applications
ii  libjs-psl                         1.7.0+ds-1                        all          Domain name parser based on the Public Suffix List
ii  libjs-typedarray-to-buffer        3.0.3-3                           all          JavaScript utility converting TypedArray to buffe>
ii  libjson-c4:amd64                  0.13.1+dfsg-7ubuntu0.3            amd64        JSON manipulation library - shared library
ii  libjson-glib-1.0-0:amd64          1.4.4-2ubuntu2                    amd64        GLib JSON manipulation library
ii  libjson-glib-1.0-common           1.4.4-2ubuntu2                    all          GLib JSON manipulation library (common files)
ii  libk5crypto3:amd64                1.17-6ubuntu4.1                   amd64        MIT Kerberos runtime libraries - Crypto Library
ii  libkeyutils1:amd64                1.6-6ubuntu1                      amd64        Linux Key Management Utilities (library)
ii  libklibc:amd64                    2.0.7-1ubuntu5                    amd64        minimal libc subset for use with initramfs
ii  libkmod2:amd64                    27-1ubuntu2                       amd64        libkmod shared library
ii  libkrb5-26-heimdal:amd64          7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - libraries
ii  libkrb5-3:amd64                   1.17-6ubuntu4.1                   amd64        MIT Kerberos runtime libraries
ii  libkrb5support0:amd64             1.17-6ubuntu4.1                   amd64        MIT Kerberos runtime libraries - Support library
ii  libksba8:amd64                    1.3.5-2                           amd64        X.509 and CMS support library
ii  libldap-2.4-2:amd64               2.4.49+dfsg-2ubuntu1.5            amd64        OpenLDAP libraries
ii  libldap-common                    2.4.49+dfsg-2ubuntu1.5            all          OpenLDAP common files for libraries
ii  libllvm10:amd64                   1:10.0.0-4ubuntu1                 amd64        Modular compiler and toolchain technologies, runt>
ii  liblmdb0:amd64                    0.9.24-1                          amd64        Lightning Memory-Mapped Database shared library
ii  liblocale-gettext-perl            1.07-4                            amd64        module using libc functions for internationalizat>
ii  liblsan0:amd64                    10.2.0-5ubuntu1~20.04             amd64        LeakSanitizer -- a memory leak detector (runtime)
ii  libltdl7:amd64                    2.4.6-14                          amd64        System independent dlopen wrapper for GNU libtool
ii  liblua5.2-0:amd64                 5.2.4-1.1build3                   amd64        Shared library for the Lua interpreter version 5.2
ii  liblvm2cmd2.03:amd64              2.03.07-1ubuntu1                  amd64        LVM2 command library
ii  liblwp-mediatypes-perl            6.04-1                            all          module to guess media type for a file or a URL
ii  liblwp-protocol-https-perl        6.07-2ubuntu2                     all          HTTPS driver for LWP::UserAgent
ii  liblz4-1:amd64                    1.9.2-2                           amd64        Fast LZ compression algorithm library - runtime
ii  liblzma5:amd64                    5.2.4-1ubuntu1                    amd64        XZ-format compression library
ii  liblzo2-2:amd64                   2.10-2                            amd64        data compression library
ii  libmagic-mgc                      1:5.38-4                          amd64        File type determination library using "magic" num>
ii  libmagic1:amd64                   1:5.38-4                          amd64        Recognize the type of data in a file using "magic>
ii  libmailtools-perl                 2.21-1                            all          modules to manipulate email in perl programs
ii  libmaxminddb0:amd64               1.4.2-0ubuntu1.20.04.1            amd64        IP geolocation database library
ii  libmnl0:amd64                     1.0.4-2                           amd64        minimalistic Netlink communication library
ii  libmount1:amd64                   2.34-0.1ubuntu9.1                 amd64        device mounting library
ii  libmpc3:amd64                     1.1.0-1                           amd64        multiple precision complex floating-point library
ii  libmpdec2:amd64                   2.4.2-3                           amd64        library for decimal floating point arithmetic (ru>
ii  libmpfr6:amd64                    4.0.2-1                           amd64        multiple precision floating-point computation
ii  libmspack0:amd64                  0.10.1-2                          amd64        library for Microsoft compression formats (shared>
ii  libncurses6:amd64                 6.2-0ubuntu2                      amd64        shared libraries for terminal handling
ii  libncursesw6:amd64                6.2-0ubuntu2                      amd64        shared libraries for terminal handling (wide char>
ii  libnet-dbus-perl                  1.2.0-1                           amd64        Perl extension for the DBus bindings
ii  libnet-http-perl                  6.19-1                            all          module providing low-level HTTP connection client
ii  libnet-smtp-ssl-perl              1.04-1                            all          Perl module providing SSL support to Net::SMTP
ii  libnet-ssleay-perl                1.88-2ubuntu1                     amd64        Perl module for Secure Sockets Layer (SSL)
ii  libnetfilter-conntrack3:amd64     1.0.7-2                           amd64        Netfilter netlink-conntrack library
ii  libnetplan0:amd64                 0.100-0ubuntu4~20.04.3            amd64        YAML network configuration abstraction runtime li>
ii  libnettle7:amd64                  3.5.1+really3.5.1-2               amd64        low level cryptographic library (symmetric and on>
ii  libnewt0.52:amd64                 0.52.21-4ubuntu2                  amd64        Not Erik's Windowing Toolkit - text mode windowin>
ii  libnfnetlink0:amd64               1.0.1-3build1                     amd64        Netfilter netlink library
ii  libnftnl11:amd64                  1.1.5-1                           amd64        Netfilter nftables userspace API library
ii  libnghttp2-14:amd64               1.40.0-1build1                    amd64        library implementing HTTP/2 protocol (shared libr>
ii  libnginx-mod-http-image-filter    1.18.0-0ubuntu1                   amd64        HTTP image filter module for Nginx
ii  libnginx-mod-http-xslt-filter     1.18.0-0ubuntu1                   amd64        XSLT Transformation module for Nginx
ii  libnginx-mod-mail                 1.18.0-0ubuntu1                   amd64        Mail module for Nginx
ii  libnginx-mod-stream               1.18.0-0ubuntu1                   amd64        Stream module for Nginx
ii  libnode-dev:amd64                 10.19.0~dfsg-3ubuntu1             amd64        evented I/O for V8 javascript (development files)
ii  libnode64:amd64                   10.19.0~dfsg-3ubuntu1             amd64        evented I/O for V8 javascript - runtime library
ii  libnpth0:amd64                    1.6-1                             amd64        replacement for GNU Pth using system threads
ii  libnss-systemd:amd64              245.4-4ubuntu3.3                  amd64        nss module providing dynamic user and group name >
ii  libntfs-3g883                     1:2017.3.23AR.3-3ubuntu1          amd64        read/write NTFS driver for FUSE (runtime library)
ii  libnuma1:amd64                    2.0.12-1                          amd64        Libraries for controlling NUMA policy
ii  libogg0:amd64                     1.3.4-0ubuntu1                    amd64        Ogg bitstream library
ii  libp11-kit0:amd64                 0.23.20-1build1                   amd64        library for loading and coordinating access to PK>
ii  libpackagekit-glib2-18:amd64      1.1.13-2ubuntu1.1                 amd64        Library for accessing PackageKit using GLib
ii  libpam-cap:amd64                  1:2.32-1                          amd64        POSIX 1003.1e capabilities (PAM module)
ii  libpam-modules:amd64              1.3.1-5ubuntu4.1                  amd64        Pluggable Authentication Modules for PAM
ii  libpam-modules-bin                1.3.1-5ubuntu4.1                  amd64        Pluggable Authentication Modules for PAM - helper>
ii  libpam-runtime                    1.3.1-5ubuntu4.1                  all          Runtime support for the PAM library
ii  libpam-systemd:amd64              245.4-4ubuntu3.3                  amd64        system and service manager - PAM module
ii  libpam0g:amd64                    1.3.1-5ubuntu4.1                  amd64        Pluggable Authentication Modules library
ii  libparted2:amd64                  3.3-4ubuntu0.20.04.1              amd64        disk partition manipulator - shared library
ii  libpcap0.8:amd64                  1.9.1-3                           amd64        system interface for user-level packet capture
ii  libpci3:amd64                     1:3.6.4-1                         amd64        PCI utilities (shared library)
ii  libpciaccess0:amd64               0.16-0ubuntu1                     amd64        Generic PCI access library for X
ii  libpcre2-8-0:amd64                10.34-7                           amd64        New Perl Compatible Regular Expression Library- 8>
ii  libpcre3:amd64                    2:8.39-12build1                   amd64        Old Perl 5 Compatible Regular Expression Library >
ii  libperl5.30:amd64                 5.30.0-9ubuntu0.2                 amd64        shared Perl library
ii  libpipeline1:amd64                1.5.2-2build1                     amd64        Unix process pipeline manipulation library
ii  libplymouth5:amd64                0.9.4git20200323-0ubuntu6.2       amd64        graphical boot animation and logger - shared libr>
ii  libpng16-16:amd64                 1.6.37-2                          amd64        PNG library - runtime (version 1.6)
ii  libpolkit-agent-1-0:amd64         0.105-26ubuntu1                   amd64        PolicyKit Authentication Agent API
ii  libpolkit-gobject-1-0:amd64       0.105-26ubuntu1                   amd64        PolicyKit Authorization API
ii  libpopt0:amd64                    1.16-14                           amd64        lib for parsing cmdline parameters
ii  libpq5:amd64                      12.5-0ubuntu0.20.04.1             amd64        PostgreSQL C client library
ii  libprocps8:amd64                  2:3.3.16-1ubuntu2                 amd64        library for accessing process information from /p>
ii  libproxy1v5:amd64                 0.4.15-10ubuntu1.1                amd64        automatic proxy configuration management library >
ii  libpsl5:amd64                     0.21.0-1ubuntu1                   amd64        Library for Public Suffix List (shared libraries)
ii  libpulse0:amd64                   1:13.99.1-1ubuntu3.8              amd64        PulseAudio client libraries
ii  libpulsedsp:amd64                 1:13.99.1-1ubuntu3.8              amd64        PulseAudio OSS pre-load library
ii  libpython2-stdlib:amd64           2.7.17-2ubuntu4                   amd64        interactive high-level object-oriented language (>
ii  libpython2.7-minimal:amd64        2.7.18-1~20.04                    amd64        Minimal subset of the Python language (version 2.>
ii  libpython2.7-stdlib:amd64         2.7.18-1~20.04                    amd64        Interactive high-level object-oriented language (>
ii  libpython3-dev:amd64              3.8.2-0ubuntu2                    amd64        header files and a static library for Python (def>
ii  libpython3-stdlib:amd64           3.8.2-0ubuntu2                    amd64        interactive high-level object-oriented language (>
ii  libpython3.8:amd64                3.8.5-1~20.04                     amd64        Shared Python runtime library (version 3.8)
ii  libpython3.8-dev:amd64            3.8.5-1~20.04                     amd64        Header files and a static library for Python (v3.>
ii  libpython3.8-minimal:amd64        3.8.5-1~20.04                     amd64        Minimal subset of the Python language (version 3.>
ii  libpython3.8-stdlib:amd64         3.8.5-1~20.04                     amd64        Interactive high-level object-oriented language (>
ii  libquadmath0:amd64                10.2.0-5ubuntu1~20.04             amd64        GCC Quad-Precision Math Library
ii  libreadline5:amd64                5.2+dfsg-3build3                  amd64        GNU readline and history libraries, run-time libr>
ii  libreadline8:amd64                8.0-4                             amd64        GNU readline and history libraries, run-time libr>
ii  libroken18-heimdal:amd64          7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - roken support library
ii  librtmp1:amd64                    2.4+20151223.gitfa8646d.1-2build1 amd64        toolkit for RTMP streams (shared library)
ii  libruby2.7:amd64                  2.7.0-5ubuntu1.2                  amd64        Libraries necessary to run Ruby 2.7
ii  libsasl2-2:amd64                  2.1.27+dfsg-2                     amd64        Cyrus SASL - authentication abstraction library
ii  libsasl2-modules:amd64            2.1.27+dfsg-2                     amd64        Cyrus SASL - pluggable authentication modules
ii  libsasl2-modules-db:amd64         2.1.27+dfsg-2                     amd64        Cyrus SASL - pluggable authentication modules (DB)
ii  libseccomp2:amd64                 2.4.3-1ubuntu3.20.04.3            amd64        high level interface to Linux seccomp filter
ii  libselinux1:amd64                 3.0-1build2                       amd64        SELinux runtime shared libraries
ii  libsemanage-common                3.0-1build2                       all          Common files for SELinux policy management librar>
ii  libsemanage1:amd64                3.0-1build2                       amd64        SELinux policy management library
ii  libsensors-config                 1:3.6.0-2ubuntu1                  all          lm-sensors configuration files
ii  libsensors5:amd64                 1:3.6.0-2ubuntu1                  amd64        library to read temperature/voltage/fan sensors
ii  libsepol1:amd64                   3.0-1                             amd64        SELinux library for manipulating binary security >
ii  libsgutils2-2                     1.44-1ubuntu2                     amd64        utilities for devices using the SCSI command set >
ii  libsigsegv2:amd64                 2.12-2                            amd64        Library for handling page faults in a portable way
ii  libslang2:amd64                   2.3.2-4                           amd64        S-Lang programming library - runtime version
ii  libsm6:amd64                      2:1.2.3-1                         amd64        X11 Session Management library
ii  libsmartcols1:amd64               2.34-0.1ubuntu9.1                 amd64        smart column output alignment library
ii  libsmbios-c2                      2.4.3-1                           amd64        Provide access to (SM)BIOS information -- dynamic>
ii  libsndfile1:amd64                 1.0.28-7                          amd64        Library for reading/writing audio files
ii  libsodium23:amd64                 1.0.18-1                          amd64        Network communication, cryptography and signaturi>
ii  libsoup2.4-1:amd64                2.70.0-1                          amd64        HTTP library implementation in C -- Shared library
ii  libsqlite3-0:amd64                3.31.1-4ubuntu0.2                 amd64        SQLite 3 shared library
ii  libsqlite3-dev:amd64              3.31.1-4ubuntu0.2                 amd64        SQLite 3 development files
ii  libss2:amd64                      1.45.5-2ubuntu1                   amd64        command-line interface parsing library
ii  libssh-4:amd64                    0.9.3-2ubuntu2.1                  amd64        tiny C SSH library (OpenSSL flavor)
ii  libssl-dev:amd64                  1.1.1f-1ubuntu2.1                 amd64        Secure Sockets Layer toolkit - development files
ii  libssl1.1:amd64                   1.1.1f-1ubuntu2.1                 amd64        Secure Sockets Layer toolkit - shared libraries
ii  libstdc++-9-dev:amd64             9.3.0-17ubuntu1~20.04             amd64        GNU Standard C++ Library v3 (development files)
ii  libstdc++6:amd64                  10.2.0-5ubuntu1~20.04             amd64        GNU Standard C++ Library v3
ii  libstemmer0d:amd64                0+svn585-2                        amd64        Snowball stemming algorithms for use in Informati>
ii  libsystemd0:amd64                 245.4-4ubuntu3.3                  amd64        systemd utility library
ii  libtasn1-6:amd64                  4.16.0-2                          amd64        Manage ASN.1 structures (runtime)
ii  libtdb1:amd64                     1.4.2-3build1                     amd64        Trivial Database - shared library
ii  libtext-charwidth-perl            0.04-10                           amd64        get display widths of characters on the terminal
ii  libtext-iconv-perl                1.7-7                             amd64        module to convert between character sets in Perl
ii  libtext-wrapi18n-perl             0.06-9                            all          internationalized substitute of Text::Wrap
ii  libtie-ixhash-perl                1.23-2                            all          Perl module to order associative arrays
ii  libtiff5:amd64                    4.1.0+git191117-2build1           amd64        Tag Image File Format (TIFF) library
ii  libtimedate-perl                  2.3200-1                          all          collection of modules to manipulate date/time inf>
ii  libtinfo6:amd64                   6.2-0ubuntu2                      amd64        shared low-level terminfo library for terminal ha>
ii  libtry-tiny-perl                  0.30-1                            all          module providing minimalistic try/catch
ii  libtsan0:amd64                    10.2.0-5ubuntu1~20.04             amd64        ThreadSanitizer -- a Valgrind-based detector of d>
ii  libtss2-esys0                     2.3.2-1                           amd64        TPM2 Software stack library - TSS and TCTI librar>
ii  libubsan1:amd64                   10.2.0-5ubuntu1~20.04             amd64        UBSan -- undefined behaviour sanitizer (runtime)
ii  libuchardet0:amd64                0.0.6-3build1                     amd64        universal charset detection library - shared libr>
ii  libudev1:amd64                    245.4-4ubuntu3.3                  amd64        libudev shared library
ii  libunistring2:amd64               0.9.10-2                          amd64        Unicode string library for C
ii  libunwind8:amd64                  1.2.1-9build1                     amd64        library to determine the call-chain of a program >
ii  liburcu6:amd64                    0.11.1-2                          amd64        userspace RCU (read-copy-update) library
ii  liburi-perl                       1.76-2                            all          module to manipulate and access URI strings
ii  libusb-1.0-0:amd64                2:1.0.23-2build1                  amd64        userspace USB programming library
ii  libutempter0:amd64                1.1.6-4                           amd64        privileged helper for utmp/wtmp updates (runtime)
ii  libuuid1:amd64                    2.34-0.1ubuntu9.1                 amd64        Universally Unique ID library
ii  libuv1:amd64                      1.34.2-1ubuntu1.1                 amd64        asynchronous event notification library - runtime>
ii  libuv1-dev:amd64                  1.34.2-1ubuntu1.1                 amd64        asynchronous event notification library - develop>
ii  libvorbis0a:amd64                 1.3.6-2ubuntu1                    amd64        decoder library for Vorbis General Audio Compress>
ii  libvorbisenc2:amd64               1.3.6-2ubuntu1                    amd64        encoder library for Vorbis General Audio Compress>
ii  libvorbisfile3:amd64              1.3.6-2ubuntu1                    amd64        high-level API for Vorbis General Audio Compressi>
ii  libvulkan1:amd64                  1.2.131.2-1                       amd64        Vulkan loader library
ii  libwayland-client0:amd64          1.18.0-1                          amd64        wayland compositor infrastructure - client library
ii  libwebp6:amd64                    0.6.1-2                           amd64        Lossy compression of digital photographic images.
ii  libwind0-heimdal:amd64            7.7.0+dfsg-1ubuntu1               amd64        Heimdal Kerberos - stringprep implementation
ii  libwrap0:amd64                    7.6.q-30                          amd64        Wietse Venema's TCP wrappers library
ii  libwww-perl                       6.43-1                            all          simple and consistent interface to the world-wide>
ii  libwww-robotrules-perl            6.02-1                            all          database of robots.txt-derived permissions
ii  libx11-6:amd64                    2:1.6.9-2ubuntu1.1                amd64        X11 client-side library
ii  libx11-data                       2:1.6.9-2ubuntu1.1                all          X11 client-side library
ii  libx11-protocol-perl              0.56-7                            all          Perl module for the X Window System Protocol, ver>
ii  libx11-xcb1:amd64                 2:1.6.9-2ubuntu1.1                amd64        Xlib/XCB interface library
ii  libxau6:amd64                     1:1.0.9-0ubuntu1                  amd64        X11 authorisation library
ii  libxaw7:amd64                     2:1.0.13-1                        amd64        X11 Athena Widget library
ii  libxcb-dri2-0:amd64               1.14-2                            amd64        X C Binding, dri2 extension
ii  libxcb-dri3-0:amd64               1.14-2                            amd64        X C Binding, dri3 extension
ii  libxcb-glx0:amd64                 1.14-2                            amd64        X C Binding, glx extension
ii  libxcb-present0:amd64             1.14-2                            amd64        X C Binding, present extension
ii  libxcb-randr0:amd64               1.14-2                            amd64        X C Binding, randr extension
ii  libxcb-shape0:amd64               1.14-2                            amd64        X C Binding, shape extension
ii  libxcb-sync1:amd64                1.14-2                            amd64        X C Binding, sync extension
ii  libxcb1:amd64                     1.14-2                            amd64        X C Binding
ii  libxcomposite1:amd64              1:0.4.5-1                         amd64        X11 Composite extension library
ii  libxcursor1:amd64                 1:1.2.0-2                         amd64        X cursor management library
ii  libxdamage1:amd64                 1:1.1.5-2                         amd64        X11 damaged region extension library
ii  libxdmcp6:amd64                   1:1.1.3-0ubuntu1                  amd64        X11 Display Manager Control Protocol library
ii  libxext6:amd64                    2:1.3.4-0ubuntu1                  amd64        X11 miscellaneous extension library
ii  libxfixes3:amd64                  1:5.0.3-2                         amd64        X11 miscellaneous 'fixes' extension library
ii  libxft2:amd64                     2.3.3-0ubuntu1                    amd64        FreeType-based font drawing library for X
ii  libxi6:amd64                      2:1.7.10-0ubuntu1                 amd64        X11 Input extension library
ii  libxinerama1:amd64                2:1.1.4-2                         amd64        X11 Xinerama extension library
ii  libxkbfile1:amd64                 1:1.1.0-1                         amd64        X11 keyboard file manipulation library
ii  libxml-parser-perl                2.46-1                            amd64        Perl module for parsing XML files
ii  libxml-twig-perl                  1:3.50-2                          all          Perl module for processing huge XML documents in >
ii  libxml-xpathengine-perl           0.14-1                            all          re-usable XPath engine for DOM-like trees
ii  libxml2:amd64                     2.9.10+dfsg-5                     amd64        GNOME XML library
ii  libxml2-dev:amd64                 2.9.10+dfsg-5                     amd64        Development files for the GNOME XML library
ii  libxml2-utils                     2.9.10+dfsg-5                     amd64        XML utilities
ii  libxmlb1:amd64                    0.1.15-2                          amd64        Binary XML library
ii  libxmlsec1:amd64                  1.2.28-2                          amd64        XML security library
ii  libxmlsec1-openssl:amd64          1.2.28-2                          amd64        Openssl engine for the XML security library
ii  libxmu6:amd64                     2:1.1.3-0ubuntu1                  amd64        X11 miscellaneous utility library
ii  libxmuu1:amd64                    2:1.1.3-0ubuntu1                  amd64        X11 miscellaneous micro-utility library
ii  libxpm4:amd64                     1:3.5.12-1                        amd64        X11 pixmap library
ii  libxrandr2:amd64                  2:1.5.2-0ubuntu1                  amd64        X11 RandR extension library
ii  libxrender1:amd64                 1:0.9.10-1                        amd64        X Rendering Extension client library
ii  libxshmfence1:amd64               1.3-1                             amd64        X shared memory fences - shared library
ii  libxslt1.1:amd64                  1.1.34-4                          amd64        XSLT 1.0 processing library - runtime library
ii  libxt6:amd64                      1:1.1.5-1                         amd64        X11 toolkit intrinsics library
ii  libxtables12:amd64                1.8.4-3ubuntu2                    amd64        netfilter xtables library
ii  libxtst6:amd64                    2:1.2.3-1                         amd64        X11 Testing -- Record extension library
ii  libxv1:amd64                      2:1.0.11-1                        amd64        X11 Video extension library
ii  libxxf86dga1:amd64                2:1.1.5-0ubuntu1                  amd64        X11 Direct Graphics Access extension library
ii  libxxf86vm1:amd64                 1:1.1.4-1build1                   amd64        X11 XFree86 video mode extension library
ii  libyaml-0-2:amd64                 0.2.2-1                           amd64        Fast YAML 1.1 parser and emitter library
ii  libzstd1:amd64                    1.4.4+dfsg-3                      amd64        fast lossless compression algorithm
ii  linux-base                        4.5ubuntu3.1                      all          Linux image base package
ii  linux-libc-dev:amd64              5.4.0-58.64                       amd64        Linux Kernel Headers for development
ii  locales                           2.31-0ubuntu9.1                   all          GNU C Library: National Language (locale) data [s>
ii  login                             1:4.8.1-1ubuntu5.20.04            amd64        system login tools
ii  logrotate                         3.14.0-4ubuntu3                   amd64        Log rotation utility
ii  logsave                           1.45.5-2ubuntu1                   amd64        save the output of a command in a log file
ii  lsb-base                          11.1.0ubuntu2                     all          Linux Standard Base init script functionality
ii  lsb-release                       11.1.0ubuntu2                     all          Linux Standard Base version reporting utility
ii  lshw                              02.18.85-0.3ubuntu2               amd64        information about hardware configuration
ii  lsof                              4.93.2+dfsg-1                     amd64        utility to list open files
ii  ltrace                            0.7.3-6.1ubuntu1                  amd64        Tracks runtime library calls in dynamically linke>
ii  lvm2                              2.03.07-1ubuntu1                  amd64        Linux Logical Volume Manager
ii  lxd-agent-loader                  0.4                               all          LXD - VM agent loader
ii  lz4                               1.9.2-2                           amd64        Fast LZ compression algorithm library - tool
ii  m4                                1.4.18-4                          amd64        macro processing language
ii  make                              4.2.1-1.2                         amd64        utility for directing compilation
ii  man-db                            2.9.1-1                           amd64        tools for reading manual pages
ii  manpages                          5.05-1                            all          Manual pages about using a GNU/Linux system
ii  manpages-dev                      5.05-1                            all          Manual pages about using GNU/Linux for development
ii  mawk                              1.3.4.20200120-2                  amd64        Pattern scanning and text processing language
ii  mdadm                             4.1-5ubuntu1.2                    amd64        tool to administer Linux MD arrays (software RAID)
ii  mesa-vulkan-drivers:amd64         20.0.8-0ubuntu1~20.04.1           amd64        Mesa Vulkan graphics drivers
ii  mime-support                      3.64ubuntu1                       all          MIME files 'mime.types' & 'mailcap', and support >
ii  motd-news-config                  11ubuntu5.2                       all          Configuration for motd-news shipped in base-files
ii  mount                             2.34-0.1ubuntu9.1                 amd64        tools for mounting and manipulating filesystems
ii  mtr-tiny                          0.93-1                            amd64        Full screen ncurses traceroute tool
ii  multipath-tools                   0.8.3-1ubuntu2                    amd64        maintain multipath block device access
ii  nano                              4.8-1ubuntu1                      amd64        small, friendly text editor inspired by Pico
ii  ncurses-base                      6.2-0ubuntu2                      all          basic terminal type definitions
ii  ncurses-bin                       6.2-0ubuntu2                      amd64        terminal-related programs and man pages
ii  ncurses-term                      6.2-0ubuntu2                      all          additional terminal type definitions
ii  netbase                           6.1                               all          Basic TCP/IP networking system
ii  netcat-openbsd                    1.206-1ubuntu1                    amd64        TCP/IP swiss army knife
ii  netplan.io                        0.100-0ubuntu4~20.04.3            amd64        YAML network configuration abstraction for variou>
ii  networkd-dispatcher               2.0.1-1                           all          Dispatcher service for systemd-networkd connectio>
ii  nginx                             1.18.0-0ubuntu1                   all          small, powerful, scalable web/proxy server
ii  nginx-common                      1.18.0-0ubuntu1                   all          small, powerful, scalable web/proxy server - comm>
ii  nginx-core                        1.18.0-0ubuntu1                   amd64        nginx web/proxy server (standard version)
ii  node-abbrev                       1.1.1-2                           all          Get unique abbreviations for a set of strings - N>
ii  node-ajv                          6.10.2-1                          all          another JSON Schema Validator
ii  node-ansi                         0.3.1-1                           all          Advanced ANSI formatting tool for Node.js
ii  node-ansi-align                   3.0.0-1                           all          align-text with ANSI support for CLIs
ii  node-ansi-regex                   5.0.0-1                           all          regular expression for matching ANSI escape codes
ii  node-ansi-styles                  4.2.1-1                           all          ANSI escape codes for styling strings in the term>
ii  node-ansistyles                   0.1.3-2                           all          prints output in different styles
ii  node-aproba                       2.0.0-1                           all          light-weight argument validator
ii  node-archy                        1.0.0-3                           all          Pretty-print nested hierarchies module for Node.js
ii  node-are-we-there-yet             1.1.5-1                           all          Keep track of the overall completion of many disp>
ii  node-asap                         2.0.6-2                           all          High-priority task queue for Node.js and browsers
ii  node-asn1                         0.2.3-2                           all          ASN.1 encoder and decoder (BER)
ii  node-assert-plus                  1.0.0-2                           all          small wrapper over nodejs' assert module with two>
ii  node-asynckit                     0.4.0-3                           all          Minimal async jobs utility library, with streams >
ii  node-aws-sign2                    0.7.1-2                           all          AWS signing in JavaScript
ii  node-aws4                         1.9.0-1                           all          Signs and prepares requests using AWS Signature V>
ii  node-balanced-match               1.0.0-1                           all          Match balanced character pairs in Node.js
ii  node-bcrypt-pbkdf                 1.0.2-1                           all          Port of the OpenBSD bcrypt_pbkdf function to pure>
ii  node-bl                           4.0.0-2                           all          access multiple buffers with Buffer interface - N>
ii  node-bluebird                     3.5.1+dfsg2-2build1               all          Fully featured Promises/A+ implementation for Nod>
ii  node-boxen                        4.2.0-2                           all          Create boxes in the terminal
ii  node-brace-expansion              1.1.11-1                          all          Brace expansion as known from sh/bash for Node.js
ii  node-builtin-modules              3.1.0-1                           all          List of the Node.js builtin modules
ii  node-builtins                     1.0.3-1                           all          lists nodejs builtin modules
ii  node-cacache                      11.3.3-2                          all          fast, fault-tolerant, disk-based, data-agnostic, >
ii  node-call-limit                   1.1.1-1                           all          Limit the number of simultaneous calls to an asyn>
ii  node-camelcase                    5.3.1-1                           all          Convert a string to camelCase
ii  node-caseless                     0.12.0-1                          all          get/set/check for HTTP headers in a caseless mann>
ii  node-chalk                        2.4.2-1                           all          Terminal string styling for Node.js
ii  node-chownr                       1.1.3-3                           all          like chown -R
ii  node-ci-info                      2.0.0-1                           all          Get details about the current Continuous Integrat>
ii  node-cli-boxes                    2.2.0-2                           all          Boxes for use in the terminal
ii  node-cliui                        4.1.0-2                           all          easily create complex multi-column CLIs
ii  node-clone                        2.1.2-1                           all          deep cloning of objects and arrays
ii  node-co                           4.6.0-1                           all          generator async control flow goodness
ii  node-color-convert                1.9.3-1                           all          Plain color conversion functions
ii  node-color-name                   1.1.3-1                           all          list of color names and its values
ii  node-colors                       1.4.0-1                           all          Get color and style in your node.js console
ii  node-columnify                    1.5.4-1                           all          Render data in text columns with in-column text-w>
ii  node-combined-stream              1.0.8-1                           all          Append streams one after another - module for Nod>
ii  node-concat-map                   0.0.1-2                           all          concatenative mapdashery for Node.js
ii  node-concat-stream                1.6.2-1                           all          writable stream that concatenates strings
ii  node-config-chain                 1.1.12-1                          all          Handle Configuration Once And For All
ii  node-configstore                  5.0.1-1                           all          load and save config without having to think abou>
ii  node-console-control-strings      1.1.0-1                           all          cross-platform tested terminal/console command st>
ii  node-copy-concurrently            1.0.5-4                           all          Copy files, directories and symlinks concurrently
ii  node-core-util-is                 1.0.2-1                           all          util.is* functions introduced in Node v0.12 for o>
ii  node-cross-spawn                  5.1.0-2                           all          Cross platform drop-in replacement for spawn
ii  node-crypto-random-string         1.0.0-1                           all          Generate a cryptographically strong random string
ii  node-cyclist                      1.0.1-2                           all          efficient cyclic list implementation for Javascri>
ii  node-dashdash                     1.14.1-2                          all          light, featureful and explicit option parsing lib>
ii  node-debug                        4.1.1-2                           all          small debugging utility for Node.js
ii  node-decamelize                   1.2.0-1                           all          convert a camelized string into a lowercased one >
ii  node-decompress-response          3.3.0-1                           all          Decompress a HTTP response if needed
ii  node-deep-extend                  0.6.0-1                           all          Recursive object extending
ii  node-defaults                     1.0.3-1                           all          merge single level defaults over a config object
ii  node-define-properties            1.1.3-1                           all          Define multiple non-enumerable properties at once
ii  node-delayed-stream               1.0.0-4                           all          Buffer stream events for later handling - module >
ii  node-delegates                    1.0.0-1                           all          delegate methods and accessors to another property
ii  node-detect-indent                5.0.0-1                           all          Detect the indentation of code
ii  node-detect-newline               2.1.0-1                           all          Detect the dominant newline character of a string
ii  node-dot-prop                     5.2.0-1                           all          updates a property from a nested object
ii  node-duplexer3                    0.1.4-5                           all          Like duplexer but using streams3
ii  node-duplexify                    4.1.1-1                           all          Turn a writable and readable stream into a stream>
ii  node-ecc-jsbn                     0.2.0-2                           all          ECC JS code based on JSBN
ii  node-editor                       1.0.0-1                           all          Launch $EDITOR in your program
ii  node-encoding                     0.1.12-3                          all          Convert encodings, uses iconv by default and fall>
ii  node-end-of-stream                1.4.4-1                           all          Invoke a callback when a stream has completed or >
ii  node-err-code                     2.0.0+dfsg-1                      all          Create an error with a code
ii  node-errno                        0.1.7-1                           all          libuv errno details exposed - Node.js module
ii  node-es6-promise                  4.2.8-6                           all          Lightweight async code library for JavaScript (No>
ii  node-escape-string-regexp         1.0.5-1                           all          Escape RegExp special characters in Node.js
ii  node-execa                        0.10.0+dfsg-1                     all          better `child_process`
ii  node-extend                       3.0.2-1                           all          port of jQuery.extend for Node.js
ii  node-extsprintf                   1.3.0-1                           all          extended POSIX-style sprintf
ii  node-fast-deep-equal              1.1.0-1                           all          Fast Deep Equal
ii  node-find-up                      4.1.0-2                           all          Find a file by walking up parent directories
ii  node-flush-write-stream           2.0.0-2                           all          Write stream constructor
ii  node-forever-agent                0.6.1-2                           all          HTTP agent supporting keep-alive requests - modul>
ii  node-form-data                    3.0.0-2                           all          Create multipart/form-data streams module for Nod>
ii  node-from2                        2.3.0-1                           all          wrapper for ReadableStream
ii  node-fs-vacuum                    1.2.10-3                          all          Remove empty branches in a directory tree
ii  node-fs-write-stream-atomic       1.0.10-4                          all          Like fs.createWriteStream(...), but atomic
ii  node-fs.realpath                  1.0.0-1                           all          Use node's fs.realpath
ii  node-function-bind                1.1.1+repack-1                    all          Implementation of Function.prototype.bind
ii  node-gauge                        2.7.4-1                           all          terminal based horizontal progress bar
ii  node-genfun                       5.0.0-1                           all          fast, prototype-friendly multimethods
ii  node-get-caller-file              1.0.2-1                           all          inspects the v8 stack trace
ii  node-get-stream                   4.1.0-1                           all          Get a stream as a string, buffer, or array
ii  node-getpass                      0.1.7-1                           all          get a password from terminal
ii  node-glob                         7.1.6-1                           all          glob functionality for Node.js
ii  node-got                          7.1.0-1                           all          Simplified HTTP requests
ii  node-graceful-fs                  4.2.3-2                           all          drop-in replacement improving the Node.js fs modu>
ii  node-gyp                          6.1.0-3                           all          Native addon build tool for Node.js
ii  node-har-schema                   2.0.0-3                           all          JSON Schema for HTTP Archive (HAR)
ii  node-har-validator                5.1.3-1                           all          Extremely fast HTTP Archive (HAR) validator using>
ii  node-has-flag                     4.0.0-1                           all          check if argv has a specific flag
ii  node-has-symbol-support-x         1.4.1+dfsg-1                      all          Tests if ES6 Symbol is supported
ii  node-has-to-string-tag-x          1.4.1+dfsg-1                      all          Tests if ES6 @@toStringTag is supported
ii  node-has-unicode                  2.0.1-2                           all          Try to guess if your terminal supports unicode
ii  node-hosted-git-info              2.8.5-1                           all          Provides metadata from Github, Bitbucket and Gitl>
ii  node-http-signature               1.3.2-1                           all          Reference implementation of Joyent's HTTP Signatu>
ii  node-iconv-lite                   0.4.23-1                          all          Pure JS character encoding conversion
ii  node-iferr                        1.0.2-1                           all          Higher-order functions for easier error handling
ii  node-import-lazy                  3.0.0.REALLY.2.1.0-1              all          import a module lazily
ii  node-imurmurhash                  0.1.4-1                           all          incremental implementation of MurmurHash3 hashing>
ii  node-inflight                     1.0.6-1                           all          add callbacks to requests in flight to avoid asyn>
ii  node-inherits                     2.0.4-1                           all          Node.js module that exposes inherits function
ii  node-ini                          1.3.5-1                           all          ini format parser and serializer for Node.js
ii  node-invert-kv                    1.0.0-1                           all          invert the key/value of an object
ii  node-ip                           1.1.5-5                           all          IP address utilities for node.js
ii  node-ip-regex                     4.1.0-2                           all          Regular expression for matching IP addresses
ii  node-is-npm                       1.0.0-1                           all          Checks if your code is running as an npm script
ii  node-is-obj                       1.0.1-2                           all          Check if a JavaScript value is an object
ii  node-is-object                    1.0.1-1                           all          Checks whether a value is an object
ii  node-is-path-inside               1.0.1-1                           all          Check if a path is inside another path
ii  node-is-plain-obj                 1.1.0-1                           all          Check if a value is a plain object
ii  node-is-retry-allowed             1.1.0-1                           all          Is retry allowed for Error?
ii  node-is-stream                    1.1.0-1                           all          Check if something is a Node.js stream
ii  node-is-typedarray                1.0.0-2                           all          JavaScript library checking if object is TypedArr>
ii  node-isarray                      2.0.5-1                           all          JavaScript Array#isArray for older browsers
ii  node-isexe                        2.0.0-4                           all          minimal module to check if a file is executable
ii  node-isstream                     0.1.2+dfsg-1                      all          Determine if an object is a Stream
ii  node-isurl                        4.0.1-2                           all          Checks whether a value is a WHATWG URL
ii  node-jsbn                         1.1.0-1                           all          fast, portable implementation of large-number mat>
ii  node-json-parse-better-errors     1.0.2-2                           all          JSON.parse() with context information on error
ii  node-json-schema                  0.2.3-1                           all          JSON Schema validation and specifications
ii  node-json-schema-traverse         0.3.1-1                           all          Json schema traveral package
ii  node-json-stable-stringify        1.0.1-1                           all          deterministic JSON.stringify()
ii  node-json-stringify-safe          5.0.1+repack-2                    all          JSON.stringify with circular references module fo>
ii  node-jsonify                      0.0.0-1                           all          JSON without touching any globals
ii  node-jsonparse                    1.3.1-7                           all          Pure javascript JSON streaming parser for node.js
ii  node-jsonstream                   1.3.5-1                           all          streaming JSON.parse and stringify
ii  node-jsprim                       1.4.1-1                           all          utilities for primitive JavaScript types
ii  node-latest-version               3.1.0-1                           all          Get the latest version of an npm package
ii  node-lazy-property                1.0.0-3                           all          Adds a lazily initialized property to the object
ii  node-lcid                         1.0.0-1                           all          map standard locale identifies and lcid
ii  node-libnpx                       10.2.1-2                          all          support library for npx
ii  node-locate-path                  5.0.0-2                           all          Get the first path that exists on disk of multipl>
ii  node-lockfile                     1.0.4-3                           all          Asynchronous file lock module for Node.js
ii  node-lodash                       4.17.15+dfsg-2                    all          Lo-dash is a Node.js utility library
ii  node-lodash-packages              4.17.15+dfsg-2                    all          Lo-dash is a Node.js utility library (per method >
ii  node-lowercase-keys               2.0.0-1                           all          Lowercase the keys of an object
ii  node-lru-cache                    5.1.1-5                           all          least-recently-used cache object for Node.js
ii  node-make-dir                     3.0.2-1                           all          Make a directory and its parents if needed - Thin>
ii  node-mem                          1.1.0-1                           all          Memoize functions
ii  node-mime                         2.4.4+dfsg-1                      all          library for mime-type mapping for Node.js
ii  node-mime-types                   2.1.25-1                          all          ultimate JavaScript content-type utility - Node.j>
ii  node-mimic-fn                     3.0.0-1                           all          Make a function mimic another one
ii  node-mimic-response               2.1.0-1                           all          Mimic a Node.js HTTP response stream
ii  node-minimatch                    3.0.4-4                           all          Convert glob expressions into RegExp objects for >
ii  node-minimist                     1.2.5-1                           all          Argument options parsing for Node.js
ii  node-mississippi                  3.0.0-1                           all          collection of useful streams
ii  node-mkdirp                       0.5.1-2                           all          Recursively create directories - Node.js module
ii  node-move-concurrently            1.0.1-2                           all          Move files and directories concurrently
ii  node-ms                           2.1.1-1                           all          milliseconds conversion utility - Node.js module
ii  node-mute-stream                  0.0.8-2                           all          Pass-through stream that can be muted module for >
ii  node-nopt                         3.0.6-4                           all          Command-line option parser for Node.js
ii  node-normalize-package-data       2.5.0-1                           all          Normalizes package metadata - Node.js module
ii  node-npm-bundled                  1.1.1-1                           all          Parses info on bundled dependencies
ii  node-npm-package-arg              6.1.1-1                           all          Parse the things that can be arguments to npm ins>
ii  node-npm-run-path                 2.0.2-2                           all          Get your PATH prepended with locally installed bi>
ii  node-npmlog                       4.1.2-2                           all          Logger with custom levels and colored output for >
ii  node-number-is-nan                2.0.0-1                           all          ES6 Number.isNaN() ponyfill
ii  node-oauth-sign                   0.9.0-2                           all          OAuth 1 signing module for Node.js
ii  node-object-assign                4.1.1-3                           all          ES2015 Object.assign() ponyfill
ii  node-once                         1.4.0-3                           all          Run a function only once with this module for Nod>
ii  node-opener                       1.5.1-1                           all          Opens stuff, like webpages and files and executab>
ii  node-os-locale                    4.0.0-1                           all          get the system locale
ii  node-os-tmpdir                    1.0.2-1                           all          Node.js os.tmpdir() ponyfill
ii  node-osenv                        0.1.5-1                           all          Environment settings lookup module for Node.js
ii  node-p-cancelable                 0.3.0-1                           all          Create a promise that can be canceled
ii  node-p-finally                    1.0.0-2                           all          Invoked when the promise is settled regardless of>
ii  node-p-is-promise                 3.0.0-1                           all          Check if something is a promise
ii  node-p-limit                      2.2.2-1                           all          run multiple promise-returning & async functions
ii  node-p-locate                     2.0.0-1                           all          async version of Array#find
ii  node-p-timeout                    1.2.0-1                           all          Timeout a promise after a specified amount of time
ii  node-package-json                 4.0.1-1                           all          Get metadata of a package from the npm registry
ii  node-parallel-transform           1.1.0-2                           all          Runs transforms in parallel
ii  node-path-exists                  4.0.0-2                           all          Check if a path exists
ii  node-path-is-absolute             2.0.0-1                           all          Node.js 0.12 path.isAbsolute() ponyfill
ii  node-path-is-inside               1.0.2-1                           all          Tests whether one path is inside another path
ii  node-performance-now              2.1.0+debian-1                    all          Implements performance.now (based on process.hrti>
ii  node-pify                         3.0.0-1                           all          promisify a callback-style function
ii  node-prepend-http                 2.0.0-1                           all          Prepend `http://` to humanized URLs like todomvc.>
ii  node-process-nextick-args         2.0.0-1                           all          process.nextTick but always with args
ii  node-promise-inflight             1.0.1-1                           all          one promise for multiple requests in flight to av>
ii  node-promise-retry                1.1.1-4                           all          Retries a function that returns a promise
ii  node-promzard                     0.3.0-1                           all          Promzard provides a prompting json wizard
ii  node-proto-list                   1.2.4-1                           all          utility for managing a prototype chain
ii  node-prr                          1.0.1-1                           all          Object.defineProperty() with common defaults - No>
ii  node-pseudomap                    1.0.2-1                           all          like ES6 `Map`, but without iterators
ii  node-psl                          1.7.0+ds-1                        all          Node.js domain name parser based on the Public Su>
ii  node-pump                         3.0.0-2                           all          small node module that pipes streams together
ii  node-pumpify                      2.0.1-1                           all          combine streams into a single duplex stream by pu>
ii  node-punycode                     2.1.1-3                           all          Nodejs robust Punycode converter fully RFC compli>
ii  node-qs                           6.9.1+ds-1                        all          Parse, stringify query strings for Node.js
ii  node-qw                           1.0.1-1                           all          Quoted word literals
ii  node-rc                           1.2.8-1                           all          find, load, flatten json or ini application confi>
ii  node-read                         1.0.7-2                           all          Read user input from stdin module for Node.js
ii  node-read-package-json            2.1.1-1                           all          Read package.json for npm module for Node.js
ii  node-readable-stream              3.4.0-2                           all          stream compatibility library for Node.js and brow>
ii  node-registry-auth-token          3.3.1-1                           all          Get the auth token set for an npm registry (if an>
ii  node-registry-url                 3.1.0-1                           all          Get the set npm registry URL
ii  node-request                      2.88.1-4                          all          simplified HTTP request client module for Node.js
ii  node-require-directory            2.1.1-1                           all          require all files in a directory
ii  node-require-main-filename        1.0.1-1                           all          shim for require.main.filename() that works in as>
ii  node-resolve                      1.15.1-3                          all          Synchronous/Asynchronous require.resolve() algori>
ii  node-resolve-from                 4.0.0-1                           all          Resolve the path of a module from a given path
ii  node-retry                        0.12.0-1                          all          Retry strategies for failed operations module for>
ii  node-rimraf                       2.6.3-1                           all          Deep deletion (like rm -rf) module for Node.js
ii  node-run-queue                    1.0.3-1                           all          promise based dynamic priority queue runner
ii  node-safe-buffer                  5.2.0-1                           all          Safer Node.js Buffer API
ii  node-semver                       7.1.3-1                           all          Semantic Versioning for Node.js
ii  node-semver-diff                  2.1.0-2                           all          get the diff type of two semver versions
ii  node-set-blocking                 2.0.0-1                           all          set blocking stdio and stderr
ii  node-sha                          3.0.0-1                           all          Check and get file or stream hashes - module for >
ii  node-shebang-command              1.2.0-1                           all          Get the command from a shebang
ii  node-shebang-regex                2.0.0-1                           all          Regular expression for matching a shebang line
ii  node-signal-exit                  3.0.2-1                           all          Fire an event no matter how a process exits
ii  node-slash                        3.0.0-1                           all          Node.js library to convert Windows backslash path>
ii  node-slide                        1.1.6-2                           all          Simple chain and asyncMap flow control module for>
ii  node-sorted-object                2.0.1-1                           all          Returns a copy of an object with its keys sorted
ii  node-spdx-correct                 3.1.0-1                           all          correct invalid SPDX identifiers
ii  node-spdx-exceptions              2.2.0-1                           all          list of SPDX standard license exceptions
ii  node-spdx-expression-parse        3.0.0-1                           all          parse SPDX license expressions
ii  node-spdx-license-ids             3.0.5-1                           all          List of SPDX license identifiers
ii  node-sshpk                        1.16.1+dfsg-2                     all          library for finding and using SSH public keys
ii  node-ssri                         7.1.0-2                           all          Utility for parsing, serializing, generating and >
ii  node-stream-each                  1.2.3-1                           all          Iterate all the data in a stream
ii  node-stream-iterate               1.2.0-4                           all          Iterate through the values in a stream
ii  node-stream-shift                 1.0.0-1                           all          returns the next buffer/object in a stream's read>
ii  node-strict-uri-encode            2.0.0-1                           all          stricter URI encode adhering to RFC 3986
ii  node-string-decoder               1.2.0-2                           all          string_decoder module from Node core for browsers
ii  node-string-width                 2.1.1-1                           all          Get the visual width of a string
ii  node-strip-ansi                   6.0.0-2                           all          Strip ANSI escape codes
ii  node-strip-eof                    1.0.0-2                           all          strip CR and LF characters from a string/buffer
ii  node-strip-json-comments          3.0.1-3                           all          Node.js module to strip comments from JSON
ii  node-supports-color               6.1.0-2                           all          Detect whether a terminal supports color in Node.>
ii  node-tar                          4.4.10+ds1-2ubuntu1               all          read and write portable tar archives module for N>
ii  node-term-size                    1.2.0+dfsg-2                      all          Reliably get the terminal window size
ii  node-text-table                   0.2.0-2                           all          borderless text tables with alignment
ii  node-through                      2.3.8-1                           all          simplified stream construction
ii  node-through2                     3.0.1-2                           all          Make a stream.Transform out of a function - Node.>
ii  node-timed-out                    4.0.1-5                           all          Emit `ETIMEDOUT` or `ESOCKETTIMEDOUT` when Client>
ii  node-tough-cookie                 3.0.0-1                           all          RFC6265 Cookies and Cookie Jar for node.js
ii  node-tunnel-agent                 0.6.1-2                           all          HTTP proxy tunneling agent module for Node.js
ii  node-tweetnacl                    1.0.1+dfsg-2                      all          Port of TweetNaCl cryptographic library to JavaSc>
ii  node-typedarray                   0.0.6-1                           all          TypedArray polyfill for old browsers
ii  node-typedarray-to-buffer         3.0.3-3                           all          JavaScript utility converting TypedArray to buffe>
ii  node-uid-number                   0.0.6-1                           all          Convert a username/group name to a uid/gid number
ii  node-unique-filename              1.1.1+ds-1                        all          unique filename for use in temporary directories >
ii  node-unique-string                1.0.0-1                           all          Generate a unique random string
ii  node-unpipe                       1.0.0-1                           all          Unpipe a stream from all destinations
ii  node-uri-js                       4.2.2+dfsg-5                      all          URI/IRI parsing/validating/resolving library
ii  node-url-parse-lax                1.0.0-1                           all          url.parse() with support for protocol-less URLs &>
ii  node-url-to-options               1.0.1-1                           all          Convert a WHATWG URL to an http(s).request option>
ii  node-util-deprecate               1.0.2-1                           all          Node.js's `util.deprecate()` function with browse>
ii  node-uuid                         3.3.2-2                           all          simple and fast RFC4122 UUID generation - Node.js>
ii  node-validate-npm-package-license 3.0.4-1                           all          Tells if a string is a valid npm package license >
ii  node-validate-npm-package-name    3.0.0-1                           all          Checks if a string is a valid npm package name
ii  node-verror                       1.10.0-1                          all          rich JavaScript errors
ii  node-wcwidth.js                   1.0.0-1                           all          wcwidth.js is a javascript porting of C's wcwidth>
ii  node-which                        2.0.2-1                           all          Cross-platform 'which' module for Node.js
ii  node-which-module                 2.0.0-1                           all          Find the module object for something that was req>
ii  node-wide-align                   1.1.3-1                           all          Wide-character aware text alignment function
ii  node-widest-line                  3.1.0-1                           all          Get the visual width of the widest line in a stri>
ii  node-wrap-ansi                    4.0.0-2                           all          Wordwrap a string with ANSI escape codes
ii  node-wrappy                       1.0.2-1                           all          Callback wrapping utility
ii  node-write-file-atomic            3.0.3-1                           all          Write files in an atomic fashion w/configurable o>
ii  node-xdg-basedir                  3.0.0-1                           all          Get XDG Base Directory paths
ii  node-xtend                        4.0.2-1                           all          Node.js library to easily extend an object
ii  node-y18n                         4.0.0-2                           all          bare-bones internationalization library used by y>
ii  node-yallist                      4.0.0-1                           all          Double linked list implementation for Node.js
ii  node-yargs                        15.3.0-1                          all          command line parser for nodejs
ii  node-yargs-parser                 18.1.1-1                          all          mighty option parser used by yargs
ii  nodejs                            10.19.0~dfsg-3ubuntu1             amd64        evented I/O for V8 javascript - runtime executable
ii  nodejs-doc                        10.19.0~dfsg-3ubuntu1             all          API documentation for Node.js, the javascript pla>
ii  npm                               6.14.4+ds-1ubuntu2                all          package manager for Node.js
ii  ntfs-3g                           1:2017.3.23AR.3-3ubuntu1          amd64        read/write NTFS driver for FUSE
ii  open-iscsi                        2.0.874-7.1ubuntu6.1              amd64        iSCSI initiator tools
ii  open-vm-tools                     2:11.1.5-1~ubuntu20.04.2          amd64        Open VMware Tools for virtual machines hosted on >
ii  openssh-client                    1:8.2p1-4ubuntu0.1                amd64        secure shell (SSH) client, for secure access to r>
ii  openssh-server                    1:8.2p1-4ubuntu0.1                amd64        secure shell (SSH) server, for secure access from>
ii  openssh-sftp-server               1:8.2p1-4ubuntu0.1                amd64        secure shell (SSH) sftp server module, for SFTP a>
ii  openssl                           1.1.1f-1ubuntu2.1                 amd64        Secure Sockets Layer toolkit - cryptographic util>
ii  overlayroot                       0.45ubuntu1                       all          use an overlayfs on top of a read-only root files>
ii  packagekit                        1.1.13-2ubuntu1.1                 amd64        Provides a package management service
ii  packagekit-tools                  1.1.13-2ubuntu1.1                 amd64        Provides PackageKit command-line tools
ii  parted                            3.3-4ubuntu0.20.04.1              amd64        disk partition manipulator
ii  passwd                            1:4.8.1-1ubuntu5.20.04            amd64        change and administer password and group data
ii  pastebinit                        1.5.1-1                           all          command-line pastebin client
ii  patch                             2.7.6-6                           amd64        Apply a diff file to an original
ii  pci.ids                           0.0~2020.03.20-1                  all          PCI ID Repository
ii  pciutils                          1:3.6.4-1                         amd64        PCI utilities
ii  perl                              5.30.0-9ubuntu0.2                 amd64        Larry Wall's Practical Extraction and Report Lang>
ii  perl-base                         5.30.0-9ubuntu0.2                 amd64        minimal Perl system
ii  perl-modules-5.30                 5.30.0-9ubuntu0.2                 all          Core Perl modules
ii  perl-openssl-defaults:amd64       4                                 amd64        version compatibility baseline for Perl OpenSSL p>
ii  php                               2:7.4+75                          all          server-side, HTML-embedded scripting language (de>
ii  php-common                        2:75                              all          Common files for PHP packages
ii  php7.4                            7.4.3-4ubuntu2.4                  all          server-side, HTML-embedded scripting language (me>
ii  php7.4-cli                        7.4.3-4ubuntu2.4                  amd64        command-line interpreter for the PHP scripting la>
ii  php7.4-common                     7.4.3-4ubuntu2.4                  amd64        documentation, examples and common module for PHP
ii  php7.4-json                       7.4.3-4ubuntu2.4                  amd64        JSON module for PHP
ii  php7.4-opcache                    7.4.3-4ubuntu2.4                  amd64        Zend OpCache module for PHP
ii  php7.4-readline                   7.4.3-4ubuntu2.4                  amd64        readline module for PHP
ii  pinentry-curses                   1.1.0-3build1                     amd64        curses-based PIN or pass-phrase entry dialog for >
ii  pkg-config                        0.29.1-0ubuntu4                   amd64        manage compile and link flags for libraries
ii  plymouth                          0.9.4git20200323-0ubuntu6.2       amd64        boot animation, logger and I/O multiplexer
ii  plymouth-theme-ubuntu-text        0.9.4git20200323-0ubuntu6.2       amd64        boot animation, logger and I/O multiplexer - ubun>
ii  policykit-1                       0.105-26ubuntu1                   amd64        framework for managing administrative policies an>
ii  pollinate                         4.33-3ubuntu1                     all          seed the pseudo random number generator
ii  popularity-contest                1.69ubuntu1                       all          Vote for your favourite packages automatically
ii  postgresql                        12+214ubuntu0.1                   all          object-relational SQL database (supported version)
ii  postgresql-12                     12.5-0ubuntu0.20.04.1             amd64        object-relational SQL database, version 12 server
ii  postgresql-client                 12+214ubuntu0.1                   all          front-end programs for PostgreSQL (supported vers>
ii  postgresql-client-12              12.5-0ubuntu0.20.04.1             amd64        front-end programs for PostgreSQL 12
ii  postgresql-client-common          214ubuntu0.1                      all          manager for multiple PostgreSQL client versions
ii  postgresql-common                 214ubuntu0.1                      all          PostgreSQL database-cluster manager
ii  powermgmt-base                    1.36                              all          common utils for power management
ii  procps                            2:3.3.16-1ubuntu2                 amd64        /proc file system utilities
ii  psmisc                            23.3-1                            amd64        utilities that use the proc file system
ii  publicsuffix                      20200303.0012-1                   all          accurate, machine-readable list of domain name su>
ii  pulseaudio-utils                  1:13.99.1-1ubuntu3.8              amd64        Command line tools for the PulseAudio sound server
ii  python-apt-common                 2.0.0ubuntu0.20.04.2              all          Python interface to libapt-pkg (locales)
ii  python-is-python2                 2.7.17-4                          all          symlinks /usr/bin/python to the DEPRECATED python2
ii  python-pip-whl                    20.0.2-5ubuntu1.1                 all          Python package installer
ii  python-pkg-resources              44.0.0-2                          all          Package Discovery and Resource Access using pkg_r>
ii  python2                           2.7.17-2ubuntu4                   amd64        interactive high-level object-oriented language (>
ii  python2-minimal                   2.7.17-2ubuntu4                   amd64        minimal subset of the Python2 language
ii  python2.7                         2.7.18-1~20.04                    amd64        Interactive high-level object-oriented language (>
ii  python2.7-minimal                 2.7.18-1~20.04                    amd64        Minimal subset of the Python language (version 2.>
ii  python3                           3.8.2-0ubuntu2                    amd64        interactive high-level object-oriented language (>
ii  python3-apport                    2.20.11-0ubuntu27.13              all          Python 3 library for Apport crash report handling
ii  python3-apt                       2.0.0ubuntu0.20.04.2              amd64        Python 3 interface to libapt-pkg
ii  python3-attr                      19.3.0-2                          all          Attributes without boilerplate (Python 3)
ii  python3-automat                   0.8.0-1ubuntu1                    all          Self-service finite-state machines for the progra>
ii  python3-blinker                   1.4+dfsg1-0.3ubuntu1              all          fast, simple object-to-object and broadcast signa>
ii  python3-certifi                   2019.11.28-1                      all          root certificates for validating SSL certs and ve>
ii  python3-cffi-backend              1.14.0-1build1                    amd64        Foreign Function Interface for Python 3 calling C>
ii  python3-chardet                   3.0.4-4build1                     all          universal character encoding detector for Python3
ii  python3-cliapp                    1.20180812.1-3build1              all          Python framework for Unix command line programs
ii  python3-click                     7.0-3                             all          Wrapper around optparse for command line utilitie>
ii  python3-colorama                  0.4.3-1build1                     all          Cross-platform colored terminal text in Python - >
ii  python3-commandnotfound           20.04.4                           all          Python 3 bindings for command-not-found.
ii  python3-configobj                 5.0.6-4                           all          simple but powerful config file reader and writer>
ii  python3-constantly                15.1.0-1build1                    all          Symbolic constants in Python
ii  python3-cryptography              2.8-3ubuntu0.1                    amd64        Python library exposing cryptographic recipes and>
ii  python3-dbus                      1.2.16-1build1                    amd64        simple interprocess messaging system (Python 3 in>
ii  python3-debconf                   1.5.73                            all          interact with debconf from Python 3
ii  python3-debian                    0.1.36ubuntu1                     all          Python 3 modules to work with Debian-related data>
ii  python3-dev                       3.8.2-0ubuntu2                    amd64        header files and a static library for Python (def>
ii  python3-distro                    1.4.0-1                           all          Linux OS platform information API
ii  python3-distro-info               0.23ubuntu1                       all          information about distributions' releases (Python>
ii  python3-distupgrade               1:20.04.29                        all          manage release upgrades
ii  python3-distutils                 3.8.5-1~20.04.1                   all          distutils package for Python 3.x
ii  python3-entrypoints               0.3-2ubuntu1                      all          Discover and load entry points from installed pac>
ii  python3-gdbm:amd64                3.8.5-1~20.04.1                   amd64        GNU dbm database support for Python 3.x
ii  python3-gi                        3.36.0-1                          amd64        Python 3 bindings for gobject-introspection libra>
ii  python3-hamcrest                  1.9.0-3                           all          Hamcrest framework for matcher objects (Python 3)
ii  python3-httplib2                  0.14.0-1ubuntu1                   all          comprehensive HTTP client library written for Pyt>
ii  python3-hyperlink                 19.0.0-1                          all          Immutable, Pythonic, correct URLs.
ii  python3-idna                      2.8-1                             all          Python IDNA2008 (RFC 5891) handling (Python 3)
ii  python3-importlib-metadata        1.5.0-1                           all          library to access the metadata for a Python packa>
ii  python3-incremental               16.10.1-3.2                       all          Library for versioning Python projects.
ii  python3-jinja2                    2.10.1-2                          all          small but fast and easy to use stand-alone templa>
ii  python3-json-pointer              2.0-0ubuntu1                      all          resolve JSON pointers - Python 3.x
ii  python3-jsonpatch                 1.23-3                            all          library to apply JSON patches - Python 3.x
ii  python3-jsonschema                3.2.0-0ubuntu2                    all          An(other) implementation of JSON Schema (Draft 3 >
ii  python3-jwt                       1.7.1-2ubuntu2                    all          Python 3 implementation of JSON Web Token
ii  python3-keyring                   18.0.1-2ubuntu1                   all          store and access your passwords safely - Python 3>
ii  python3-launchpadlib              1.10.13-1                         all          Launchpad web services client library (Python 3)
ii  python3-lazr.restfulclient        0.14.2-2build1                    all          client for lazr.restful-based web services (Pytho>
ii  python3-lazr.uri                  1.0.3-4build1                     all          library for parsing, manipulating, and generating>
ii  python3-lib2to3                   3.8.5-1~20.04.1                   all          Interactive high-level object-oriented language (>
ii  python3-markdown                  3.1.1-3                           all          text-to-HTML conversion library/tool (Python 3 ve>
ii  python3-markupsafe                1.1.0-1build2                     amd64        HTML/XHTML/XML string library for Python 3
ii  python3-minimal                   3.8.2-0ubuntu2                    amd64        minimal subset of the Python language (default py>
ii  python3-more-itertools            4.2.0-1build1                     all          library with routines for operating on iterables,>
ii  python3-nacl                      1.3.0-5                           amd64        Python bindings to libsodium (Python 3)
ii  python3-netifaces                 0.10.4-1ubuntu4                   amd64        portable network interface information - Python 3>
ii  python3-newt:amd64                0.52.21-4ubuntu2                  amd64        NEWT module for Python3
ii  python3-oauthlib                  3.1.0-1ubuntu2                    all          generic, spec-compliant implementation of OAuth f>
ii  python3-openssl                   19.0.0-1build1                    all          Python 3 wrapper around the OpenSSL library
ii  python3-packaging                 20.3-1                            all          core utilities for python3 packages
ii  python3-pexpect                   4.6.0-1build1                     all          Python 3 module for automating interactive applic>
ii  python3-pip                       20.0.2-5ubuntu1.1                 all          Python package installer
ii  python3-pkg-resources             45.2.0-1                          all          Package Discovery and Resource Access using pkg_r>
ii  python3-problem-report            2.20.11-0ubuntu27.13              all          Python 3 library to handle problem reports
ii  python3-ptyprocess                0.6.0-1ubuntu1                    all          Run a subprocess in a pseudo terminal from Python>
ii  python3-pyasn1                    0.4.2-3build1                     all          ASN.1 library for Python (Python 3 module)
ii  python3-pyasn1-modules            0.2.1-0.2build1                   all          Collection of protocols modules written in ASN.1 >
ii  python3-pygments                  2.3.1+dfsg-1ubuntu2               all          syntax highlighting package written in Python 3
ii  python3-pymacaroons               0.13.0-3                          all          Macaroon library for Python 3
ii  python3-pyparsing                 2.4.6-1                           all          alternative to creating and executing simple gram>
ii  python3-pyrsistent:amd64          0.15.5-1build1                    amd64        persistent/functional/immutable data structures f>
ii  python3-requests                  2.22.0-2ubuntu1                   all          elegant and simple HTTP library for Python3, buil>
ii  python3-requests-unixsocket       0.2.0-2                           all          Use requests to talk HTTP via a UNIX domain socke>
ii  python3-secretstorage             2.3.1-2ubuntu1                    all          Python module for storing secrets - Python 3.x ve>
ii  python3-serial                    3.4-5.1                           all          pyserial - module encapsulating access for the se>
ii  python3-service-identity          18.1.0-5build1                    all          Service identity verification for pyOpenSSL (Pyth>
ii  python3-setuptools                45.2.0-1                          all          Python3 Distutils Enhancements
ii  python3-simplejson                3.16.0-2ubuntu2                   amd64        simple, fast, extensible JSON encoder/decoder for>
ii  python3-six                       1.14.0-2                          all          Python 2 and 3 compatibility library (Python 3 in>
ii  python3-software-properties       0.98.9.3                          all          manage the repositories that you install software>
ii  python3-systemd                   234-3build2                       amd64        Python 3 bindings for systemd
ii  python3-ttystatus                 0.38-4                            all          terminal progress bar and status output for Python
ii  python3-twisted                   18.9.0-11                         all          Event-based framework for internet applications
ii  python3-twisted-bin:amd64         18.9.0-11                         amd64        Event-based framework for internet applications
ii  python3-update-manager            1:20.04.10.1                      all          python 3.x module for update-manager
ii  python3-urllib3                   1.25.8-2ubuntu0.1                 all          HTTP library with thread-safe connection pooling >
ii  python3-wadllib                   1.3.3-3build1                     all          Python 3 library for navigating WADL files
ii  python3-wheel                     0.34.2-1                          all          built-package format for Python
ii  python3-yaml                      5.3.1-1                           amd64        YAML parser and emitter for Python3
ii  python3-zipp                      1.0.0-1                           all          pathlib-compatible Zipfile object wrapper - Pytho>
ii  python3-zope.interface            4.7.1-1                           amd64        Interfaces for Python3
ii  python3.8                         3.8.5-1~20.04                     amd64        Interactive high-level object-oriented language (>
ii  python3.8-dev                     3.8.5-1~20.04                     amd64        Header files and a static library for Python (v3.>
ii  python3.8-minimal                 3.8.5-1~20.04                     amd64        Minimal subset of the Python language (version 3.>
ii  pythonpy                          0.4.11b-3                         all          'python -c', with tab completion and shorthand
ii  rake                              13.0.1-4                          all          ruby make-like utility
ii  re2c                              1.3-1ubuntu0.1                    amd64        tool for generating fast C-based recognizers
ii  readline-common                   8.0-4                             all          GNU readline and history libraries, common files
ii  rsync                             3.1.3-8                           amd64        fast, versatile, remote (and local) file-copying >
ii  rsyslog                           8.2001.0-1ubuntu1.1               amd64        reliable system and kernel logging daemon
ii  ruby                              1:2.7+1                           amd64        Interpreter of object-oriented scripting language>
ii  ruby-bundler                      2.1.4-1                           all          Manage Ruby application dependencies (runtime)
ii  ruby-dev:amd64                    1:2.7+1                           amd64        Header files for compiling extension modules for >
ii  ruby-minitest                     5.13.0-1                          all          Ruby test tools supporting TDD, BDD, mocking, and>
ii  ruby-molinillo                    0.6.4-1                           all          generic dependency resolution algorithm
ii  ruby-net-http-persistent          2.9.4-2                           all          Manages persistent connections using Net::HTTP
ii  ruby-net-telnet                   0.1.1-2                           all          telnet client library
ii  ruby-power-assert                 1.1.7-1                           all          library showing values of variables and method ca>
ii  ruby-test-unit                    3.3.5-1                           all          unit testing framework for Ruby
ii  ruby-thor                         0.19.4-1                          all          Ruby scripting framework
ii  ruby-xmlrpc                       0.3.0-2                           all          XMLRPC library for Ruby
ii  ruby2.7                           2.7.0-5ubuntu1.2                  amd64        Interpreter of object-oriented scripting language>
ii  ruby2.7-dev:amd64                 2.7.0-5ubuntu1.2                  amd64        Header files for compiling extension modules for >
ii  ruby2.7-doc                       2.7.0-5ubuntu1.2                  all          Documentation for Ruby 2.7
ii  rubygems-integration              1.16                              all          integration of Debian Ruby packages with Rubygems
ii  run-one                           1.17-0ubuntu1                     all          run just one instance of a command and its args a>
ii  sbsigntool                        0.9.2-2ubuntu1                    amd64        Tools to manipulate signatures on UEFI binaries a>
ii  screen                            4.8.0-1                           amd64        terminal multiplexer with VT100/ANSI terminal emu>
ii  secureboot-db                     1.5                               amd64        Secure Boot updates for DB and DBX
ii  sed                               4.7-1                             amd64        GNU stream editor for filtering/transforming text
ii  sensible-utils                    0.0.12+nmu1                       all          Utilities for sensible alternative selection
ii  sg3-utils                         1.44-1ubuntu2                     amd64        utilities for devices using the SCSI command set
ii  sg3-utils-udev                    1.44-1ubuntu2                     all          utilities for devices using the SCSI command set >
ii  shared-mime-info                  1.15-1                            amd64        FreeDesktop.org shared MIME database and spec
ii  show-motd                         3.6-0ubuntu6.1                    all          show message of the day in interactive shells
ii  snapd                             2.48+20.04                        amd64        Daemon and tooling that enable snap packages
ii  software-properties-common        0.98.9.3                          all          manage the repositories that you install software>
ii  sosreport                         4.0-1~ubuntu0.20.04.2             amd64        Set of tools to gather troubleshooting data from >
ii  sound-theme-freedesktop           0.8-2ubuntu1                      all          freedesktop.org sound theme
ii  squashfs-tools                    1:4.4-1                           amd64        Tool to create and append to squashfs filesystems
ii  ssh-import-id                     5.10-0ubuntu1                     all          securely retrieve an SSH public key and install i>
ii  ssl-cert                          1.0.39                            all          simple debconf wrapper for OpenSSL
ii  strace                            5.5-3ubuntu1                      amd64        System call tracer
ii  sudo                              1.8.31-1ubuntu1.1                 amd64        Provide limited super user privileges to specific>
ii  sysstat                           12.2.0-2                          amd64        system performance tools for Linux
ii  systemd                           245.4-4ubuntu3.3                  amd64        system and service manager
ii  systemd-sysv                      245.4-4ubuntu3.3                  amd64        system and service manager - SysV links
ii  systemd-timesyncd                 245.4-4ubuntu3.3                  amd64        minimalistic service to synchronize local time wi>
ii  sysvinit-utils                    2.96-2.1ubuntu1                   amd64        System-V-like utilities
ii  tar                               1.30+dfsg-7                       amd64        GNU version of the tar archiving utility
ii  tcpdump                           4.9.3-4                           amd64        command-line network traffic analyzer
ii  telnet                            0.17-41.2build1                   amd64        basic telnet client
ii  thin-provisioning-tools           0.8.5-4build1                     amd64        Tools for handling thinly provisioned device-mapp>
ii  time                              1.7-25.1build1                    amd64        GNU time program for measuring CPU resource usage
ii  tmux                              3.0a-2ubuntu0.2                   amd64        terminal multiplexer
ii  tpm-udev                          0.4                               all          udev rules for TPM modules
ii  tree                              1.8.0-1                           amd64        displays an indented directory tree, in color
ii  tzdata                            2020d-0ubuntu0.20.04              all          time zone and daylight-saving time data
ii  ubuntu-advantage-tools            20.3                              amd64        management tools for Ubuntu Advantage
ii  ubuntu-keyring                    2020.02.11.2                      all          GnuPG keys of the Ubuntu archive
ii  ubuntu-minimal                    1.450.2                           amd64        Minimal core of Ubuntu
ii  ubuntu-release-upgrader-core      1:20.04.29                        all          manage release upgrades
ii  ubuntu-server                     1.450.2                           amd64        The Ubuntu Server system
ii  ubuntu-standard                   1.450.2                           amd64        The Ubuntu standard system
ii  ubuntu-wsl                        1.450.2                           amd64        Ubuntu on Windows tools - Windows Subsystem for L>
ii  ucf                               3.0038+nmu1                       all          Update Configuration File(s): preserve user chang>
ii  udev                              245.4-4ubuntu3.3                  amd64        /dev/ and hotplug management daemon
ii  ufw                               0.36-6                            all          program for managing a Netfilter firewall
ii  unattended-upgrades               2.3ubuntu0.1                      all          automatic installation of security upgrades
ii  unzip                             6.0-25ubuntu1                     amd64        De-archiver for .zip files
ii  update-manager-core               1:20.04.10.1                      all          manage release upgrades
ii  update-motd                       3.6-0ubuntu6.1                    all          compliments pam_motd in libpam-modules
ii  update-notifier-common            3.192.30                          all          Files shared between update-notifier and other pa>
ii  usb.ids                           2020.03.19-1                      all          USB ID Repository
ii  usbutils                          1:012-2                           amd64        Linux USB utilities
ii  util-linux                        2.34-0.1ubuntu9.1                 amd64        miscellaneous system utilities
ii  uuid-runtime                      2.34-0.1ubuntu9.1                 amd64        runtime components for the Universally Unique ID >
ii  vim                               2:8.1.2269-1ubuntu5               amd64        Vi IMproved - enhanced vi editor
ii  vim-common                        2:8.1.2269-1ubuntu5               all          Vi IMproved - Common files
ii  vim-runtime                       2:8.1.2269-1ubuntu5               all          Vi IMproved - Runtime files
ii  vim-tiny                          2:8.1.2269-1ubuntu5               amd64        Vi IMproved - enhanced vi editor - compact version
ii  wget                              1.20.3-1ubuntu1                   amd64        retrieves files from the web
ii  whiptail                          0.52.21-4ubuntu2                  amd64        Displays user-friendly dialog boxes from shell sc>
ii  wsl                               0.2.1-1                           all          Wsman Shell Command Line "whistle"
ii  wslu                              2.3.6-0ubuntu2~20.04.0            all          collection of utilities for the Windows 10 Linux >
ii  x11-common                        1:7.7+19ubuntu14                  all          X Window System (X.Org) infrastructure
ii  x11-utils                         7.7+5                             amd64        X11 utilities
ii  x11-xserver-utils                 7.7+8                             amd64        X server utilities
ii  xauth                             1:1.1-0ubuntu1                    amd64        X authentication utility
ii  xdg-user-dirs                     0.17-2ubuntu1                     amd64        tool to manage well known user directories
ii  xdg-utils                         1.1.3-2ubuntu1.20.04.1            all          desktop integration utilities from freedesktop.org
ii  xfsprogs                          5.3.0-1ubuntu2                    amd64        Utilities for managing the XFS filesystem
ii  xkb-data                          2.29-2                            all          X Keyboard Extension (XKB) configuration data
ii  xsltproc                          1.1.34-4                          amd64        XSLT 1.0 command line processor
ii  xxd                               2:8.1.2269-1ubuntu5               amd64        tool to make (or reverse) a hex dump
ii  xz-utils                          5.2.4-1ubuntu1                    amd64        XZ-format compression utilities
ii  zerofree                          1.1.1-1                           amd64        zero free blocks from ext2, ext3 and ext4 file-sy>
ii  zip                               3.0-11build1                      amd64        Archiver for .zip files
ii  zlib1g:amd64                      1:1.2.11.dfsg-2ubuntu1.2          amd64        compression library - runtime
ii  zlib1g-dev:amd64                  1:1.2.11.dfsg-2ubuntu1.2          amd64        compression library - development
lines 1058-1095/1095 (END)


























```
