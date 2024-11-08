function movesUp(arr) {
  let moves = [];

  let row = arr[0];
  let col = arr[1];

  let newRow = row + 2;
  if (newRow > 7) {
    return [];
  }

  let left = col - 1;
  let right = col + 1;

  if (left >= 0) {
    moves.push([newRow, left]);
  }
  if (right <= 7) {
    moves.push([newRow, right]);
  }

  return moves;
}

function movesDown(arr) {
  let moves = [];

  let row = arr[0];
  let col = arr[1];

  let newRow = row - 2;
  if (newRow < 0) {
    return [];
  }

  let left = col - 1;
  let right = col + 1;

  if (left >= 0) {
    moves.push([newRow, left]);
  }
  if (right <= 7) {
    moves.push([newRow, right]);
  }

  return moves;
}

function movesLeft(arr) {
  let moves = [];

  let row = arr[0];
  let col = arr[1];

  let newCol = col - 2;
  if (newCol < 0) {
    return [];
  }

  let top = row + 1;
  let bottom = row - 1;

  if (bottom >= 0) {
    moves.push([bottom, newCol]);
  }
  if (top <= 7) {
    moves.push([top, newCol]);
  }

  return moves;
}
function movesRight(arr) {
  let moves = [];

  let row = arr[0];
  let col = arr[1];

  let newCol = col + 2;
  if (newCol > 7) {
    return [];
  }

  let top = row + 1;
  let bottom = row - 1;

  if (bottom >= 0) {
    moves.push([bottom, newCol]);
  }
  if (top <= 7) {
    moves.push([top, newCol]);
  }

  return moves;
}

function allMoves(arr) {
  return [].concat(
    movesUp(arr)
      .concat(movesDown(arr))
      .concat(movesLeft(arr))
      .concat(movesRight(arr))
  );
}

export default allMoves;