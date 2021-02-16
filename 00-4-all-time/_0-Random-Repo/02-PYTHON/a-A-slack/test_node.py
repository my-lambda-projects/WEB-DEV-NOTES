import tree
import unittest
from unittest.mock import Mock, PropertyMock, patch

class NodeInitTest(unittest.TestCase):
    def setUp(self):
        self.node = tree.Node('some value')

    def test_initial_value(self):
        self.assertEqual(self.node.value, 'some value')

    def test_parent(self):
        self.assertIsNone(self.node.parent)

    def test_children(self):
        self.assertListEqual(self.node.children, [])


class NodeParentSetterTest(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_sets_parent(self):
        self.assertEqual(self.child1.parent, self.parent)

    def test_sets_children(self):
        self.assertListEqual(self.parent.children, [self.child1, self.child2])

    def test_setting_parent_twice(self):
        self.child2.parent = self.parent
        self.assertListEqual(self.parent.children, [self.child1, self.child2])

    def test_setting_parent_to_None(self):
        self.child2.parent = None
        self.assertIsNone(self.child2.parent)

    def test_reassigning_parent(self):
        self.child2.parent = self.child1
        self.assertEqual(self.child2.parent, self.child1)

    def test_setting_children_when_reassinging_parent(self):
        self.child2.parent = self.child1
        self.assertIn(self.child2, self.child1.children)

    def test_removing_children_when_reassinging_parent(self):
        self.child2.parent = self.child1
        self.assertNotIn(self.child2, self.parent.children)

class TreeNodeAddChildTest(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_add_child_calls_parent_setter(self):
        with patch('tree.Node.parent', new_callable=PropertyMock) as mock_prop:
            parent = tree.Node('parent')
            child = tree.Node('child')
            parent.add_child(child)
            mock_prop.assert_called_with(parent)

    def test_add_child_does_not_add_the_child_twice(self):
        self.child1.add_child(self.child2)
        self.assertListEqual(self.child1.children, [self.child2])


class TreeNodeRemoveChildTest(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_sets_parent_to_None(self):
        with patch('tree.Node.parent', new_callable=PropertyMock) as mock_prop:
            parent = tree.Node('parent')
            child = tree.Node('child')
            parent._children.append(child)
            child._parent = parent

            parent.remove_child(child)
            mock_prop.assert_called_with(None)


class DepthFirstTest(unittest.TestCase):
    def setUp(self):
        self.nodes = [tree.Node(i) for i in "abcdefg"]
        parent_index = 0
        for index, child in enumerate(self.nodes):
            if index == 0: continue
            child.parent = self.nodes[parent_index]
            parent_index += 1 if index % 2 == 0 else 0

    def test_self_contains_value(self):
        self.assertEqual(self.nodes[0].depth_search('a'), self.nodes[0])

    def test_finds_descendant(self):
        self.assertEqual(self.nodes[0].depth_search('g'), self.nodes[-1])

    def test_not_found(self):
        self.assertIsNone(self.nodes[0].depth_search('x'))

    def test_path(self):
        for child in self.nodes:
            child.depth_search = Mock(wraps=child.depth_search)

        self.assertEqual(self.nodes[0].depth_search('e'), self.nodes[4])

        self.nodes[2].depth_search.assert_not_called()
        for i in [0, 1, 3, 4]:
            self.nodes[i].depth_search.assert_called()


if __name__ == '__main__':
    unittest.main()
