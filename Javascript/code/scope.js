// 참고: https://www.youtube.com/watch?v=IGnq35c6nP4

// * 1. 변수의 스코프
// 지역 스코프(Local Scope): Function Scope, Block Scope
/* 브라켓 내부는 Block Scope이다.
var 키워드로 선언된 변수는 Function Scope 이므로 코드블럭 내에서 선언되더라도
전역에서 접근 가능. */

var num = 10;

if (true) {
  console.log(num); // 10
  var num = 20;
  var block = 111;
  console.log(num); // 20
}
console.log(block); // 111

console.log(num); // 20

/*
var 키워드로 선언된 변수는 Function Scope 이므로 함수 내부에서 선언될 경우
외부에서 접근 불가능. (not defined)
*/

function test() {
  var num = 30;
  var blockNum = 1;
  console.log(num);
}
test(); // 30
console.log(num); // 20
// console.log(blockNum); // err: not defined

/*
 * var 키워드 사용을 지양해야 하는 이유
 * 1. 동일한 변수명으로 재선언이 가능하므로 의도치 않은 값의 변경이 생길 수 있음.
 * 2. 함수 스코프이므로 함수가 아닌 코드블럭 내에서 var 키워드로 선언된 값을 외부에서 접근이 가능.
 * 3.
 */

// * 2. 함수의 스코프
