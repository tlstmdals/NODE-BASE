// map함수(메서드) vs foreach 차이
const arr = [1,2,3,4,5]
const foreacharr = arr.forEach((a,b,c)=>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
    return a * 2
})
console.log(arr)
const maparr = arr.map((a,b,c)=>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
    return a * 2
})
console.log(arr)
console.log(`foreach로 return하면 ${foreacharr},
            map으로 return 하면 ${maparr}`)