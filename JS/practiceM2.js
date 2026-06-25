// square
let square = (num)=>{
    return num*num
}

// cube
let cube = (num)=>{
    return num*num*num
}

//console.log(square(4));
//console.log(cube(2));

// default parameters
const greet = (name="Guest")=>{
    return `Hello ${name}`
}
//onsole.log(greet('Shivam'));

// Closure = Inner function remembers variables of its outer function even after outer function has finished execution.

function multiplier(x){
    return function doubleX(num){
        return num*x
    }
}

const a = multiplier(2)
//console.log(a(10));


// Create a function makeAdder(x) that returns another function.
// Returned function should add x to its argument.

const makeAdder = (x)=>{
    return (num)=>{
        return num+x
    }
}

const b = makeAdder(10);
//console.log(b(5));

function applyOperation(a,b,operation){
    return operation(a,b)
}

let add = (a,b)=>a+b
let sub = (a,b)=>a-b

//console.log(applyOperation(10,5,add));

//console.log(applyOperation(10,5,(a,b)=>a*b));

// Create a function createCounter()
// It should return a function. Every time returned function is called, count 1 se increase ho aur return ho.
function createCounter(){
    let count=0
    return function(){
        count = count+1
        return count
    }
}
let counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

let obj = {
    id:1234,
    name:"Shivam Kumar Mehta",
    section:"AI&DS",
    phone:9661283747
}
//console.log(obj.name);

const car = {
    brand:"Tata",
    model:"Safari"
}
// car.year = 2022
// console.log(car.year);
// console.log(car);
// console.log(car["model"]);

// car["model"] = "Harrier"
// console.log(car);
// delete(car.brand)
// console.log(car);




let person = {
    name:"Shivam",
    age:20,
    introduce(){
        return `Hi, I am ${this.name} and I am ${this.age} years old.`
    }
}

//console.log(person.introduce());

let user = {
    name:"Shivam",
    "favourite Singer":"Diljit Dosanjh"
}
//console.log(user["favourite Singer"]);

const scores = {
  math: 90,
  science: 85,
  english: 88,
};

// for(keys in scores){
//     console.log(scores[keys]);   
// }

const student = {
  name: "Shivam",
  marks: {
    math: 90,
    science: 85,
    english: 88,
  },
};

// for(let key in student.marks){
//     console.log(student.marks[key]);
// }

const laptop = {
  brand: "Apple",
  ram: "24GB",
  storage: "512GB",
};

let key = "ram"
//console.log(laptop[key]);

const book = {
    title:"Atomic Habbits",
    author:"James Clear",
    year:2018,
    getSummary(){
        return `${this.title} by ${this.author}, published in ${this.year}`
    }
}
//console.log(book.getSummary());

// change city to Mumbai and print full object
const employee = {
  name: "Ravi",
  address: {
    city: "Bangalore",
    pincode: 560001,
  },
};

employee.address.city =  "Mumbai"

// console.log(employee.address.city);
// console.log(employee);

const nums = [1,2,3,4,5]
nums.forEach((x)=>{
    x = x*2
    //console.log(x);
})
//console.log(nums);

// for mutating array
nums.forEach((x,i)=>{
    nums[i]=x*2;
})
//console.log(nums);

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((x)=>{
    return x*x
})
//console.log(newArr);

const c = [1, 2, 3, 4, 5, 6];
const d = c.filter((x)=>x%2===0)
//console.log(d);

// Use find() te get the numbers greater than 10
const e = [5, 12, 8, 130, 44];
const f = e.find((x)=>x>10)
//console.log(f);

const users = [
  { name: "Shivam", age: 20 },
  { name: "Aman", age: 22 },
  { name: "Riya", age: 19 },
];

const g = users.map((x)=>x.name)
//console.log(g);

const h = users.filter((x)=>{
    return x.age>=20
})
//console.log(h);

const i = [1, 2, 3, 4, 5];

const sum = i.reduce((acc,x)=>{
    return acc+x
},0)
//console.log(sum);

const j = [10, 20, 30, 40];
const product = j.reduce((acc,x)=>{
    return acc*x
},1)

//console.log(product);

const k = [12, 45, 7, 89, 23];
const maxi = k.reduce((acc,x)=>{
    return acc<x?x:acc;
},-Infinity)

//console.log(maxi);

const letters = ["a", "b", "a", "c", "b", "a"];
const freq = letters.reduce((acc,x)=>{
    if(acc[x]) acc[x]++
    else acc[x] = 1
    return acc
},{})
//console.log(freq);

const cart = [
  { item: "Phone", price: 50000 },
  { item: "Charger", price: 2000 },
  { item: "Case", price: 1000 },
];

const price = cart.reduce((acc,x)=>{
    acc = acc + x.price
    return acc
},0)

//console.log(price);

// from here
const students = [
  { name: "Shivam", marks: 80, passed: true },
  { name: "Aman", marks: 45, passed: false },
  { name: "Riya", marks: 90, passed: true },
  { name: "Kunal", marks: 70, passed: true },
];

const totalMarks = students.filter((x)=>{
    return x.passed===true
}).reduce((acc,x)=>{
    acc = acc+x.marks
    return acc
},0)
//console.log(totalMarks);

const userX = [
  { name: "Shivam", age: 20 },
  { name: "Aman", age: 17 },
  { name: "Riya", age: 22 },
  { name: "Karan", age: 15 },
];

const adults = userX.filter((x)=>{
    return x.age>=18
}).reduce((acc,x)=>{
    acc.push(x.name)
    return acc
},[])
//console.log(adults);

const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];
// find the name of first expensive market
const exp = products.reduce((acc,x)=>{
    if(x.price>acc.price){
        acc.price = x.price
        acc.name = x.name
    }
    return acc
})
//console.log(exp.name);

const words = ["js", "cpp", "js", "python", "cpp", "js"];
const freQ = words.reduce((acc,x)=>{
    if(acc[x]) acc[x]++
    else acc[x]=1
    return acc
},{})

console.log(freQ);
