for md in "$search_dir"*.md
do
    echo mv "'$md'" "'${dir} ${md}'"
done
