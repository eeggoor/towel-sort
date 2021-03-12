module.exports = function towelSort (matrix) {
  	return Array.isArray(matrix) ? matrix.reduce((acc, cur, i) => i % 2 === 0 ? [...acc, ...cur] : [...acc, ...cur.reverse()], []) : [];
}
