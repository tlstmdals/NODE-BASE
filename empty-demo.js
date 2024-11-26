const obj1 = {}
const obj2 = { msg : "안 빔"}
const num = 1
const str = "one"
const str2 = "" // 문자열도 객체입니다

console.log(isEmpty(obj1)) // length === 0
console.log(isEmpty(obj2)) // length === 1

// console.log(isEmpty(num))
console.log(isEmpty(str))
console.log(isEmpty(str2))

function isEmpty(obj){
    if(obj.constructor === Object) // 객체인지 파별
    if(Object.keys(obj).length === 0){
        return true
    }else{
        return false
    }
}