// Print out different name that pass through the paramameter.

// bob, anna and susy
// Store in array.
const names = ["bob", "anna", "susy"];

function greet(name) {
  // for (let i = 0; i < 3; i++) {
  //   console.log(names[i]);
  // }

  console.log("hello " + name);
}

greet("bobb");
greet("annas");
greet("sushi");
for (let i = 0; i < names.length; i++) {
  greet(names[i]);
}
