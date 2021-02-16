class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) {
      this.addVertex(srcValue);
    }
    if (!this.adjList[destValue]) {
      this.addVertex(destValue);
    }
    //if verticies already exist
    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    //!edges is array
    //-should call the prior two methods (a===src)...(b===dest)
    edges.forEach((edge) => {
      if (edge.length === 1) {
        this.addVertex(edge[0]);
      } else {
        this.addEdges(edge[0], edge[1]);
      }
    });
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    const vistedNodesSet = new Set();
    const queue = [startingVertex];
    // const vistedVerticies = [];
    while (queue.length) {
      let currentVertex = queue.shift();
      if (vistedNodesSet.has(currentVertex)) continue;
      vistedNodesSet.add(currentVertex);
      queue.push(...this.adjList[currentVertex]);
      //enqueue the adjacent verticies for vertex we just pushed
    }
    return Array.from(vistedNodesSet);
  }

  depthFirstTraversalIterative(startingVertex) {
    const vistedNodesSet = new Set();
    const stack = [startingVertex];
    while (stack.length) {
      let currentVertex = stack.pop();
      if (vistedNodesSet.has(currentVertex)) continue;
      vistedNodesSet.add(currentVertex);
      stack.push(...this.adjList[currentVertex]);
      //enqueue the adjacent verticies for vertex we just pushed
    }
    return Array.from(vistedNodesSet);
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex);
    verticies.push(startingVertex);
    for (let curAdjVertex of this.adjList[currentVertex]) {
      this.depthFirstTraversalRecursive(startingVertex, visited, verticies);
    }
    return verticies;
  }
}

graph = new Graph();
console.log(graph, "before vertex addition");
console.log(graph.adjList, "before vertex addition");
graph.addVertex("f");
graph.addVertex("a");
graph.addVertex("b");

console.log(graph, "after vertex addition");
console.log(graph.adjList, "after vertex addition");
graph.addEdges("y", "z");
graph.addEdges("x", "z");

console.log(graph, "after edge addition");
console.log(graph.adjList, "after edge addition");

module.exports = {
  Graph,
};
