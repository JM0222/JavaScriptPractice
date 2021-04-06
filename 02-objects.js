// 속성
// 프로퍼티 : 객체가 가진 데이터
// 메서드 : 객제가 가진 기능함수 

// 객체 생성방법1
const person = new Object();

person.name = "홍길동"
person.age = 32;

person.showInfo = function(){
    let message = `${this.name}, ${this.age}`;
    console.log(message);
}
console.log("person",person);

// 메서드 호출
person.showInfo();

// 객체 생성방법2 : JSON
// {} - >  객체 표기 , 속성들은 KEY:VALUE 쌍으로 기술
console.log("------------------------------------")
const person2 = {
    name: '장길산',
    age : 40,
    showInfo: function(){
        let message = `${this.name}, ${this.age}`;
        console.log(message);
    }

}
console.log("person2:",person2);
person2.showInfo();

// 객체 생성방법3 : 함수를 생성자 처럼 활용
console.log("-----------------------------------------")
const Member = function(name, position){
    this.name = name;
    this.position = position;
}
console.log(Member);
let m1 = new Member("강백호","pf");
let m2 = new Member("서태웅","sf");

console.log(m1, m2);

// 동적으로 메서드 추가 가능
m1.sayHi = function(){
    console.log(`${this.name},${this.position}`);
}
m1.sayHi();

//-----------------------------------------------------------------------
console.log("m1의 생성객체: ", m1.constructor); // m1을 생성한 생성 객체 확인
// 동일 객체는 prototype 이라는 공유 영역을 가지고 있다
// 이 객체를 이용 ,인스턴스화한 모든 인스턴스에 동일한 속성 공유 가능
console.log("Member 객체의 prototype 영역: ",Member.prototype);
Member.prototype.introduce = function(){
    console.log("name :" + this.name);
    console.log("position :" + this.position);
}
console.log(Member.prototype);
m1.introduce();
m2.introduce();

// prototype 영역과 동적 속성을 활용하면 기존 객체들에도 동적 속성 추가 가능
