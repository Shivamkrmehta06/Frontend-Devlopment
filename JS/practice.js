const arr = [1,2,3,4,5]
const arr2 = [6,7,8,9]
//const arr3 = arr.join("_")
//console.log(arr3);

// console.log(arr.slice(1,3));
// console.log(arr.splice(1,3));
// console.log(arr)

const jsUser={
    name:"Shivam",
    age:19,
    place:"Mehta Tola",
    email:"shivamkrmehta@outlook.com"
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser['email']);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const course = {
    courseName:"xyz",
    price:999,
    courseInstructor:"Shivam"
}
const {courseInstructor}=course
//console.log(courseInstructor);
const {courseInstructor:instructor}=course
//console.log(instructor);

function myFunc(...num){
    return num;
}

const addTwo=function(...num){
    return num+2;
}

const ax = addTwo(1,2)
//console.log(ax);

const greet = (name)=>`Good Morning,${name}`;

//console.log(greet("Shivam"))

// (function namaste(){
//     console.log("DB is Connected")
// })();

//(()=> console.log("DB is Connected"))();

let val1;
val1 = 5??10;
// console.log(val1);

const arr1 = [1,2,3,4,5];
// for(const num of arr1){
//     console.log(num);
// }

const mp=new Map();
mp.set('IN',"India")
mp.set('US',"United States of America")
mp.set('FR',"France")
//for(const key of mp) console.log(key);
// for(const [key,value] of mp){
//     console.log(key,'=>',value)
// }

const myObj={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"    
}

// for(const xyz in myObj){
//     console.log(`${xyz} -> ${myObj[xyz]}`);
// }

const coding = ["js","ruby","python","cpp"]
// coding.forEach(function(val){
//     console.log(val)
// })

//coding.forEach((val)=>console.log(val));

//coding.forEach((item,index,arr,x)=>console.log(item,index,arr,x));

const nums=[1,2,3,4,5,6,7,8,9]
const newNums=nums.filter((num)=>num>4);
const evenNum=nums.filter((num)=>num%2==0)
//console.log(evenNum);

const mew=nums.map((num)=>{return num+10})
//console.log(mew);

const chaining=nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
//console.log(chaining);

const myNums=[1,2,3]
const total=myNums.reduce(function(acc,currVal){
    console.log(`Accumulator: ${acc}\nCurrVal: ${currVal}`)
    return acc+currVal
},0)
console.log(total);
