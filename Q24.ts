//Q2More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array4:

let apple = "apple";
let upperCase = "APPLE";
let a = 15;
let b = 10;
let fruits = ["Mango, Orangr, Papaya"]


//Test using equality;
console.log("/n Is apple is equal to apple?");
console.log(apple == "apple");


//test using inequality;

console.log("/n IS apple is not equal to apple?");
console.log(apple != "apple");

//test using lowercase function;

console.log("/n Is APPLE is equal to apple after converting to lowercase? ");
console.log(upperCase.toLocaleLowerCase() == "apple")


console.log("/n Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCase.toLocaleLowerCase() != "apple");


//Numerical Test;

//Equality;
console.log("/n Is a is equal to 15?");
console.log(a == 15);

//Inequality;
console.log("/n Is b is equal not to 10?");
console.log(b != 10);



//Test GreaterThan;
console.log("/n Is a is greater than b?");
console.log(a > b);

//Test LessThan;
console.log("/n Is a is less than b?");
console.log(a < b);


//Test Greaterthan or Equal to;
console.log("/n Is a is greaterthan or equal to 15?");
console.log(a >= 15);

//Test lessthan or equal to;
console.log("/n Is b is less than 5 or equal to 10?");
console.log(b <= 5);



//test using "And" && "or" || operator;

//using &&
console.log("Is a is greater than 10 and equal to 15?");
console.log(a > 10 && a == 15);


console.log("Is a is greater than 20 and unequal to 15?");
console.log(a > 20 && a != 15);

//Using ||
console.log("Is b is greater than 5 or equal to 15?");
console.log(b > 5 || b == 15);

console.log("/n Is 20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);


//Test whether an item is in a array;
console.log("Is Orange is includes in my fruit array?");
console.log(fruits.includes("orange"));

//not include;
console.log("Is Orange is  not includes in my fruit array?");
console.log(!fruits.includes("Orange"));

























