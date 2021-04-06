// var , let , const 
var testVar = 2021;  // ES6이전 변수 할당 키워드

let testLet = "let"; // 변경 가능

const testConst = "const" // 변경 불가능 - 상수

console.log(testVar, testLet, testConst);

// JavaScript 의 숫자 
//      산술연산이가능

let n1 = 5; // Literal : 소스코드에 직접 입력된 값
let n2 = Number(5); // Number 타입함수를 이용한 생성

console.log(n1, n2);
console.log(typeof n1, typeof n2);
// is Nan 
console.log(isNaN(n1));

// String 문자열 추출 및 검색
// charAt(index)  : 특정 인덱스의 문자를 추출
// substr(from, length) : 문자열내의 from 부터 lengh길이만큼 추출
// substring(from , end): 문자열내의 from 부터 end 인덱스까지의 문자열출

const s = "THIS IS JAVASCRIPT"
console.log(s.charAt(8)); // 8번인덱스 추출
console.log(s[8]); // 8번인덱스 추출
console.log(s.substr(1, 3)); // 1부터 5개 추출
console.log(s.substring(1, 3)); // 1부터 5번까지 추출

// replace , trim , indexOf .....

// ES6방식
temp = 20;
message = `현재 온도는
              ${temp}입니다`; 
console.log(message);

// 선언은 했으나 할당되지 않은 변수 -> undefined 
let v1; // undefined
let v2 = undefined;