"use strict";
// //16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Hina", "Nisha", "Komal", "Hadiya", "Abrish"];
let cannotattend = "Komal";
let newGuest = "Ayzal";
guestArr[guestArr.indexOf(cannotattend)] = newGuest;
//guestArr.map((item) => {
// console.log(`Dear, ${item}, I found a bigger Dinner table`);
//})
let guestbegin = "Fatima";
guestArr.unshift(guestbegin);
//console.log(guestArr);
let middleGuest = "Jannat";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr);
let guest = "Mirha";
guestArr.push(guest);
//console.log(guestArr);
guestArr.map((item) => {
    console.log(`Dear, ${item} You are cordinally Invited to a Dinner`);
});
