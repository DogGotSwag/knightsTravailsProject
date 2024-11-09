import createGraph from './createGraph.js';

const all = createGraph();

function knightMoves(arrOne, arrtwo) {
  const q = [];
  q.push({ vertex: arrOne, pastVertices: [] });

  let front = 0;
  while (front < q.length) {
    const currentVertex = q[front].vertex;

    if (JSON.stringify(currentVertex) === JSON.stringify(arrtwo)) {
      console.log(q[front].pastVertices);
      console.log(currentVertex);
      return 'found';
    }
    const al = all[currentVertex[0]][currentVertex[1]];
    const newPastVertices = [...q[front].pastVertices];
    newPastVertices.push(currentVertex);
    for (let i = 0; i < al.length; i += 1) {
      q.push({ vertex: al[i], pastVertices: newPastVertices });
    }

    front += 1;
  }
  return undefined;
}

knightMoves([0, 0], [7, 3]);
