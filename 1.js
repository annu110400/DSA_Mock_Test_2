function mysqrt(x) {
  if (x < 2) {
    return x;
  }

  let low = 2;
  let high = Math.floor(x / 2);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 1;
}

let x = 4;
console.log(mysqrt(x));

x = 8;
console.log(mysqrt(x));