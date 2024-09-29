function getNeighbors(row, col, matrix) {

  // Check top = [row - 1, col]
  // Check top right = [row - 1, col + 1]
  // Check right = [row, col + 1]
  // Check bottom right = [row + 1, col + 1]
  // Check bottom = [row + 1, col]
  // Check bottom left = [row + 1, col - 1]
  // Check left = [row, col - 1]
  // Check top left = [row - 1, col - 1]
  // Return neighbors

  let neighbors = [];

  if (row - 1 >= 0){
    if (matrix[row - 1][col] === 1) neighbors.push([row - 1, col]); //top

    if (col + 1 < matrix[row - 1].length && matrix[row - 1][col + 1] === 1) neighbors.push([row - 1, col + 1]);//top right
  }

  if (col + 1 < matrix[row].length){
    if (matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);//right

    if (row + 1 < matrix.length && matrix[row + 1][col + 1] === 1) neighbors.push([row + 1, col + 1]);//bottom right
  }

  if (row + 1 < matrix.length){
    if (matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);//bottom

    if (col - 1 >= 0 && matrix[row + 1][col - 1] === 1) neighbors.push([row + 1, col - 1]);//bottom left
  }

  if (col - 1 >= 0){
    if (matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);//left

    if (row - 1 >= 0 && matrix[row - 1][col - 1] === 1) neighbors.push([row - 1, col - 1]);//top left
  }

  return neighbors.sort()
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
  let visited = new Set();
  let count = 0;

  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){
      if (matrix[row][col] === 1 && !visited.has([row, col].toString())){
        let stack = [[row, col]];
        visited.add([row, col].toString());
        count++;

        while (stack.length > 0){
          let currentNode = stack.pop();
          let neighborsList = getNeighbors(currentNode[0], currentNode[1], matrix);


          for (const neighbor of neighborsList){
            if (!visited.has(neighbor.toString())){
              stack.push(neighbor);
              visited.add(neighbor.toString());
            }
          }
        }
      }

    }
  }

  return count;
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

const matrix2 = [
                    [1,1,1,0,1],
                    [0,0,0,0,1],
                    [1,0,0,1,0],
                ]

console.log(countIslands(matrix)) // 2
console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
