class MyHashSet(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.map = [[] for _ in range(1000)]
        
        

    def add(self, key):
        """
        :type key: int
        :rtype: None
        """
        subkey = key % 1000
        if not self.contains(key):
            self.map[subkey].append(key)
        

    def remove(self, key):
        """
        :type key: int
        :rtype: None
        """
        subkey = key % 1000
        if self.contains(key):
            self.map[subkey].remove(key)
        

    def contains(self, key):
        """
        Returns true if this set contains the specified element
        :type key: int
        :rtype: bool
        """
        subkey = key % 1000
        
        return key in self.map[subkey]
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)