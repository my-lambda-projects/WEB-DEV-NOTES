






import re
class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        if num < 0:
            return False
        m = re.split("1", bin(num))
        return True if len(m) == 2 and len(m[1]) % 2 == 0 else False