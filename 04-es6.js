// ES6


// combined = [...arr1, ...arr2];

// Class
class Shape {
    // static 영역은 -> 인스턴스화 하지않아도 사용가능
    static create(x,y){
        return new Shape(x,y)
    }
    constructor(x,y){
        this.name = "Shape";
        this.move(x,y);
    }
    // 메서드들
    move(x,y){
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}
let s = new Shape(2,2);
console.log(s,s.x,s.y,s.area());

// 상속 extends : 부모로부터 속성들을 물려받는다
// this : 자기자신 , super : 부모를지칭
class Circle extends Shape{
    constructor(x,y,radius){
        super(x,y);
        this.radius=radius;
    }
    area(){
        if (this.radius === 0 ){
            return super.area(); 
        }
        return this.radius ** 2 * Math.PI;
    }
};
let c = new Circle(20,30,10);
console.log(c, c.x, c.y, c.radius, c.area());