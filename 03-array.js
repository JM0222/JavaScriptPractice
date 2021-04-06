// 배열의 생성방법 1.Array 객체이용

const v1 = new Array(10); // 10개짜리 배열
const v2 = new Array(); // 빈 배열
const v3 = new Array(1, "JavaScript", true); // 어떤 객체든 다 들어감

// 배열의 생성 방법 2. [] 리터럴 
const v4 = []; // 빈 배열 
const colors  = ['red', 'green', 'blue' , 'yellow'];

// 배열의 타입 체크
console.log(typeof v4, typeof colors);
// 배열 체크
console.log(Array.isArray(v4));

//배열을 기본값으로 채우기 .fill()
const v5 = new Array(10).fill(1); // 10개 배열 생성후 1로 채우기


// 내장객체 Array [push pop] [shift] stack, queue처럼 이용가능
let num = [1,2,3,4,5];
console.log(num);
num.push(6)
console.log(num);
num.pop()
console.log(num);
// ============================================================
num.shift() // 0번인덱스 추출후 삭제 
console.log(num);

