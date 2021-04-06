function testForEach(){
    //배열의 개별 요소들을 한개씩 콜백 함수로 전달
    let source = ["banana","orange","apple","mango"];
    console.log("----------------forEach");
    source.forEach(item => {
        console.log("item:",item);
    })
    // 콜백함수에서 요소의 인덱스가 필요할 떄
    source.forEach((item,index) => {
    console.log(`${index + 1}번째 item: ${item}`);
    
    // 콜백에서 아이템, 인덱스 , 배열 자체가 필요할 떄
    // source.forEach((item, index, arr) =>{
    //     console.log(`${arr}의 ${index+1}번째 item: ${item}`);
    // })
});

}
testForEach();

//==================testFilter==================================
function testFilter() {
    console.log("--------filter");
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // source 배열 내에서 짝수만 추출
    let result = [];
    result = source.filter(item => item %2 == 0);
    console.log("짝수 필터링 : ", result);
}
testFilter();

function testMap(){
    console.log("--------------map");

    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // source 배열 내부의 모든 요소를 2배 할때
    // ES5 방식
    let multiply = [];

    multiply = source.map(item => item * 2);
    console.log("배열 변형(map): ", multiply);

}
testMap();

function testChain(){
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 원본 배열에서 짝수만 추출해서 2배
    let target = [];
    // filter - > map 
    target = source.filter(item => item % 2 == 0).map(item => item * 2);
    console.log("target: ", target);
}
testChain();