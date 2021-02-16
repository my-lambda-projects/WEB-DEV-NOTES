./HTML/triple-des-encrypt.html
./HTML/truncate-text-file.html
./HTML/truncate-text.html
./HTML/tsv-append-column.html
./HTML/tsv-change-delimiter.html
./HTML/tsv-columns-to-rows.html
./HTML/tsv-delete-column.html
./HTML/tsv-extract-column.html
./HTML/tsv-insert-column.html
./HTML/tsv-prepend-column.html
./HTML/tsv-replace-column.html
./HTML/tsv-rows-to-columns.html
./HTML/tsv-swap-columns.html
./HTML/tsv-to-csv.html
./HTML/tsv-to-json.html
./HTML/tsv-to-text.html
./HTML/tsv-to-xml.html
./HTML/tsv-to-yaml.html
./HTML/tsv-transpose.html
./HTML/unescape-text.html
./HTML/unix-to-utc.html
./HTML/url-decode-text.html
./HTML/url-decode.html
./HTML/url-encode-text.html
./HTML/url-encode.html
./HTML/url-parse.html
./HTML/utc-to-unix.html
./HTML/utf16-decode.html
./HTML/utf16-encode.html
./HTML/utf8-decode.html
./HTML/utf8-encode.html
./HTML/utf8-to-hex.html
./HTML/uudecode.html
./HTML/uuencode.html
./HTML/whirlpool-hash.html
./HTML/word-count.html
./HTML/word-frequency.html
./HTML/word-sort.html
./HTML/word-split.html
./HTML/word-wrap.html
./HTML/words-to-numbers.html
./HTML/xml-minify.html
./HTML/xml-prettify.html
./HTML/xml-to-base64.html
./HTML/xml-to-csv.html
./HTML/xml-to-json.html
./HTML/xml-to-text.html
./HTML/xml-to-tsv.html
./HTML/xml-to-yaml.html
./HTML/xor-decrypt.html
./HTML/xor-encrypt.html
./HTML/yaml-to-csv.html
./HTML/yaml-to-json.html
./HTML/yaml-to-tsv.html
./HTML/yaml-to-xml.html
cd "c:\\0-a-A-October\\01-EVERYTHING-ELSE\\00-Non-App-Academy-Exploration\\01-repositories-js\\interactive-examples"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions"
npm build
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions\\markdown-language-features"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions\\html-language-features"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions\\image-preview"
npm install
cd "c:\\0-a-A-October\\00-weeks\\00-4-all-time\\vscode\\vs-code-extensions"
npm install
cd "c:\\Users\\bryan\\.vscode"
npm install
cd "c:\\Users\\bryan\\.vscode\\extensions\\2gua.rainbow-brackets-0.0.6"
npm install
cd "c:\\Users\\bryan\\.vscode\\extensions\\30-seconds.30-seconds-of-code-1.0.0"
npm install
cd "c:\\Users\\bryan\\.vscode\\extensions\\aaron-bond.better-comments-2.1.0"
npm install
cd "c:\\Users\\bryan\\.vscode\\extensions\\abusaidm.html-snippets-0.2.1"
npm install
touch /mnt/c/Users/bryan/.vscode/package.json
cd "c:\\Users\\bryan\\.vscode"
npm install
npm init -y
npm init 
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git init
git add .
cd "c:\\0-a-A-October\\08-Sandbox\\04-vscode-extensions\\hqjs.hq-live-server-0.0.10"
npm install
cd "c:\\0-a-A-October\\08-Sandbox\\04-vscode-extensions"
npm init
cd "c:\\0-a-A-October\\08-Sandbox\\04-vscode-extensions"
npm install
#!/bin/bash
user_id=`id -u`
# we want to snapshot the environment of the config user
if [ $user_id -eq 0 -a -z "$AGENT_ALLOW_RUNASROOT" ]; then     echo "Must not run with sudo";     exit 1; fi
# Check dotnet core 3.1 dependencies for Linux
if [[ (`uname` == "Linux") ]]; then     command -v ldd > /dev/null;     if [ $? -ne 0 ];     then         echo "Can not find 'ldd'. Please install 'ldd' and try again.";         exit 1;     fi     ldd ./bin/libcoreclr.so | grep 'not found';     if [ $? -eq 0 ]; then         echo "Dependencies is missing for .NET Core 3.1";         echo "Execute ./bin/installdependencies.sh to install any missing dependencies.";         exit 1;     fi     ldd ./bin/System.Security.Cryptography.Native.OpenSsl.so | grep 'not found';     if [ $? -eq 0 ]; then         echo "Dependencies missing for .NET Core 3.1";         echo "Execute ./bin/installdependencies.sh to install any missing dependencies.";         exit 1;     fi     ldd ./bin/System.IO.Compression.Native.so | grep 'not found';     if [ $? -eq 0 ]; then         echo "Dependencies missing for .NET Core 3.1";         echo "Execute ./bin/installdependencies.sh to install any missing dependencies.";         exit 1;     fi     ldd ./bin/System.Net.Http.Native.so | grep 'not found';     if [ $? -eq 0 ]; then         echo "Warning: on some platforms, libcurl3 is required.";         echo "It was not found.";         echo "Execute ./bin/installdependencies.sh to install missing dependencies.";     fi     if ! [ -x "$(command -v ldconfig)" ]; then         LDCONFIG_COMMAND="/sbin/ldconfig";         if ! [ -x "$LDCONFIG_COMMAND" ]; then             echo "Can not find 'ldconfig' in PATH and '/sbin/ldconfig' doesn't exists either. Please install 'ldconfig' and try again.";             exit 1;         fi;     else         LDCONFIG_COMMAND="ldconfig";     fi     libpath=${LD_LIBRARY_PATH:-};     $LDCONFIG_COMMAND -NXv ${libpath//:/} 2>&1 | grep libicu >/dev/null 2>&1;     if [ $? -ne 0 ]; then         echo "libicu's dependencies missing for .NET Core 3.1";         echo "Execute ./bin/installdependencies.sh to install any missing dependencies.";         exit 1;     fi; fi
# Change directory to the script root directory
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )";   SOURCE="$(readlink "$SOURCE")";   [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
cd $DIR
source ./env.sh
shopt -s nocasematch
if [[ "$1" == "remove" ]]; then     ./bin/Agent.Listener "$@"; else     ./bin/Agent.Listener configure "$@"; fi
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=trueregistry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/always-auth=true 
vsts-npm-auth -config .npmrc
npm init -y
mkdir azagent;cd azagent;curl -fkSL -o vstsagent.tar.gz https://vstsagentpackage.azureedge.net/agent/2.179.0/vsts-agent-linux-x64-2.179.0.tar.gz;tar -zxvf vstsagent.tar.gz; if [ -x "$(command -v systemctl)" ]; then ./config.sh --deploymentpool --deploymentpoolname "resource-hub-test" --acceptteeeula --agent $HOSTNAME --url https://dev.azure.com/bgoonz/ --work _work --runasservice; sudo ./svc.sh install; sudo ./svc.sh start; else ./config.sh --deploymentpool --deploymentpoolname "resource-hub-test" --acceptteeeula --agent $HOSTNAME --url https://dev.azure.com/bgoonz/ --work _work; ./run.sh; fi
cd node
git add .
git commit -m "azure don't let me down
git commit -m "azure don't let me down"
git push -u origin master
git checkout
git push -u origin main
git add .
cd ..
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
vsts-npm-auth -config .npmrc
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
vsts-npm-auth -config .npmrc
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
vsts-npm-auth -config .npmrc
registry=https://pkgs.dev.azure.com/bgoonz/_packaging/bgoonz/npm/registry/ 
always-auth=true
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
node atags.js 
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.
node atags.js 
clear
node atags.js 
find ./ | grep -i "\.html*$"
code .
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/Data-Structures-Java.git
git push -u origin master
node atags.js 
clear
node atags.js 
node atags.js 
git add .
git commit -m "restructureing/indexing"
git push 
node atags.js 
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f s"/"$0 '> output.txt
for f in *; do echo $f >> directories.txt; done
ls >> Out_file.txt
ls -r >> Out_file.txt
ls | tee -a Out_file.txt
find -name \*.txt -printf "%f\n" > Out_file.txt
find ~/docs -type f -maxdepth 100 > filenames.txt
find ~/docs -type f -maxdepth 10 > filenames.txt
find ~/docs -type f -maxdepth 5 > filenames.txt
find ~/docs -type f -maxdepth 1 | grep -v '~$' > filenames.txt
{% for url in site.static_files %}
for file in "$root"/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done
for file in "$root"/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done >output.txt
#!/bin/bash
root="root"
echo "<ul>"
for file in "$root"/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done
echo "  </ul>"
echo "</ul>" >output.txt
for file in "$root"/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done>out.md
for file in "$root"/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done >output.md
for file in "$."/*/*; do   parentpath="${file#*/}";   parent="${parentpath%/*}";   filename="${file##*/}";   if [[ -z $oldparent ]]; then     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   elif [[ $oldparent != $parent ]]; then     echo "  </ul>";     echo "  <li> $parent </li>" && oldparent="$parent";     echo "  <ul>";   fi;   echo "    <li><a href=\"$parentpath\">$filename</a></li>"; done
function create_gnu_index () {
    [[ $# != 3 ]] && echo "bad args. do: $FUNCNAME '/DOCUMENT_ROOT/' '/' 'gnu.askapache.com'" && exit 2  
    local L= D="$1" SUBDIR="$2" DOMAIN="$3" F=
    F="${D}index1.html"
    [[ -d $D ]] || mkdir -p $D;
    cd $D || exit 2;
    touch $F && test -w $F || exit 2;
    find . -maxdepth 1 -type d -empty -exec rm -rf {} \;
    (
        echo '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">';         echo "<html><head><title>Index of http://${DOMAIN}${SUBDIR}</title></head>";         echo "<body><h1 id="Index_SUBDIR">Index of ${SUBDIR} <a class="sl" href="#Index_SUBDIR"></a></h1><pre>      Name                                        Last modified      Size";
        (
            IFS=$'\n';
            for L in $(find -L . -mount -depth -maxdepth 1 -type f ! -name 'index1.html' -printf "      <a href=\"%f\">%-44f@_@%Td-%Tb-%TY %Tk:%TM  @%f@\n"|sort|sed 's,\([\ ]\+\)@_@,</a>\1,g');             do
                F=$(sed -e 's,^.*@\([^@]\+\)@.*$,\1,g'<<<"$L");
                F=$(du -bh $F | cut -f1);
                sed -e 's,\ @.*$, '"$F"',g'<<<"$L";             done;         ); 
        find -L . -mount -depth -maxdepth 1 -type d ! -name '.' -printf "      <a href=\"%f\">%-43f@_@%Td-%Tb-%TY %Tk:%TM  -\n"|sort -d|sed 's,\([\ ]\+\)@_@,/</a>\1,g'
        echo "</pre><address>Apache Server at ${DOMAIN}</address></body></html>";
    )  > $F; }
function create_gnu_index () {
    [[ $# != 3 ]] && echo "bad args. do: $FUNCNAME '/DOCUMENT_ROOT/' '/' 'gnu.askapache.com'" && exit 2  
    local L= D="$1" SUBDIR="$2" DOMAIN="$3" F=
    F="${D}index1.html"
    [[ -d $D ]] || mkdir -p $D;
    cd $D || exit 2;
    touch $F && test -w $F || exit 2;
    find . -maxdepth 1 -type d -empty -exec rm -rf {} \;
    (
        echo '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">';         echo "<html><head><title>Index of http://${DOMAIN}${SUBDIR}</title></head>";         echo "<body><h1 id="Index_SUBDIR">Index of ${SUBDIR} <a class="sl" href="#Index_SUBDIR"></a></h1><pre>      Name                                        Last modified      Size";
        (
            IFS=$'\n';
            for L in $(find -L . -mount -depth -maxdepth 1 -type f ! -name 'index1.html' -printf "      <a href=\"%f\">%-44f@_@%Td-%Tb-%TY %Tk:%TM  @%f@\n"|sort|sed 's,\([\ ]\+\)@_@,</a>\1,g');             do
                F=$(sed -e 's,^.*@\([^@]\+\)@.*$,\1,g'<<<"$L");
                F=$(du -bh $F | cut -f1);
                sed -e 's,\ @.*$, '"$F"',g'<<<"$L";             done;         ); 
        find -L . -mount -depth -maxdepth 1 -type d ! -name '.' -printf "      <a href=\"%f\">%-43f@_@%Td-%Tb-%TY %Tk:%TM  -\n"|sort -d|sed 's,\([\ ]\+\)@_@,/</a>\1,g'
        echo "</pre><address>Apache Server at ${DOMAIN}</address></body></html>";
    )  > $F; }
Options SymLinksIfOwnerMatch Indexes
DirectoryIndex index.html
IndexOptions FancyIndexing TrackModified IgnoreClient ScanHTMLTitles SuppressRules VersionSort IgnoreCase NameWidth=* DescriptionWidth=*
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk  /:$/&&f{s=$0;f=0}
&&f{ > NF&&f{ print s"/"$0 } > output.txt
ls -R ./ | awk  /:$/&&f{s=$0;f=0}
( set ./*.html; [ -f "$1" ] || exit;   printf 'eval "$L;shift" >"${1%%%.0s.*}.txt"\n' "$@" |   L='    lynx "$1" --force-html --dump'  sh -eCs "$@"; ) &
for x in *.html;do     lynx $x --force-html --dump >${x%%.html}.txt; done
for x in *.html;do     lynx $x --force-html --dump >${x%%.html}.txt; done
for x in *.html;do     lynx $x --force-html --dump >${x%%.html}.txt echo "<html>
<head><title>$1/`basename $1`.html</title>
</head>
<body bgcolor='orange'>" > $1/`basename $1`.html for i in `find $1`; do if test -d $i; then echo "<br><br>$i<br>" >> $1/`basename $1`.html; else echo "<br><a href='$i'>$i</a>" >> $1/`basename $1`.html; fi; done echo "</body>
</html>" >> $1/`basename $1`.html; echo $1/`basename $1`.html completed; sed -e "s:<a href='$1/:<a href=':g" $1/`basename $1`.html > tmp.html; rm $1/`basename $1`.html; mv tmp.html $1/`basename $1`.html; unset i
#! /bin/sh
# webtree.bash - directory structure listing in HTML
# creating HTML tags
echo "<html>
<head><title>$1/`basename $1`.html</title>
</head>
<body bgcolor='orange'>" > $1/`basename $1`.html
# creating links to the files in directory tree
for i in `find $1`; do if test -d $i; then echo "<br><br>$i<br>" >> $1/`basename $1`.html; else echo "<br><a href='$i'>$i</a>" >> $1/`basename $1`.html; fi; done
tree >out.md
ls -alF >output.txt
find ./ | grep -i "\.html*$" >output.html
node atags.js 
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/live-examples.git
git push -u origin master
git add .
git commit -m "initial commit-this is a lie"
git push -u origin master
ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }' > output.txt
mkdir build
cd build
cmake ..
cmake --build . --config Release
mkdir build
cd build
cmake ..
mkdir build
cd build
cmake ..
cmake --build . --config Release
git clone https://github.com/ultralight-ux/Ultralight.git
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git clone https://github.com/ultralight-ux/Ultralight.git
git add .
git commit -m "cmake tools code for study"
git add .
npm audit fix
npm install 
npm install
npm build
npm run-script build
git add .
git commit -m "fixing a web of broken links"
git add .
git commit -m "links"
git add .
git commit -m "removing a bunch of junk"
git push 
find . -empty -type d -print -delete
git add .
git commit -m "link fixing"
git add .
git commit -m "fixing"
git add .
git add .
npm install
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git add .
ll
npm run move-to-assets
npm run build:deploy
npm build:app
npm install
npm run build:lib
npm build:examples
npm run clean
npm run release
npm build:examples
npm run build
npm run dev
npm run build:examples
#!/bin/bash
cp ./now.json ./output/dist
cp ./now.json ./output/dev
name="dojo.widgets"
if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
npm run build:deploy
npm install -g create-react-app
git add .
git commit -m "merge conflicts"
npm install-g  @dojo/widgets
npm install @dojo/widgets
ll
npm init -y
npm install @dojo/cli -g
cd 0-a-A-October
cd 02-student-website/
cd _
cd _NEWWWW/
cd experimental/
git add .
git commit -m "wubalubadubdub"
git push 
git add .
git commit -m "dojo widgets"
git push 
git add .
git commit -m "dojo stuff"
git push 
git add .
git commit -m "damage control"
git push 
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD
git add .
git push -f
git add .
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD
git commit -m "never ever ever try to commit a large file....ever"
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD
git push 
git pull
git push -f
git add .
cd experimental/
git add .
git commit -m "linkssss"
git push 
git add .
git commit -m "resources page"
git push 
git init
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
n=1;
max=50;
while [ "$n" -le "$max" ]; do   mkdir "s$n";   n=`expr "$n" + 1`; done
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
git add .
git commit -m "update"
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*.CHANGELOG" -o -name "*.LICENSE" -o -name "*.CONTRIBUTING" \) -exec rm -rf -- {} +
find . \( -name ".CHANGELOG" -o -name ".LICENSE" -o -name ".CONTRIBUTING" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG" -o -name "*LICENSE" -o -name "*CONTRIBUTING" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
cd myblog
code .
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
jekyll new myblog
cd myblog
bundle exec jekyll serve
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
tree -d -L 4
git add .
git commit -m "update"
git push 
git add .
git init
git add .
tree -d -L 4
tree -d -L 4 > out.md
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
cd ..
git merge --strategy-option ours
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
node js-shell.js
git add .
find ./ | grep -i "\.html*$">tools.md
seq 0 $(wc -l <filename) | xargs -I mkdir /PATH/{}
seq 0 $(wc -l <tools.md) | xargs -I mkdir /PATH/{}
seq 0 $(wc -l <tools.md) | xargs -I mkdir ./{}
seq 1 $(wc -l <tools.md) | xargs -I mkdir ./{}
seq 0 $(wc -l <tools.md) | xargs -I mkdir /C:\0-a-A-October\02-student-website\01-student-website\a-A-Student\PUBLIC\assets\TOOLS\HTML/{}
git add .
cd 0-a-A-October
cd 02-student-website/
cd _NEWWWW/
cd experimental/
git add .
git commit -m "contents etc..."
git push 
npm i babel-cli -g
npm i babel-preset-latest
for file in *; do   if [[ -f "$file" ]]; then     mkdir "${file%.*}";     mv "$file" "${file%.*}";   fi; done
npm install
node move-files.js 
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
node regex-notes.js
node regex-notes.
node regex-notes.js
cd ..
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/Regex-and-Express-JS.git
git push -u origin master
node regex-notes.js
git add .
node regex-notes.js
git add .
git commit -m :web template"
git commit -m web template"
git commit -m "web template"
git add .
find ./ | grep -i "\.html*$" >output.html
npm run build
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
npm run scss
npm install
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
node atags.js>out.html
find ./ | grep -i "\.html*$"
cd ..
git add .
npm i netlify-cli -g
mkdir my_project
cd my_project
netlify init
netlify addons:create fauna
netlify addons:auth fauna
git commit -m "submodule"
git puh 
git push 
npm init
npm install
netlify addons:create fauna
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git add .
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git add .
git submodule add https://github.com/RyanGC93/resourceNavigation.git
git submodule add https://github.com/RyanGC93/resourceNavigation.git
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec -print rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*.vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -empty -type d -print -delete
find . \( -name ".vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
cd 0-a-A-October
cd 02-student-website/
cd 01-student-website/
cd a-A-Student/
git add .
git commit -m "lotsastuff"
git push 
git push -f
git add .
git commit -m "please build"
git push 
git add .
git commit -m "please"
git push 
git add .
git commit -m "ughhhhh"
git push 
git add .
find . \( -name ".vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
find . -empty -type f -print -delete
tree -d
tree -d >tree.md
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name ".vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git remote add origin https://github.com/bgoonz/recource-hub-backups.git
git init
git add .
cd C:\0-a-A-October\02-student-website\Backup\README.md
cd 0-a-A-October
cd 02-student-website/
cd 01-student-website/
cd a-A-Student/
git add .
git commit -m "before I mess something up"
git push 
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/Data-Structures-Algorithms-Practice.git
git push -u origin master
git add .
git commit -m "added sum stf"
npm init -y
npm install loadash 
npm install loadash -f
npm install @dojo/themes
npm install typescript
npm install typescript -f
npm install react
npm install react -f
npm install request
npm install request -f
npm install
npm install -f
npm install body-parser
npm install body-parser -f
npm install mkdirp
npm install mkdirp -f
npm install -f
npm install express
npm install express -f
npm install react-dom
npm install react-dom -f
npm install moment
npm install moment -f
npm install --save datastructures-js
npm install -g npm-check-updates
ncu -u
npm update
npm install jquery
npm install jquery -f
npm install chalk
npm install chalk -f
npm install babel-runtime -f
npm install node-fetch
npm install node-fetch -f
npm install get-stream -f
npm install component-emmiter -f
npm install class-utils -f
npm install
npm install -g npm-check-updates
ncu -u
npm update
npm install -
find . -name ".LICENSE" -print0 | xargs -0 rm -rf
find . -name ".LICENSE" -print -delete
find . \( -name ".CHANGELOG.md" -o -name ".LICENSE.md" -o -name ".CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".CHANGELOG" -o -name ".LICENSE" -o -name ".CONTRIBUTING" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "CHANGELOG*" -o -name "LICENSE*" -o -name "CONTRIBUTING*" \) -exec rm -rf -- {} +
find . -name ".CHANGELOG" -print0 | xargs -0 rm -rf
find . -name ".LICENSE" -print0 | xargs -0 rm -rf
find . -name "*.LICENSE" -print0 | xargs -0 rm -rf
cd ..
find . -name ".LICENSE" -print -delete
cd ..
find . -name ".LICENSE" -print -delete
sudo find . -name ".LICENSE" -print -delete
find . -name ".LICENSE" -print -delete
bryan_dir:array-unique_exitstatus:0 ====>
bryan_dir:array-unique_exitstatus:0 ====>find . \( -name ".CHANGELOG.md" -o -name ".LICENSE.md" -o -name ".CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".CHANGELOG.md" -o -name ".LICENSE.md" -o -name ".CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -name ".LICENSE" -print0 | xargs -0 rm -rf
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name ".vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name ".vscode" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git add .
git commit -m "started-adding-practice-problems"
git push 
npm insttall
npm install
git add .
git commit -m "basic ads implementations"
git push 
tree -d -L4
tree -d -L 4
git add .
git commit -m "directory tree in readme"
git push 
git add .
git commit -m "added python folder"
git add .
git commit -m "added python folder"
git push 
git add .
git commit -m "added python folder"
git push 
npm run build
npm install --save datastructures-js
git add .
find . -name ".README" -print -delete
find . -name ".README.md" -print -delete
find . \( -name "*README.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
install python3
git commit -m "added common data structure reference material"
git push 
git add .
git commit -m "added my datastructures reference guide"
git push 
node test.js
node stupid-oneliner.js 
node test.j
node test.js
cd ..
git add .
git commit -m "array unique elements"
git push 
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
python3
node allunique-allTypes-O(n^2).js
node all-Unique.js
node allUnique-set.js
cd 0-a-A-October
cd 02-student-website/
cd 01-student-website/
cd a-A-Student/
cd ..
cd Backup/
git add .
git commit -m "so i can free up some space on my machine"
cd
get-pip.py
python3 get pip.py
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
node 53max-sub-arr.js 
git add .
node 102-b-tree-l-o-trav.js 
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
node 102-b-tree-l-o-trav.js 
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:/0-a-A-October/03-Interview-Prep/00-practice-questions/_0-Practice-repo/Beginners-Python-Examples-master/Beginners-Python-Examples-master/profitLoss.py
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe
return(str(lossPerc) + '%') # Func to calculate loss percent
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:/0-a-A-October/03-Interview-Prep/00-practice-questions/_0-Practice-repo/Beginners-Python-Examples-master/Beginners-Python-Examples-master/primeNumbers.py
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:/0-a-A-October/03-Interview-Prep/00-practice-questions/_0-Practice-repo/Beginners-Python-Examples-master/Beginners-Python-Examples-master/sumAverage.py
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:/0-a-A-October/03-Interview-Prep/00-practice-questions/_0-Practice-repo/Beginners-Python-Examples-master/Beginners-Python-Examples-master/pigLatin.py
npm run deploy
node 102-b-tree-l-o-trav.js 
node 105-
node 105-Construct\ Binary\ Tree\ from\ Preorder\ and\ Inorder\ Traversal.js 
git init
git add .
git commit -m "node modules so that I can link to the remote code" 
git push 
git remote add origin https://github.com/bgoonz/all-node-modules.git
git push 
git push -u origin master
tree >out.md
ll
tree >out.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' > output.txt
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' 
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }'
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
code .
ls -R ./ | awk '
> /:$/&&f{s=$0;f=0}
> /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
&&f{ > NF&&f{ print s"/"$0 }' 
ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'
ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }>output.txt'
ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }>output.txt




'
ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ >output.txt }'
ls -alF >output.txt
git add .
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
function script_usage() {
    cat << EOF
Usage:
     -h|--help                  Displays this help
     -v|--verbose               Displays verbose output
    -nc|--no-colour             Disables colour output
    -cr|--cron                  Run silently unless we encounter an error
EOF
 }
listLevel(){           local d="" ;           limit=$1 ;           for ((i=1 ; i <= limit ; i++)) ;             do                d=$d/.. ;             done ;           d=$(echo $d | sed 's/^\///') ;           if [ -z "$d" ]; then              d=.. ;           fi ;           ll $d ;           pwd ; } 
alias lslvl=listLevel 
lslvl
extractAllTypeFiles(){         if [ -f $1 ] ; then          case $1 in             *.tar.bz2)   tar xvjf $1    ;;             *.tar.gz)    tar xvzf $1    ;;             *.bz2)       bunzip2 $1     ;;             *.rar)       unrar x $1       ;;             *.gz)        gunzip $1      ;;             *.tar)       tar xvf $1     ;;             *.tbz2)      tar xvjf $1    ;;             *.tgz)       tar xvzf $1    ;;             *.zip)       unzip $1       ;;             *.Z)         uncompress $1  ;;             *.7z)        7z x $1        ;;             *)           echo "don't know how to extract '$1'..." ;;          esac ;        else          echo "'$1' is not a valid file!" ;    fi ;  } 
alias extract=extractAllTypeFiles 
weather(){ curl -s "wttr.in/$1?m1"} 
#!/bin/bash 
#Author: Raman Nv 
link="https://d19vezwu8eufl6.cloudfront.net/algs4partI/recoded_videos%2Falgs4partI-" 
#links were a set of strings with just the index of the video as the variable 
num=3  
#first video was numbered 3 - weird.  
ext=".mp4" 
while [ $num -le 66 ] ; do        wget $link$num$ext -P ~/Downloads/ ;       num=$(($num+1)) ; done 
sudo apt install lftp
git init
#!/bin/bash
# A simple shell script to use as a pomodoro app.
# The first argument is the focus time length.
# The second argument is the break length.
# Made by Kiailandi (https://github.com/kiailandi)
wseconds=${1:-15}*60;
pseconds=${2:-wseconds/300}*60;
# Check os and behave accordingly
if [ "$(uname)" == "Darwin" ]; then     while true; do         date1=$((`date +%s` + $wseconds));         while [ "$date1" -ge `date +%s` ]; do             echo -ne "$(date -u -j -f %s $(($date1 - `date +%s`)) +%H:%M:%S)\r";         done;         osascript -e 'display notification "Time to walk and rest!" with title "Break"';         read -n1 -rsp $'Press any key to continue or Ctrl+C to exit...\n';         date2=$((`date +%s` + $pseconds));         while [ "$date2" -gt `date +%s` ]; do             echo -ne "$(date -u -j -f %s $(($date2 - `date +%s`)) +%H:%M:%S)\r";         done;         osascript -e 'display notification "Time to get back to work" with title "Work"';         read -n1 -rsp $'Press any key to continue or Ctrl+C to exit...\n';     done; elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then     while true; do         date1=$((`date +%s` + $wseconds));         while [ "$date1" -ge `date +%s` ]; do             echo -ne "$(date -u --date @$(($date1 - `date +%s` )) +%H:%M:%S)\r";         done;         notify-send "Break" "Time to walk and rest";         read -n1 -rsp $'Press any key to continue or Ctrl+C to exit...\n';         date2=$((`date +%s` + $pseconds));         while [ "$date2" -ge `date +%s` ]; do             echo -ne "$(date -u --date @$(($date2 - `date +%s` )) +%H:%M:%S)\r";         done;         notify-send "Work" "Time to get back to work";         read -n1 -rsp $'Press any key to continue or Ctrl+C to exit...\n';     done; else     echo -ne "Your OS is currently not supported\n"; fi
git init
git add .
git commit -m "utility commands as scripts"
git remote add origin https://github.com/bgoonz/bash-shell-utility-functions.git
git push -u origin master
wget -m https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery
$ wget  --recursive  --no-clobber  --page-requisites  --html-extension  --convert-links  --restrict-file-names=windows  --domains website.org  --no-parent      https://developer.mozilla.org/en-US/
ll
git add .
git commit -m "added simple server"
git push 
git add .
git commit -m "reorganizing"
git push 
git add .
git commit -m "resources"
git push
git add .
git commit -m "hmm"
git push 
git add .
git commit -m "did some leetcode"
git push 
git add .
git commit -m "did some leetcode2"
git push 
npm install mocha
npm init -y
npm install jquery
chmod a+x hello-world.sh
chmod a+x hello-world.sh
chmod a+x helloworld.sh
bash hello-world.sh
bash helloworld.sh
chmod a+x echoPrint.sh
bash echoPrint.sh
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
function verbose_print() {     if [[ -n ${verbose-} ]]; then         pretty_print "$@";     fi; }
function check_superuser() {     local superuser;     if [[ $EUID -eq 0 ]]; then         superuser=true;     elif [[ -z ${1-} ]]; then         if check_binary sudo; then             verbose_print 'Sudo: Updating cached credentials ...';             if ! sudo -v; then                 verbose_print "Sudo: Couldn't acquire credentials ..."                     "${fg_red-}";             else                 local test_euid;                 test_euid="$(sudo -H -- "$BASH" -c 'printf "%s" "$EUID"')";                 if [[ $test_euid -eq 0 ]]; then                     superuser=true;                 fi;             fi;         fi;     fi     if [[ -z ${superuser-} ]]; then         verbose_print 'Unable to acquire superuser credentials.' "${fg_red-}";         return 1;     fi     verbose_print 'Successfully acquired superuser credentials.';     return 0; }
ll
git add .
git commit -m "go up "
git push 
sudo apt update
sudo apt upgrade
git remote add origin https://github.com/bgoonz/node-modules-for-study.git
git commit -m "so i can clear up space"
git push 
git push -u origin master
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch Resource-Hub-Mark_II/azagent/vstsagent.tar.gz
Resource-Hub-Mark_II/azagent/vstsagent.tar.gz' HEAD




git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_Resource-Hub-Mark_II/azagent/vstsagent.tar.gz' HEAD
git add .
git commit -m "up up and away"
git push 
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md"  -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt"\) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*HISTORY.md" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
grep "To search for text in files" -R . -n --include=*.md 
grep "To search for text in files" -R . -6 --include=*.md 
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/sandbox-backup-1.git
git push -u origin master
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
cd 0-a-A-October
cd 00-weeks/
git add .
git commit -m "updated content"
git push 
git add .
git commit -m "update 2"
git push 
git remote add origin https://github.com/bgoonz/My-Personal-Website.git
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
git init
git add .
git commit 
git commit -m "initial"
git push
git push -u origin master
npm install
npm install file-manager-js
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
sudo apt update
sudo apt upgrade
sudo apt-get autoclean
apt run autoclean
sudo apt autoremove && sudo apt clean
clean
apt-get clean
cd ..
apt-get clean
sudo apt-get clean
sudo apt-get autoclean
sudo apt-get autoremove
sudo add-apt-repository ppa:utappia/stable
sudo apt install ucaresystem-core
sudo ucaresystem-core
sudo add-apt-repository ppa:utappia/stable
sudo apt install ucaresystem-core
sudo ucaresystem-core
sudo apt-get install gtkorphan
sudo apt-get autoremove --purge
sudo apt install fslint
sudo apt autoclean
sudo apt-get clean
sudo apt autoremove
sudo apt install synaptic
sudo apt install localepurge
code .
dpkg --get-selections | grep linux-image
du -sk * | sort -nr | head -10
npm list -g
npm i -g npm
npm list -g
npm install -g webpack
code .
find . -empty -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
tree > README.md
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
npm run webpack
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git add .
git commit -m "added some modules"
git push 
git add .
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git add .
git commit -m "did some leetcode/reorginization"
git push 
node leetcode03-test.js 
git add .
npm start
npm lint
npm i --package-lock-only && npm audit fix
yarn build && yarn start
npm i --package-lock-only && npm audit fix
yarn test
npm i --package-lock-only && npm audit fix
npm audit fix -f
yarn build && yarn start
npm run package
npm run build
npm install
yarn build && yarn start
echo "  Releasing $1 version"
npm run lint
npm run build:prod
npm run package
npm run zip
npm version $1
git push --tags
release
npm run fetch-photosorcery
npm run package
npm install -g @babel/core
npm install -g
npm install -g @babel/preset-env
npm audit fix
npm install -g @babel/preset-react
npm install -g babel-loader
npm install -g chai
npm i -S babel-core
npm run lint
npm install alchemy@0.5.1
npm run build
npm install
yarn test
yarn build && yarn start
git add .
node compare-sort.js 
node quicker-quick-sort.js
node subsequence-quicksort.
node subsequence-quicksort.js
npm  init -y
npm install mocha chai jquery sinon testSupport
npm install mocha chai jquery sinon 
npm run test
git add .
git commit -m "lots of ds and leetcode"
git push 
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
npm install
npm run build:tsc
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
sudo find . -empty -type d -print -delete
find . -empty -type f -print -delete
cd home
ll
cd username
cd bryan
cd ..
cd .local
;;
ll
cd bryan
cd ..
cd home
ll
cd bryan
ll
cd .local
cd share
cd Trash
ll
cd lftp
ll
cd ..
ll
cd lib
ll
cd ..
cd bin
cd ..
cd share
cd nano
ll
cd ..
sudo apt install trash-cli
cd
gedit ~/Documents/trash.sh
sudo apt install gedit
pip3 install trash-cli
trash 
trash-list
cd ..
cd ,mt
cd mnt
cd c
cd Program Data
cd 'ProgramData'
cd Roaming
cd ..
cd 'Application Data'
cd Microsoft
cd Search
cd Data
sudo cd Data
sudo service postgres start
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
ll
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
npm install
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npm install -g bower
npm install
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
npm install
node array-sum.js 
find . -empty -type d -print -delete
find . -empty -type f -print -delete
node sum-of-arr-sums.js 
python3
cd 0-a-A-October
cd 00-weeks/
git add .
npm doc
npm docs
npm audit fix -f
npm install chai
npm run test
npm run test
npm install
npm audit fix
git add .
node 105-Construct\ Binary\ Tree\ from\ Preorder\ and\ Inorder\ Traversal.js 
C:/Users/bryan/AppData/Local/Microsoft/WindowsApps/python.exe c:\Users\bryan\.vscode\extensions\ms-python.python-2020.12.424452561\pythonFiles\pyvsc-run-isolated.py pip install -U pylint --user
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
mkdir .dist
npm install -g file loader
npm install -g webpack
npm install -g webpack-cli
npm install -g analytics-node
npm install -g loadash
npm install -g fuzzaldrin-plus
find . -empty -type f -print -delete
find . -empty -type d -print -delete
npm install
npm init
mkdir .dist
cd misc
git clone https://github.com/microsoft/vcpkg
code .
cd
cd 0-a-A-October
cd 00-weeks/
git add .
mkdir .dist
node memo-coin-change.js 
node leet_code_64.JS
node leet_code_70.js
mkdir .dist
npm init
npm install crypto
node shuffel.js 
chmod -x body.csh
chmod -x create.csh
bash create
bash create.csh
bash create.sh
npm run test
npm init -y
npm install mocha chai 
npm test
create.sh
run create.sh
chmod +x create.sh
bash create.sh
chmod +x body.sh
chmod +x body.csh
chmod +x create.csh
bash create.csh
dos2unix create.csh
bash create.csh
dos2unix create.sh
dos2unix create.csh
bash create.csh
dos2unix body.csh
bash create.csh
npm run test
npm test
npm install chai-spies
npm test
chmod -x create.sh
bash create.sh
dos2unix create.sh
bash create.sh
dos2unix body.sh
bash create.sh
npm run test
npm install
sudo apt-get install dos2unix
dos2unix [file]
mkdir .dist
node valid-filename.js
git add .
git commit -m "major revisions"
git add .
git commit -m "hmm"
git push 
git add .
git commit -m "cleaned up html"
git push 
find . -empty -type d -print -delete
node nameFromPath.js 
mkdir .dist
node vaid-filename.js 
git add .
node nameFromPath.js 
node file-name-regex.js 
mkdir .dist
npm run build:js
npm install babel:3:1
mkdir .dist
mkdir .dist
git add .
node rec-read-dir.js 
mkdir .dist
node tagify-arr.js 
tree -d -L 4
git add .
git commit -m "updated dir tree"
git push 
find . -empty -type f -print -delete
git add .
git commit -m "done for the night"
git push 
git add .
git commit -m "repl.it"
git push 
bash create.sh
find ./ | grep -i "\.html*$">out.txt
find . -empty -type d -print -delete
re -rd .vscode
rm -rd .vscode
node index.js 
mkdir .dist
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
mkdir .dist
git add .
git commit -m "complexity classes"
git push 
git add .
git commit -m "removed lib folders from gitignore"
git push
mkdir .dist
find . -empty -type f -print -delete
mkdir .dist
git add .
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/all-python-files.git
git push 
git push -u origin master
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
npm install broken-link-checker -g
find . -empty -type d -print -delete
find . -empty -type f -print -delete
mkdir .dist
cd 0-a-A-October
cd 00-weeks/
cd 08-my-website/
cd Stable/
git add .
mkdir .dist
cd ..
pp
ll
git clone https://github.com/microsoft/vcpkg
cd ..
code .
mkdir .dist
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
find . -empty -type f -print -delete
mkdir .dist
find . -name "*.zip" -type f -print
find . -name "*.zip" -type f -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
python3
git add .
git commit -m "async basics"
git push 
g++ --version
clang --version
sudo apt install clang
clang --version
mkdir .dist
mkdir .dist
git add .
cd 0-a-A-October
cd 00-weeks/
git add .
cd ..
code .
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
npm install -g gulp
npm install -g less
npm install -g eslint
npm install -g babel-eslint
npm install -g eslint-config-standard
npm install -g eslint-config-standard-react
npm install -g eslint-config-standard-jsx
npm install -g eslint-plugin-react
npm install -g eslint-config-prettier
npm install -g eslint-plugin-prettier
npm install -g prettier
npm install -g standard
npm install -g typescript
code .
npm install -g create-react-app
npm install -g create-react-library
npm install -g react-native-cli
npm install -g tldr
npm install -g now
npm install -g spoof
npm install -g fkill-cli
npm install -g castnow
npm install -g github-is-starred-cli
npm install -g tldr
npm install -g now
npm install -g spoof
npm install -g fkill-cli
npm install -g castnow
npm install -g github-is-starred-cli
npm install -g vtop
npm install -g ndb
npm install -g node-inspector
npm install -g yarn
npm install -g npx
npm install -g np
npm install -g npm-name-cli
npm install -g yarn
npm install -g npx
npm install -g np
npm install -g npm-name-cli
npm list -g
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
mkdir .dist
mkdir .dist
ll
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npm install -g typescript-language-server
typescript-language-server --stdio
yarn
yarn test
yarn test typescript-language-server
yarn watch
typescript-language-server --node-ipc
yarn
yarn test
wget -m https://fa71dcae-f502-45c0-a64e-4c0c6c6beedd.ws-us03.gitpod.io/#/workspace/typescript-language-server
code.
code .
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
cmd() {   echo " ==== create .html page listing files in a list-file ==== "   echo " out = $outwill strip off .html ...";   out="basename $out.html"   html="index.html" ##default;;   echo'<DOCTYPE="html">';   echo '<html><head>';   echo '  <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">';   echo '  <meta http-equiv="Content-Type" content="text/html"; ';   echo '        char="iso-8859-1"> ';   echo '  <meta name="Author" content="Bryan Guner">'   echo "  <TITLE> directory </TITLE> </head>";   echo ""
  echo '<body>';   echo ""
  echo "<font face="arial, helvetica" size=3>";   echo ""   echo "</center>";   echo "";   echo "<ul>"   awk '{print "<LI><a href=\""$1"\">",$1,"</A>&nbsp;"}' $listing   echo "";   echo "</ul>"   echo "</body>";   echo "</html>" }
cmd $listing >>$html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
git commit -m "big update"
git add all
git add 
git add Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use “git restore <file>.-.“ to discard changes in working directory)
(commit or discard the untracked or modified content in submodules)
modified: 0D—4—all—timeXl-Data—StructuresfDS—and—Algorithms—Prac (modified content, untrached content)
modified: UD-4-all-timerseful-Tools-reposfS-website-components/ZOZO.ll-badReads (modified content)
modified: 0D-4-all-timefsubmoduleszpp-Academy-Hotes{App-Academy-Hotes-masterfweek-ZlPracticeltest/test-js
modified: 07-utilitiesfbashf_0-UTILITY (modified content, untracked content)
modified: 08-my-websitef8table (modified content, untracked content)
Untracked files:
(use "git add <file>..." to include in what will be committed)
00-4-all-timefl-Data-Structuresfprototypeing-inclusions/
D0-4-all-timefvscodefsnippet-syntaxf
08-my-websitefexperimentalf
D9-Personal-Explorationfinkscapef
OS-Personal—Explorationfmisc-sandboxf
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
cmd() {   echo " ==== create .html page listing files in a list-file ==== "   echo " out = $outwill strip off .html ...";   out="basename $out.html"   html="index.html" ##default;;   echo'<DOCTYPE="html">';   echo '<html><head>';   echo '  <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">';   echo '  <meta http-equiv="Content-Type" content="text/html"; ';   echo '        char="iso-8859-1"> ';   echo '  <meta name="Author" content="Bryan Guner">'   echo "  <TITLE> directory </TITLE> </head>";   echo ""
  echo '<body>';   echo ""
  echo "<font face="arial, helvetica" size=3>";   echo ""   echo "</center>";   echo "";   echo "<ul>"   awk '{print "<LI><a href=\""$1"\">",$1,"</A>&nbsp;"}' $listing   echo "";   echo "</ul>"   echo "</body>";   echo "</html>" }
cmd $listing >>$html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
cmd() {   echo " ==== create .html page listing files in a list-file ==== "   echo " out = $outwill strip off .html ...";   out="basename $out.html"   html="index.html" ##default;;   echo'<DOCTYPE="html">';   echo '<html><head>';   echo '  <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">';   echo '  <meta http-equiv="Content-Type" content="text/html"; ';   echo '        char="iso-8859-1"> ';   echo '  <meta name="Author" content="Bryan Guner">'   echo "  <TITLE> directory </TITLE> </head>";   echo ""
  echo '<body>';   echo ""   echo ""   echo "</center>";   echo "";   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo "";   echo "</ul>"   echo "</body>";   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
cmd() {   echo " out = $outwill strip off .html ...";   out="basename $out.html"   html="index.html"    echo'<DOCTYPE="html">';   echo '<html><head>';   echo '  <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">';   echo '  <meta http-equiv="Content-Type" content="text/html";>';   echo '  <meta name="Author" content="Bryan Guner">'   echo "  <TITLE> directory </TITLE> </head>";   echo ""
  echo '<body>';   echo ""   echo ""   echo "</center>";   echo "";   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo "";   echo "</ul>"   echo "</body>";   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
cmd() {   echo " out = $outwill strip off .html ...";   out="basename $out.html"   html="index.html"    echo'<DOCTYPE="html">';   echo '<html><head>';   echo '  <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">';   echo '  <meta http-equiv="Content-Type" content="text/html";>';   echo '  <meta name="Author" content="Bryan Guner">'   echo "  <TITLE> directory </TITLE> </head>";   echo ""
  echo '<body>';   echo ""   echo ""   echo "</center>";   echo "";   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo "";   echo "</ul>"   echo "</body>";   echo "</html>" }
cmd $listing >>$html
echo  ' <link rel="stylesheet" href="./assets/style.css">'
}
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '<DOCTYPE="html">';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
git add .
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
cd 0-a-A-October
cd 00-weeks/
git add .
git init
git add .
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
npm install
npm install
npm run postinstall
npm coverage
yes
npm build
npm lint
npm   <script async defer src="./Public/0-assets/js/"></script>
npm eslint .
node example/index.js
npm tap test/*.js --coverage --coverage-report=lcov
npm generate-docs
npx lite-server solution
npm run start
npm run serverstart
npm run devstart
npm i express-fileupload
npm init -y
npm i express-fileupload
npm run coveralls
npm install
npm run lint
npm run test
npm run lint
npm run test
npm install
cd 0-a-A-October
cd 00-weeks/
git commit -m "please please please"
git add 00-4-all-time/1-Data-Structures/DS-and-Algorithms-Prac
git add 00-4-all-time/Useful-Tools-repos/5-website-components/2020.11.badReads
git add 00-4-all-time/submodules/App-Academy-Notes/App-Academy-Notes-master/week-2/Practice/test/test.js
git add 07-utilities/bash/_0-UTILITY
git add 08-my-website/Stable
git add     00-4-all-time/vscode/snippet-syntax/
git add 00-4-all-time/vscode/snippet-syntax/
git add 08-my-website/experimental/
git add 09-Personal-Exploration/inkscape/
git add  09-Personal-Exploration/misc-sandbox/
git commit -m "please"
git push 
wget -mkEpnp https://dc84e733-2a6e-497b-96cc-1001db8e9c10.ws-us03.gitpod.io/#/workspace/wikitools
wget https://dc84e733-2a6e-497b-96cc-1001db8e9c10.ws-us03.gitpod.io/#/workspace/wikitools
npm install 
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
npm install
npm run build
npm run watch
npm run prepare
npm run test
npm install
npm audit fix
npm install
npm init -y
npm install
echo "" > $(npm config get userconfig)
npm config edit
echo "" > $(npm config get globalconfig)
npm config --global edit
echo "" > $(npm config get globalconfig)
npm config --global edit
npx express-generator
npm install -g express-generator
express
npm install -g consolidate
sudo sh -c 'echo "" > $(npm config get globalconfig)'
npm config set registry "https://skimdb.npmjs.com/registry"
npm config delete registry
npm config set ca ""
npm config delete ca
npm config get ca
npm config set registry https://registry.npmjs.org/
echo "" > $(npm config get userconfig)
npm config edit
npm init -y
npm install consolidate
sudo sh -c 'echo "" > $(npm config get globalconfig)'
npm install reinstall -g
reinstall
npm run test
npm run pretest
npm run lint
npm audit fix
npm install pug-cli
npm init -y
npm install pug-cli
npm run test
npm install mocha
find ./ | grep -i "\.js*$"
git remote add origin https://bgoonz1@bitbucket.org/bgoonz1/00-weeks.git
find . -empty -type f -print -delete
#!/bin/sh
find ./ | grep -i "\.*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.html*$" >files
#!/bin/sh
find ./ | grep -i "\.html*$" >files
#!/bin/sh
find ./ | grep -i "\.html*$" >files
listing="files.md"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files.md"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
find . -name "*.xml" -type f -print
uniq -u files outfiles.md
find . -type f -name '*.*' | sed 's|.*\.||' | sort -u>test.md
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
git clone https://bgoonz1@bitbucket.org/bgoonz1/00-weeks.git
npm install -f
npm audit fix -f
find . -name "*.xml" -type f -print
sed '/\./git/d;' -i index.html
sed '\./git/d;' -i index.html
sed '/./git/d;' -i index.html
sed -i 's@.*\(*.git\)\.*@@i' index.html
ls --group-directories-first
ls -lX
ls | rev | sort | rev
ls --sort=extension
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
find ./ | grep -i "\.html*$"
find ./ | grep -i "\.html*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
git add .
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$"| sed -i .*\./\.git.* >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension |sed -i '.*\./\.git.*'>>$html
#!/bin/sh
find ./ | grep -i "\.*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
find ./ | grep -i "\.*$" --sort=extension>files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$"| sed -i '.*\./\.git.*'>files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$"| sed -i .*\./\.git.* >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension>>$html
npm install -g pug-cli
node filereader.
node filereader.js
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
node create-dir-arr.js 
npm install serve-static
git add .
git add .
npm install --save-dev jsdoc
node build.js
npm install -g npm@latestnpm install -g npm@latest
npm install -g npm@latest
npm install -g jsdoc
npm install
git clone https://github.com/jsdoc/jsdoc.git
npm run coverage
npm install -g npm
npm run doc
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
npm run test
npm run test
npm install
node build.js
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
cd ..
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
npm install
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
jsdoc "c:\Users\bryan\.vscode\extensions\ludorival.preview-jsdoc-2.0.9\node_modules\jsdoc\jsdoc.js" --verbose -d
sudo apt install jsdoc-toolkit
jsdoc "c:\Users\bryan\.vscode\extensions\ludorival.preview-jsdoc-2.0.9\node_modules\jsdoc\jsdoc.js" --verbose -d "c:\Users\bryan\AppData\Roaming\Code\User\workspaceStorage\50228e63cac6712495f4aaf7b3d6e546\ludorival.preview-jsdoc\www" "c:\My Web Sites\https___www.javascripture.com_\www.javascripture.com\JavaScripture-master\JavaScripture-master\content\JavaScript"
Parsing c:\My Web Sites\https___www.javascripture.com_\www.javascripture.com\JavaScripture-master\JavaScripture-master\content\JavaScript\array.jsdoc ...
jsdoc book.js
jsdoc book.js --directory './'
git clone https://github.com/nkronlage/JavaScripture.git
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git clone https://github.com/nkronlage/JavaScripture.git
#!/bin/sh
# Make sure you're in the root Compojure dir
cd `dirname $0`
for file in `find . -name *.jar`; do     jars=$jars:$file; done
classpath=src:$jars
opts="-Xmx256m -server"
if which rlwrap > /dev/null; then    rlwrap=rlwrap; else    rlwrap=; fi
if [ $# -gt 0 ]; then    $rlwrap java $opts -cp $classpath clojure.main -i boot.clj --repl ; else    java $opts -cp $classpath clojure.main boot.clj; fi
#!/bin/sh
# Make sure you're in the root Compojure dir
cd `dirname $0`
for file in `find . -name *.jar`; do     jars=$jars:$file; done
classpath=src:$jars
opts="-Xmx256m -server"
if which rlwrap > /dev/null; then    rlwrap=rlwrap; else    rlwrap=; fi
if [ $# -gt 0 ]; then    $rlwrap java $opts -cp $classpath clojure.main -i boot.clj --repl ; else    java $opts -cp $classpath clojure.main boot.clj; fi
Error: Could not find or load main class clojure.main
java -cp "cljs.jar;src" clojure.main build.clj
chmod -x run.sh
bash run.sh
npm install [-g] shelljs
npm audit fix
npm audit fix --force
npm run serve
npm run start
npm run serve
npm install
install express --save
install express --save-dev
npm install -g shelljs
npm run clean
npm clean
node clean
npm run clean
npm run build.js
node build.js
npm build 
npm run-script build
npm install 
touch Dockerfile
docker build -t bgoonz/node-web-app .
sudo apt install docker.io
docker build -t bgoonz/node-web-app .
docker build -t bgoonz/node-web-app
docker build -t bgoonz/node-web-app .
npm run start
docker run -it -p 5432:5432 postgres
POSTGRES_HOST_AUTH_METHOD=trust
docker run -it -p 5432:5432 postgres
psql
sudo service postgresql restart
npm migrate
COPY . .
git add .
npm install --save pg sequelize
npm install --save sequelize
npm start
node killall
npm ci --only=production
find . -empty -type f -print -delete
find . -empty -type d -print -delete
node server.js
npm run test
npm install
npm rebuild
git add .
npm install --save pm2
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
npm install pg
npm install --save-dev jest
killall node
npm install
npm run test
npm run serve
npm audit fix -f
npm update
npm run migrate
npm install pug
npm run migrate
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
<a href="../privacy.html">Privacy Policy</a>
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -empty -type f -print -delete
find . -empty -type d -print -deletefind . -empty -type f -print -delete
find . -empty -type d -print -delete
rm -rd hts-cache
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
<style>
body {
}
.btn:visited {
}
.btn {
}
.btn:active {
}
.btn::before {
}
#home-link2 {
git init
git add .
git commit -m "initial commit"
git add .
find . -empty -type f -print -delete
find . -empty -type d -print -delete
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
sudo groupadd docker
dockerd
docker run hello-world
docker run -dp 80:80 docker/getting-started
npm i markdown-extract -g
npm install
sudo service postgresql restart
git pull
node child-process.js
