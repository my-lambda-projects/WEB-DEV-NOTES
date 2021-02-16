static boolean isAllUnique(String s)
{
    boolean[] check = new boolean[256];
    for(char c : s.toCharArray())
    {
        if(check[c])
        {
            return false;
        }
        check[c] = true;
    }
    return true;
}
static boolean isAllUniqueWithStreams(String s)
{
    Set<Character> set = s.chars().mapToObj(c -> (char)c).collect(Collectors.toSet());
    return set.size() == s.length();
}
static int lengthOfLongestUniqueSubstr(String s)
{
    int max = 0;
    for(int i = 0; i < s.length(); ++i)
    {
        for(int j = s.length(); j >= i; --j)
        {
            String subStr = s.substring(i, j);
            if(isAllUnique(subStr) && subStr.length() > max)
            {
                max = subStr.length();
            }
        }
    }
    return max;
}
