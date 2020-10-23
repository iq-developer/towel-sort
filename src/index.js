module.exports = function towelSort (matrix) {
let result = [];

  if (matrix){
    for (let i = 0; i < matrix.length; i++) {

      if (i % 2){ //reverse order
        for (let j = matrix[i].length-1; j >= 0; j--) {
          result.push(matrix[i][j]);
        }
      } else { //direct order
        for (let k = 0; k < matrix[i].length; k++) {
          result.push(matrix[i][k]);
        }
      }

    }
  }
  return result;
}
