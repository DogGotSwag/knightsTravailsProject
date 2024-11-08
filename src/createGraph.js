import allMoves from "./allMoves.js";

function createGraph() {
  let all = [];
  for (let i = 0; i < 8; i++) {
    let array = [];
    for (let j = 0; j < 8; j++) {
      array.push(allMoves([i, j]));
    }
    all.push(array);
  }
  return all;
}
export default createGraph;
