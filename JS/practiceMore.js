// Write a function safeDivide(a, b) that divides two numbers but returns the string "Cannot divide by zero" if b is 0.
function safeDivide(a,b){
    if(b==0) return `Cannot divide by zero`
    else return a/b
}

// Write a function getConfig(value, fallback) that returns fallback ONLY when value is null or undefined — but keeps value if it's 0, false, or "". (Hint: which operator did we just learn that's perfect for this?)

function getConfig(value,fallback){
    let a = value??fallback
    return a
}
console.log(getConfig(null,"xyz"))

// Problem 3 (Medium)
// Write a function classify(num) that returns:

// "FizzBuzz" if divisible by both 3 and 5
// "Fizz" if divisible by 3 only
// "Buzz" if divisible by 5 only
// the number itself (as a string) otherwise

// Use it to print results for numbers 1 through 20.

function classify(num){
    if(num%5===0&&num%3===0) return "FizzBuzz"
    else if(num%3===0) return "Fizz"
    else if(num%5===0) return "Buzz"
    else return String(num)
}

console.log(classify(10));

// Problem 4 (Medium)
// Write a function gradeLetter(score) using a switch statement (not if/else) that returns a letter grade:

// 90+ → "A", 80–89 → "B", 70–79 → "C", below 70 → "F"

// (Note: switch normally checks exact matches, not ranges — figure out a trick to make ranges work with switch. This is a real interview question.)

function gradeLetter(score){
    switch (true) {
      case score >=90:
        return "A";
        break;
      case score >=80:
        return "B";
        break;
      case score >=70:
        return "C";
        break;
      default:
        return "F"
        break;
    }
}

console.log(gradeLetter(94))