/*
주어진 배열 arr에서, 연속된 n만큼의 요소의 합의 최댓값을 리턴하는 함수 maxSubarraySum을 작성하시오.
ex) 
[1,2,3,4,8,1,5], 2 // 10
[], 4 // null
*/

// naive solution
function maxSubarraySum_naive(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Sliding Window solution
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  for (let i = n; n < arr.length - n + 1; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
