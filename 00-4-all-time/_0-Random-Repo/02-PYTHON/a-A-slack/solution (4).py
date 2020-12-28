# Time: O(n)     n = number of nodes
# Space: O(max_width)











class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        if not root: return 0
        
        max_width = 0
        queue = [[root, 0]]
        while queue:
            next_level = []
            for node, y_coord in queue:
                if node.left:
                    next_level.append([node.left, y_coord * 2])
                if node.right:
                    next_level.append([node.right, y_coord * 2 + 1])
            max_width = max(max_width, queue[-1][1] - queue[0][1] + 1)            
            queue = next_level
            
        return max_width