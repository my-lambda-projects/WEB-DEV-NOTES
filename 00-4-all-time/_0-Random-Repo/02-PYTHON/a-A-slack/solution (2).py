







class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        while p and q:
            if p.val != q.val: return False

            if p.left:
                if not q.left: return False
                predecessorP = p.left
                predecessorQ = q.left
                while predecessorP.right and predecessorP.right != p:
                    if not predecessorQ.right: return False
                    predecessorP = predecessorP.right
                    predecessorQ = predecessorQ.right
                if predecessorP.right:
                    predecessorP.right = None
                    predecessorQ.right = None
                    p = p.right
                    q = q.right
                else:
                    if predecessorQ.right: return False;
                    predecessorP.right = p;
                    predecessorQ.right = q;
                    p = p.left
                    q = q.left
            else:
                if q.left: return False
                p = p.right
                q = q.right
        return p == None and q == None;