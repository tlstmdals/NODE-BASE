if(true){
    var num1 =7;
    const num2 = 3; // 블록 {} 스코프 ,const 초기화 이후 값 못 바꾼다.
    let num3 = 5; // 블록 {} 스코프 -> 선언된 {} 밖에서 사용 불가,let 초기화 이후 값 바꿀 수 있다
    num3 =21;
    console.log(num1 + " X " + num2 + " = " + num3)
    console.log(`${num1} X ${num2} = ${num3}`) // 템플릿 문자열
}

console.log(num1)
// console.log(num2)
// console.log(num3)
