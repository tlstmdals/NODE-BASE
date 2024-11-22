const arr = [1,2,3,4,5]
// 콜백함수가 하는 일?
//객체 (또는 배열)에서 요소를 하나 꺼낸 다음
//매개변수로 그 요소를 전달하여 호출되는 콜백함수
// 첫번째는 데이터 두번째는 인덱스 마지막 매개변수는 통째로 넣어줌
arr.forEach((a,b,c)=>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})
//Map 과 foreach의 만남
let map = new Map
map.set(7,"seven")
map.set(9,"nine")
map.set(8,"eight")

map.forEach((a,b,c)=>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})