
exports.min = function min (array) {
  if (array) {
    if (array.length === 0) {
      return 0;
    } else {
      return Math.min (...array);
    }
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array) {
    if (array.length === 0) {
      return 0;
    } else {
      return Math.max(...array)
    }
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array) {
    if (array.length === 0) {
      return 0;
    } else {
      return array.reduce((a,b) => a + b, 0) / array.length;
    }
  } else {
    return 0;
  }
}
