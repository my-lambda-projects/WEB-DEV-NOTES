# sed - 20 examples to remove / delete characters from a file

> In this article of sed series , we will see the examples of how to remove or delete characters from a file. The syntax of sed command replac...

In this article of [sed series](http://www.theunixschool.com/p/awk-sed.html), we will see the examples of how to remove or delete characters from a file. The syntax of sed command replacement is:

$ sed 's/find/replace/' file

 This sed command finds the pattern and replaces with another pattern. When the replace is left empty, the pattern/element found gets deleted.

Let us consider a sample file as below:

$ cat file
Linux
Solaris
Ubuntu
Fedora
RedHat

**1**. **To remove a specific character**, say 'a'

$ sed 's/a//' file
Linux
Solris
Ubuntu
Fedor
RedHt

  This will remove the first occurence of 'a' in every line of the file. To remove all occurences of 'a' in every line,

$ sed 's/a//g' file

**2**. **To remove 1st character in every line**:

$ sed 's/^.//' file
inux
olaris
buntu
edora
edHat

  .(dot) tries to match a single character. The  ^ tries to match a pattern(any character) in the beginning of the line.   Another way to write the same:

$ sed 's/.//' file

  This tells to replace a character with nothing. Since by default, sed starts from beginning, it replaces only the 1st character since 'g' is not passed.

**3\. To remove last character of every line** :

$ sed 's/.$//' file
Linu
Solari
Ubunt
Fedor
RedHa

  The $ tries to match a pattern in the end of the line.

**4\. To remove the 1st and last character of every line in the same command**:

$ sed 's/.//;s/.$//' file
inu
olari
bunt
edor
edHa

   Two commands can be given together with a semi-colon separated in between.

**5\. To remove first character only if it is a specific character**:

$ sed 's/^F//' file
Linux
Solaris
Ubuntu
edora
RedHat

  This removes the 1st character only if it is 'F'.

**6\. To remove last character only if it is a specific character**:

$ sed 's/x$//' file
Linu
Solaris
Ubuntu
Fedora
RedHat

   This removed the last character only if it s 'x'.

**7\. To remove 1st 3 characters of every line**:

$ sed 's/...//' file
ux
aris
ntu
ora
Hat

  A single dot(.) removes 1st character, 3 dots remove 1st three characters.

**8\. To remove 1st n characters of every line**:

$ sed -r 's/.{4}//' file
x
ris
tu
ra
at

   .{n} -> matches any character n times, and hence the above expression matches 4 characters and deletes it.

**9\. To remove last n characters of every line**:

$ sed -r 's/.{3}$//' file
Li
Sola
Ubu
Fed
Red

 

**10\. To remove everything except the 1st n characters in every line**:

$ sed -r 's/(.{3}).\*/\\1/' file
Lin
Sol
Ubu
Fed
Red

  .\* -> matches any number of characters, and the first 3 characters matched are grouped using parantheses. In the replacement, by having \\1 only the group is retained, leaving out the remaining part.

**11\. To remove everything except the last n characters in a file**:

$ sed -r 's/.\*(.{3})/\\1/' file
nux
ris
ntu
ora
Hat

  Same as last example, except that from the end.

**12\. To remove multiple characters present in a file**:

$ sed 's/\[aoe\]//g' file
Linux
Slris
Ubuntu
Fdr
RdHt

   To delete multiple characters, \[\] is used by specifying the characters to be removed. This will remove all occurences of the characters a, o and e.

**13\. To remove a pattern** :

$ sed 's/lari//g' file
Linux
Sos
Ubuntu
Fedora
RedHat

 Not just a character, even a pattern can be removed. Here, 'lari' got removed from 'Solaris'.

**14\. To delete only nth occurrence of a character in every line**:

$ sed 's/u//2' file
Linux
Solaris
Ubunt
Fedora
RedHat

  By default, sed performs an activity only on the 1st occurence. If n is specifed, sed performs only on the nth occurence of the pattern. The 2nd 'u' of 'Ubuntu' got deleted.

**15\. To delete everything in a line followed by a character**:

$ sed 's/a.\*//' file
Linux
Sol
Ubuntu
Fedor
RedH

**16\. To remove all digits present in every line of a file**:

$ sed 's/\[0-9\]//g' file

  \[0-9\] stands for all characters between 0 to 9 meaning all digits, and hence all digits get removed.

**17\. To remove all lower case alphabets present in every line**:

$ sed 's/\[a-z\]//g' file
L
S
U
F
RH

  \[a-z\] represents lower case alphabets range and hence all lower-case characters get removed.

**18\. To remove everything other than the lower case alphabets**:

$ sed 's/\[^a-z\]//g' file
inux
olaris
buntu
edora
edat

   ^ inside square brackets negates the condition. Here, all characters except lower case alphabets get removed.

**19\. To remove all alpha-numeric characters present in every line**:

$ sed 's/\[a-zA-Z0-9\]//g' file

    All alpha-numeric characters get removed.

**20\. To remove a character irrespective of the case**:

$ sed 's/\[uU\]//g' file
Linx
Solaris
bnt
Fedora
RedHat

 By specifying both the lower and upper case character in brackets is equivalent to removing a character irrespective of the case.


[Source](https://www.theunixschool.com/2014/08/sed-examples-remove-delete-chars-from-line-file.html)