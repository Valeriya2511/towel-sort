
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrNew = [];
    if (matrix === undefined) {
        arrNew.push([])
    } else {
        for (let i = 0; i < matrix.length; i++){
            if((i + 1) % 2 === 0) {
                matrix[i].reverse()
            }
            arrNew.push(matrix[i])
        }
    }
    return arrNew.flat()
}


