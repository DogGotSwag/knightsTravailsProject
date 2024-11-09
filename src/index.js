import createGraph from './createGraph.js';

const all = createGraph();

function knightMoves(arrOne, arrtwo) {
  const q = [];
  q.push({ vertex: arrOne, pastVertices: [] });

  let front = 0;
  const allFastestRoutes = [];
  while (front < q.length) {
    const currentVertex = q[front].vertex;

    if (JSON.stringify(currentVertex) === JSON.stringify(arrtwo)) {
      let arr = [];
      arr = arr.concat(q[front].pastVertices);
      arr.push(currentVertex);
      allFastestRoutes.push(arr);
    }
    if (allFastestRoutes.length === 0) {
      const al = all[currentVertex[0]][currentVertex[1]];
      const newPastVertices = [...q[front].pastVertices];
      newPastVertices.push(currentVertex);

      for (let i = 0; i < al.length; i += 1) {
        let go = true;
        for (let j = 0; j < newPastVertices.length; j += 1) {
          if (JSON.stringify(al[i]) === JSON.stringify(newPastVertices[j])) {
            go = false;
          }
        }
        if (go === true) {
          q.push({ vertex: al[i], pastVertices: newPastVertices });
        }
      }
    }
    front += 1;
  }
  const steps = allFastestRoutes[0].length - 1;
  console.log(`You made it in ${steps} moves! Here's your path(s)`);
  for (let i = 0; i < allFastestRoutes.length; i += 1) {
    console.log(allFastestRoutes[i]);
  }
}

knightMoves([3, 3], [4, 3]);
