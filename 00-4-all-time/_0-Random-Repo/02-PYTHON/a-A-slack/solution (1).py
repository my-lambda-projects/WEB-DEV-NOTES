# Time: O(n)
# Space: O(width)   Width being number of children kept in the stack











class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head: return head
        
        stack = [head]
        prev = Node()
        while stack:
            node = stack.pop()
            node.prev = prev
            prev.next = node
            if node.next:
                stack.append(node.next)
            if node.child:
                stack.append(node.child)
                node.child = None
            prev = node
        head.prev.next = None
        head.prev = None
        return head
        