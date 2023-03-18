// Concatenation is the process of combining strings in JavaScript.It is often used to create more complex strings by joining multiple smaller strings together.In JavaScript, concatenation can be achieved using the "+" operator or the "+=" operator.


// Using the "+" operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// Using the "+=" operator
let sentence = "The quick brown fox";
sentence += " jumps over the lazy dog.";
console.log(sentence); // Output: "The quick brown fox jumps over the lazy dog."

// In the first example, we create two variables, firstName and lastName, and then use the "+" operator to concatenate them with a space in between.The resulting string is stored in a new variable called fullName.

// In the second example, we start with a variable called sentence and then use the "+=" operator to append another string to it.This is a shorthand way of writing sentence = sentence + " jumps over the lazy dog.".

// Concatenation is a useful technique for building dynamic strings in JavaScript, such as building URLs or generating messages for user interfaces.