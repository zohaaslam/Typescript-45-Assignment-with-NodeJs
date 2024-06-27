"use strict";
//Q41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magicians_name = ["Herry Poter", "Jenny", "Mario"];
show_magicians(magicians_name);
