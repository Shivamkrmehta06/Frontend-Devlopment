/* 
function applyToArray(arr, callback) {
    // Your code here
}

const nums = [1, 2, 3, 4];

const doubled = applyToArray(nums, (x) => x * 2);
console.log(doubled);
// [2, 4, 6, 8]

const squared = applyToArray(nums, (x) => x * x);
console.log(squared);
// [1, 4, 9, 16]
*/
let twice = (x) => 2 * x;
let square = (x) => x * x;
function applyToArray(arr, callback) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let x = callback(arr[i]);
    ans.push(x);
  }
  return ans;
}
// const nums = [1, 2, 3, 4];
// const doubled = applyToArray(nums, twice);
// console.log(doubled);
// const squared = applyToArray(nums, square);
// console.log(squared);

// manual implementation of filter

function applyFilter(arr, callback) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

// const nums = [1, 2, 3, 4, 5, 6];
// const even = applyFilter(nums, (x) => x % 2 === 0);
// console.log(even);

// Destructuring

// const user = {
//   name: "Shivam",
//   age: 20,
// };

// const { name, age } = user;
// //console.log(age);

const student = {
  name: "Shivam",
  age: 20,
  phone: 9661283747,
};
// console.log(student.name);
// console.log(student.age);
// console.log(student.phone);

const { name, phone } = student;

// console.log("\nDestructuring\n");

// console.log(name);
// console.log(age);
// console.log(phone);

// Array Destructuring

const colors = ["Red", "Blue", "Green"];

// const [first,second] = colors

// console.log(first);
// console.log(second);

// const a = [1,2,3,4,5]
// const [first,,third,,fifth] = a
// console.log(`${first}\n${fifth}\n${third}`);

const mica = {
  user: "Lao Ken",
  location: "Tokyo",
  language: "JavaScript",
};

// const {user:username,location,language="python"} = mica // default language is python, if there is no language defined there in mica
// console.log(language);
// console.log(username);
// console.log(mica.username);

const b = [1, 2, 3, 4, 5];
const c = b;
// console.log(c);
//both variables points to the same array
b.push(7);
// console.log(b);
// console.log(c);
// c.push("Shivam")
// console.log(b);
// console.log(c);

const d = [1, 2, 3, 4, 5];
const e = [...d]; // ... this is called spread in JS
// console.log("\n\tInitial Array\n");
// console.log(d);
// console.log(e);
// console.log("\n\tAfter updating the values\n");
// d.push("Shivam")
// console.log(d);
// console.log(e);

const users = ["Ram", "Krishna"];
const newUsers = [...users, "Krishna"];
//console.log(newUsers);

// ... this basically means take out each element one by one and place it here.

// merging the arrays

const frontend = ["HTML", "CSS", "React"];
const backend = ["Node", "Express", "Mongo"];

const fullStack = frontend.concat(backend); // merging array using .concat function
//console.log(fullStack);

//mergin an array witb spread operator
const fullstack = [...frontend, ...backend];
//console.log(fullstack);

const ila = {
  name: "Kilo",
  age: 24,
  location: "xyz",
};

// const lila = ila
// console.log("\n\tBefore Updating\n");
// console.log(ila);
// console.log(lila);
// console.log("\n\tAfter Updating\n");
// ila.name = "Cola"
// console.log(ila);
// console.log(lila);

const lila = {
  ...ila,
  location: "Mumbai",
};
// console.log("\n\tBefore Updating\n");
// console.log(ila);
// console.log(lila);
// console.log("\n\tAfter Updating\n");
// ila.name = "Cola"
// console.log(ila);
// console.log(lila);

// rest operator(...) -  it looks similar to spread but rest packs the things while spread unpacks

function add(...nums) {
  return nums.reduce((acc, x) => {
    return acc + x;
  }, 0);
}

// console.log(add(1,2,3));

// Optional Chaining

const fika = {
  user: "Hitesh",
  age: 40,
  location: "Jaipur",
  address: {
    city: "Jaipur",
    street: "Near Hawa Mahal",
  },
};

// console.log(fika.address?.street);

/* Hoisting 
Declaration	    Memory Phase    Before Initialization
var	undefined	Can access →        undefined
let	               Exists	❌     ReferenceError
const	           Exists	❌     ReferenceError
Function Declaration	Entire function	✅ Callable
Function Expression (var f = function(){})	undefined	❌ TypeError
*/

/* 
Think of a Promise as...

A receipt.

Imagine you order an iPhone.

Apple gives you a receipt.

That receipt says:

"Your order is being processed."

You don't have the phone yet.

But you have proof that you'll either receive it or we'll tell you why you didn't.

That's literally what a Promise is.
*/

/* 
Promise has three states
-> Pending
-> fulfilled
-> rejected
*/

// let's play with promise

const pro = new Promise((resolve, reject) => {
  const restStatus = true;
  if (restStatus) {
    resolve("Your order will be delivered soon!");
  } else {
    reject("Sorry, we are unable to process the order!");
  }
});

pro
  .then((message) => {
    //console.log(message);
  })
  .catch((error) => {
    //console.log(error);
  });

/* 
Since the Promise is already fulfilled, JavaScript says:

"Great! I'll schedule this .then() callback."

But it doesn't put it on the Call Stack.

Instead, it goes into a special queue called the Microtask Queue.
*/

/* 
                Event Loop
                     |
        --------------------------
        |                        |
Microtask Queue          Callback Queue
(Promises)               (setTimeout)

The Event Loop always checks:

✅ Microtask Queue first
✅ Callback Queue second

Call Stack
      ↓
Microtask Queue (Promises)
      ↓
Callback Queue (setTimeout)

Whenever a callback finishes, JavaScript immediately empties the Microtask Queue before picking another callback.
*/

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Shivam");
    }, 2000);
  });
}

const user = getUser();
user
  .then((message) => {
    //console.log(message);
  })
  .catch((error) => {
    //console.log(error);
  });

// An async function ALWAYS returns a Promise.

async function greet() {
  return "Hello";
}
const result = greet();
//console.log(result);

// *VVI - the below two functions are same
async function me(){
    return `Hello`
}
function me2(){
    return Promise.resolve("Hello")
}
const ans = me2()
console.log(ans);

// await pauses only the current async function, not the entire JavaScript engine.