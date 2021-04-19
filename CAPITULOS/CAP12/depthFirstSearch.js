import {Colors, initializeColor, myVertices, graph, Graph} from './Graph';

export const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    for (let i = 0; i < vertices.lenght; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearch(vertices[i], color, adjList, callback)
        }
    }
};
const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if (callback) {
        callback(u);
    }
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.lenght; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }
    color[u] = Colors.BLACK;
}
export const DFS = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getVertices();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = { count : 0};
    for (let i = 0; i < vertices.lenght; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    }; 
};

const DFSVisit = (u, color, a, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.lenght; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
};

//Ordenação topologica aplicada em DAG'S 
graph = new Graph(true);
myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
const result = DFS(graph);

const fTimes = result.finished;
s = '';
for (let count = 0; count < myVertices.length; count++) {
    let max = 0;
    let maxName = null;
    for (i < 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
            max = fTimes[myVertices[i]];
            maxName = myVertices[i];
        }
    }
    s += ' - ' + maxName;
    delete fTimes[maxName];
}

console.log(s);

depthFirstSearch(graph, printVertex);

