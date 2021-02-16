#!/bin/bash

#script to recursively travel a dir of n levels

function traverse() {   

for file in `ls $1`
do
    #current=${1}{$file}
    if [ ! -d ${1}${file} ] ; then
        echo " ${1}${file} is a file"
        declare -A arr
shopt -s globstar

for file in **; do
  [[ -f "$file" ]] || continue
   
  read cksm _ < <(md5sum "$file")
  if ((arr[$cksm]++)); then 
    echo "rm $file"
  fi
done
    else
        #echo "entering recursion with: ${1}${file}"
            traverse "${1}/${file}"
    fi
    
done
}

function main() {
    traverse $1
}

main $1

declare -A arr
shopt -s globstar

for file in **; do
  [[ -f "$file" ]] || continue
   
  read cksm _ < <(md5sum "$file")
  if ((arr[$cksm]++)); then 
    echo "rm $file"
  fi
done


