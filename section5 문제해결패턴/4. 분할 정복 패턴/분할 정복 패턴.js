/*
정렬된 배열 arr에서 val을 찾고 그 인덱스를 리턴하는 함수 search를 작성하시오.
만약 val이 없다면 -1을 리턴하시오.
*/

// naive solution(선형 구조 탐색)
function search_naive(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
    return -1;
  }
}

// 분할 정복 패턴(이진 분할 탐색)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }

    return -1;
  }
}
