// This function calculates the median of an array of numbers.
// We clone the array with [...numbers] 
// before sorting to avoid mutating the original input.


function calculateMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

module.exports = calculateMedian;


