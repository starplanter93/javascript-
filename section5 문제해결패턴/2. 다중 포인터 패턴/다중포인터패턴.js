/* 
정수를 요소로 갖는 정렬된 배열에서 합이 0이 되는 첫번째 쌍을 구하시오.
이때 이에 해당하는 쌍이 없으면 undefined를 리턴한다.
ex) input [-3,-2,-1,0,1,2,3] // [-3,3]
*/

function sumZero(sortedArr) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    if (sortedArr[left] + sortedArr[right] === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else if (sortedArr[left] + sortedArr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}
