"use strict";
//Q36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, printmessage) {
    console.log(` You Selected ${size} size shirt with ${printmessage} print on shirt`);
}
make_shirt("Medium", "Papa is my favourite Hero");
make_shirt("Small", "I Love Papa");
