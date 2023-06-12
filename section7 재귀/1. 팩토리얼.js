function forFactorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function recursionFactorial(num) {
  if (num === 1) return 1;
  return num * recursionFactorial(num - 1);
}
