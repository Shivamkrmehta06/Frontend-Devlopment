// console.log("Shivam")
// /* let counter = 100;
// counter = 200;
// counter = 300;
// console.log(counter); */
// let age = 32;
// age = age + 1;
// console.log(age);


// let height = 180;
// {
// let height = 200;
// height = height + 10;
// console.log(height)
// }
//  console.log(height);

// let x = 10/100
// {
//     console.log(typeof x);
    
// }

// let a = 0x21
// console.log(a);

// console.log(100/0);

// let x = 2n+10
// console.log(x);

// console.log("Alice"+10);

// let str = "Shivam"
// console.log(str.length);

// console.log("abcdefg".slice(2,4));

// let s = Number("1001")
// console.log(typeof s);

// let dog={
//     age:5,
//     name:"Tommy"
// }
// console.log(dog.age);
// dog.age = 10
// console.log(dog.age);

// let arr = [1,2,3,4]
// console.log(arr.reverse())

// let n = 2 * 3 ** 3 - 1;
// console.log(n);


// let x = 100;
// if (x < 100)
//     x = 20;
// console.log(x)

// let a = 10;
// do {
//     console.log(a--);
// } while (a > 3);


// let show = function () {
//      console.log("test");
// }
// setTimeout(show, 2000);

// "let x = 10";
// console.log(x);



// for(let a=1; a<10; a+=2) {
//     console.log(a);
//};


// let a = "5"
// let b = 2
// console.log(a+b);
// console.log(typeof a-b);


// console.log(null>0);
// console.log(null==0)
// console.log(null>=0)

// let user = {
//     name:"Shivam",
//     age:20
// }
// user.age = 21
// console.log(user.age)

// console.log(a);
// const a = 10

// let i = 0;
// while(i<=1000){
//     console.log(i);
//     i++;
// }

// let car = {
//   make: 'Dodge',
//   model:'Dakota'
// }
// // Insert line of code here.
// car.color="red"
// console.log(`${car.make} ${car.model}, color: ${car.color}`);

// let key = 'x'
// let point = {
//     x: 100,
//     y: 200
// }
// // Insert line of code here.
//console.log(point[key]);


// let user = {
//     name: "Ian",
//     age: 44
// }

// for(const [key,value] of Object.entries(user)) console.log(key,value);
// //Object.keys(user).forEach(key=>console.log(user[key]))
// Object.keys(user).forEach(key=>console.log(user))

// let user1 = {
//     name: 'Alice'
// }
// let user2 = {
//     name: 'Alice'
// }
// console.log(user1.name==user2.name)

// let user1 = {
//     name: 'Ian',
//     age: 44
// }
// let user2 = user1;
// user2.age = 40;
// console.log(`${user2.name} ${user1.age}`);


// let car1 = {
//     make: 'Dodge',
//     model: 'Viper'
// }
// let car2 = Object.assign({},car1,{model:"Nexon",transmission:"Manual",color:"Purple"
// });
// car1.color = 'green';
// console.log(`${car2.make} ${car2.model} ${car2.transmission} ${car2.color}`);

// let user={
//     name:"username",
//     email:"username@gmail.com"
// }

// user = Object.assign({},user,{location:"Mehta Tola",Occupation:"Student"})
// console.log(user);


// let car1 = {
//     make: 'Dodge',
//     model: 'Viper'
// }
// let car2 = { ...car1, model:'RAM', color: 'red'};
// car1.color = 'green';
// console.log(`${car2.make} ${car2.model} ${car2.color}`);


// let car = { 
//     make: 'Dodge',
//     model: 'Viper'
// }
// // Insert line of code here.
// delete car.model; 
// Object.freeze(car)
// car.make = 'Toyota'; 
// car.color = 'red'; 
// console.log(`${car.make} ${car.model} ${car.color}`); 


let Car = function(make, model) {
    // this.make = make;
    // this.model = model;
    return {make,model}
}
let car = Car("Tata","Nexon")
console.log(`${car.make} ${car.model}`);
