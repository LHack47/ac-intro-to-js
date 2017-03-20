// ===============================================================
// EXERCISE 1: Objects

var rose = {
  name: "Rose Smith",
  age: 36,
  gender: "female",
  programmer: true
}

// STEP 1: The "rose" object describes a person -- the "you" object below should
// have keys and values corresponding to aspects of you. Add keys and values like those seen in the "rose" object to the "you" object.

var you = { 
  // your code here
}

console.log("Your object representation is:", you);

// STEP 2: Change the value of your "name" key in the "you" object above to be an object with first, last, middle, etc. keys.
// e.g. "Rose Smith" -> {first: "Rose", last: "Smith"}

// STEP 3: Access your first, and last names with dot notation 
// to complete the fullName variable. Hint: You can add a space between two strings with: 
// "Rose" + " " + "Smith"

// CHANGE THE "???" FOR STEP 3
var fullName = "???"

// NOTE: Uncomment the below line (remove the // from the front) to check your result
// console.log("Your full name is:", fullName);

// STEP 4: Copy the 'you' object and paste it below the 'rose' object below. Add three more key-value pairs to the "you" object that are meaningful to you.
// Example:

rose = {
  name: "Rose Smith",
  age: 36,
  gender: "female",
  programmer: true,
  hasCat: true, // 1
  favoriteCaffeinatedBeverage: "tea", // 2
  favoriteAuthor: "Lily King" // 3
}

// ===============================================================
// EXERCISE 2: All the Data!

rose = {
  name: {
    first: "Rose",
    last: "Smith"
  },
  age: 36,
  gender: "female",
  programmer: true,
  favoriteTVShows: ["Fargo", "Breaking Bad", "Battlestar Galactica"],
  pets: ["Pal"]
}

// STEP 1: Using the object you created in the last exercise, add two key-value pairs
// that contain arrays, like seen above. Some ideas include: favorite tv shows, favorite movies,
// pets, friends, favorite bands/musicians, hobbies.
// (NOTE: you'll want to just change the original object)

// STEP 2: Does it make sense to represent any the values in the arrays you created as objects?
// For instance, a pet named "Pal" in the "pets" key of "rose" would be better represented as
// {type: "cat", name: "Pal", age: 3, biochipped: true, color: "orange"} instead of just a name.
// Update at least one of your arrays to contain objects.
// (NOTE: you'll want to just change the original object)

// ===============================================================
// EXERCISE 3: Basic Functions

// "x" is a parameter -- it's just a placeholder for a value
function square(x) {
  return x * x; // we return the result of x * x
}

var num = 7; // the number to square

// STEP 0: Remove the // from the below line
// console.log("The square of " + num + " is:", square(num));

// STEP 1: Change the value of "num" to a few different numbers. What happens? Why? 

// STEP 2: Complete the following function "cube" by finishing its return statement.
// (hint: use "square" for reference; the cube of 3 is 3 * 3 * 3, which is 27):

function cube(x) {
  return // your code here
}

// (NOTE: remove // -- from the below line to test)
// console.log("Cube of 3 should be 27. Your result:", cube(3));

// STEP 3: Complete the function "greet" that "greets" its argument. For instance, 
// greet("Rose") => "Hello, Rose!"
// greet("You") => "Hello, You!"
// Remember: "the " + "quick" => "the quick"

function greet(name) {
  return // your code here
}

// (NOTE: remove // -- from the below line to test)
// console.log("The result should be Hello, You!", greet("You"))

// BONUS: Can you use greet with the "you" object to greet your full name?

// ===============================================================
// EXERCISE 4: Functions with Multiple Arguments

// STEP 1: The function below, "makeName", should take a firstName and lastName as
// arguments, and return the firstName and lastName separated by a space:
// e.g. makeName("Rose", "Smith") => "Rose Smith"

// Fill in the missing arguments and function body:

function makeName() { // enter the arguments between the parenthesis
  return // what should be returned?
}

// (NOTE :remove // -- from the below line to test)
// console.log("Should be Rose Smith:", makeName("Rose", "Smith"));

// STEP 2: The "average" of two numbers is their sum divided by two. Finish the function 
// "average" below.

function average() { // fill in the arguments
  return // what should be returned?
}

// (NOTE: remove // -- from the below line to test)
// console.log("Should be 6:", average(3, 9));

// ===============================================================
// EXERCISE 5: Functions on Data Structures

var animals = ["monkey", "giraffe", "zebra", "rhino", "hippo"];

// STEP 1: Write a function called "first" should take an array as an argument
// (you can call it "arr") and return the first element.

// (remove // -- from the below lines to test)
//console.log("The first animal should be Monkey:", first(animals));
//console.log("The first number should be 15:", first([15, 5, 23, 30]));

// STEP 2: The function "probablyHipster" takes a person object as an argument and returns
// true if that person is probably a hipster, and false otherwise. READ the 
// "probablyHipster" function and get an understanding of how it works.

function probablyHipster(person) {
  var pbr = person.favoriteBeer === "PBR";
  var flannelOrFixie = person.wearsFlannel === true || person.hasFixie === true;
  var hipsterAgeRange = person.age > 18 && person.age <= 34;
  // If pbr is true AND flannelOrFixie is true AND hipsterAgeRange is true, this person
  // is probably a hipster.
  return pbr && flannelOrFixie && hipsterAgeRange;
}

// NEXT, Based on the definition above, add keys and values to the below "person" object
// to make probablyHipster(person) return true.
var person = {
  // your code here
}

// (NOTE: remove // -- from the below lines to test)
// console.log("Is Hipster?", probablyHipster(person))

// BONUS: Add another criteria of some sort to "probablyHipster" and update your
// person object.

// STEP 3: Write a function makeHipster that takes a name and an age, and returns an 
// object that contains that person's name, age, and attributes that indicate hipsterness.

// (NOTE: remove // -- from the below lines to test)
// var aHipster = makeHipster("Rose Smith", 26);
// var notAHipster = makeHipster("Granny", 97);
//console.log(aHipster.name + " is definitely a hipster.", probablyHipster(aHipster));
//console.log(notAHipster.name + " is definitely not a hipster.", probablyHipster(notAHipster));

// STEP 4: Write a function "bio" that takes the "you" object as an argument and 
// returns a minimal string bio about you. (hint: you'll need to make use of the 
// "+" operator to combine strings. )

// (NOTE: remove // -- from the below lines to test)
// console.log("Your bio is:", bio(you));