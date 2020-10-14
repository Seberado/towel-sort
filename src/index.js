
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && matrix.length) {
    let matrixNew = [];
    let item = [];
    
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) { // если четный элемент матрицы, который надо достать и записать в новую
        matrixNew = matrixNew.concat(matrix[i]); 
      } else { // если нечетный элемент исходной матрицы, который надо перевернуть
        item = matrix[i].reverse();
        matrixNew = matrixNew.concat(item);
      };
    };
    return matrixNew;
  } else return [];
  
};
