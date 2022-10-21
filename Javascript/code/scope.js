// 참고: https://www.youtube.com/watch?v=IGnq35c6nP4

// * 1. 변수의 스코프
// 지역 스코프(Local Scope): Function Scope, Block Scope
/* 브라켓 내부는 Block Scope이다.
var 키워드로 선언된 변수는 Function Scope 이므로 코드블럭 내에서 선언되더라도
전역에서 접근 가능. */

// * 1.1 코드블럭 내에서 var 키워드로 선언된 변수의 유효범위 - 전역

var num = 10;

if (true) {
  console.log(`var) 전역변수 num의 값: ${num}`); // 10
  var num = 20;
  var block = 111;
  console.log(`var) 동일한 변수명으로 코드블럭 내 재선언된 num의 값: ${num}`); // 20
}
console.log(
  `var) 코드블럭 내에서 선언된 변수를 외부에서 호출한 block의 값: ${block}`
); // 111

console.log(
  `var) 동일한 변수명으로 코드블럭 내 재선언된 num을 외부에서 호출한 값: ${num}`
); // 20

// * 1.2 코드블럭 내에서 let, const 키워드로 선언된 변수의 유효범위 - 코드블럭
if (true) {
  let block1 = 'let 키워드는 블록 스코프이다';
  const block2 = 'const 키워드는 블록 스코프이다';
  console.log(block1);
  return console.log(block2);
}

// * 1.3 함수 내부에서 var 키워드로 선언된 변수의 유효범위 - 함수 몸체 내부
/*
var 키워드로 선언된 변수는 Function Scope 이므로 함수 내부에서 선언될 경우
외부에서 접근 불가능. (not defined)
*/

function test() {
  var num = 30;
  var blockNum = 1; // 외부에서 접근할 수 없는 값. (var: 함수 스코프)
  console.log(`var) 함수 스코프로 함수 안에서 선언된 변수 num의 값: ${num}`);
}
test(); // 30
console.log(`var) 코드블럭 내에서 선언된 변수 num의 값: ${num}`); // 20
// console.log(blockNum); // err: not defined

function foo() {
  // 동일 스코프에서 동일한 변수명으로 중복 선언한 경우 의도치 않은 값의 재할당 발생.
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
foo();

// * 1.4 함수 내부에서 let, const 키워드로 선언된 변수의 유효범위 - 코드블럭
// let, const 키워드는 블럭 스코프이다. 따라서 함수 자신이 선언된 위치의 코드블럭 내에서만 유효하다.
function bar() {
  let block3 = '함수 내부에서 let으로 선언된 block3 변수';
  console.log(block3);
  if (true) {
    let block4 = '함수 내부의 if문 코드블럭 내에서 선언된 block4 변수';
  }
  console.log(block3);
  console.log(block4); // block4 is not defined
  return;
}
bar();

/*
 * var 키워드 사용을 지양해야 하는 이유
 * 1. 동일한 변수명으로 중복 선언이 가능하므로 하나의 값은 유일한 식별자에 연결하는 name binding이 불가능.
 * 2. 함수 스코프이므로 함수가 아닌 코드블럭 내에서 var 키워드로 선언된 값을 외부에서 접근 가능.
 * 3. 동일 스코프에서 동일한 변수명으로 중복 선언한 경우 의도치 않은 값의 재할당 발생.
 */

// * 2. 함수의 스코프
