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

// Array 주요 메서드 
// splice 원하는 위치의 요소를 삭제하거나 추가하는 메서드
let fruits = ['banana','apple','kiwi','mango'];
console.log(fruits);
// 인수가 1개 - 해당 인덱스부터 끝까지 추출후 삭제
fruits.splice(2);
console.log(fruits);
// 인수가 2개 - 시작 인덱스 , 갯수 -> 추출후 삭제
fruits = ['banana','apple','kiwi','mango'];
fruits.splice(0,2);
console.log(fruits);
// 인수가 3개 - 시작 인덱스 , 갯수 , 추가할 아이템들
fruits = ['banana','apple','kiwi','mango'];
fruits.splice(2,1,'melon','cherry');
console.log(fruits);
// reverse, sort, slice (마지막 인덱스 -1)
fruits = ['banana','apple','kiwi','mango'];
let slices = fruits.slice(1,3);
console.log(slices); // apple, kiwi

// split - string 특정 구분자 기준으로 분리후 배열로 반환
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");
console.log(chunks);

// Date 
// Date(year, month, day) / Date(yyyy,mm,dd,hh,mi,ss)
// Date(milliseconds)
let now = new Date();
console.log(now);

let past = new Date(1999,11,31);
console.log(past);
// getMonth, getYear , getDate
console.log("month: ", now.getMonth() + 1);