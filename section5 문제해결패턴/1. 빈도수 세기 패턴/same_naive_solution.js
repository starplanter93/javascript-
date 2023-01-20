/* 
서로 다른 요소를 가진 두 배열이 있다.
첫 번째 배열의 요소의 제곱을 한 값이 모두 두 번째 배열의 요소라면 true를, 아니라면 false를 리턴하는 함수 same을 만드시오.
단, 각각 배열의 요소들은 일대일 대응 되어야 한다.
ex) same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
