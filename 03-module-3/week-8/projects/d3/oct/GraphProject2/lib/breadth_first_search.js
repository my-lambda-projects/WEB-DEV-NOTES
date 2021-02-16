function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set();
    const vertices = []
    const queue = [ startingNode ];
    while(queue.length){
        let currentNode = queue.shift();
        if (visited.has(currentNode)) continue;
        visited.add(currentNode)
        if(currentNode.val === targetVal) return currentNode;
        vertices.push(currentNode)
        queue.push(...currentNode.neighbors)
    }
    return null;
}

// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }

module.exports = {
    breadthFirstSearch
};
