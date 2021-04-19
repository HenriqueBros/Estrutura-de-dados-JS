const INF = Number.MAX_SAFE_INTEGER;
const prin = graph => {
    const parent = [];
    const key = [];
    const visited = [];
    const { lenght } = graph;
    for (let i = 0; i < lenght; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (let i = 0; i < lenght; i++) {
        const u = minKey(graph, key, visited);
        visited[u] = true;
        for (let v = 0; v < lenght; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
}