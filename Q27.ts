//Q27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//version 1:
let aliencolor = "green";

if (aliencolor === "green") {
  console.log("Version 1: You shot down green alien you have earned 5 points");
} else if (aliencolor === "yellow") {
  console.log("You shot down yellow alien you have earned 10 points");
} else if (aliencolor === "red") {
  console.log("You shot down red alien you have earned 15 points");
}


//Version 2:
let aliencolor2 = "yellow";
if (aliencolor2 === "green") {
  console.log("You shot down green alien you have earned 5 points");
} else if (aliencolor2 === "yellow") {
  console.log("Version 2: You shot down yellow alien you have earned 10 points");
} else if (aliencolor2 === "red") {
  console.log("You shot down red alien you have earned 15 points");
}


//Version 3:

let aliencolor3 = "red";

if (aliencolor3 === "green") {
  console.log("Version 3: You shot down green alien you have earned 5 points");
} else if (aliencolor3 === "yellow") {
  console.log("You shot down yellow alien you have earned 10 points");
} else if (aliencolor3 === "red") {
  console.log("Version 3: You shot down red alien you have earned 15 points");
}
