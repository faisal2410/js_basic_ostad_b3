// An array is a data structure in JavaScript that can hold multiple values of any data type, including numbers, strings, booleans, and even other arrays.Arrays are a very useful way to organize and manipulate data in your code.

//     Here's an example of how to create an array in JavaScript:


// let myArray = [1, 2, 3, 4, 5];

// In this example, myArray is an array that contains the numbers 1 through 5.

// You can access individual elements of an array by their index, which is the position of the element within the array.Array indices start at 0, so the first element in an array is at index 0, the second element is at index 1, and so on.Here's an example:


// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray[0]); // prints 1
// console.log(myArray[2]); // prints 3


// You can also modify the values of individual elements in an array by their index:


// let myArray = [1, 2, 3, 4, 5];
// myArray[2] = 6;
// console.log(myArray); // prints [1, 2, 6, 4, 5]


// You can find the length of an array using the length property:


// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.length); // prints 5

// You can also add new elements to the end of an array using the push() method:


// let myArray = [1, 2, 3, 4, 5];
// myArray.push(6);
// console.log(myArray); // prints [1, 2, 3, 4, 5, 6]

// You can remove elements from the end of an array using the pop() method:


// let myArray = [1, 2, 3, 4, 5];
// myArray.pop();
// console.log(myArray); //

// commonly used array functions in JavaScript:

// concat() - used to merge two or more arrays
// filter() - used to filter out elements from an array based on a condition
// find() - used to find the first element in an array that meets a condition
// forEach() - used to execute a provided function for each element in an array
// includes() - used to check if an element is included in an array
// indexOf() - used to find the index of the first occurrence of an element in an array
// join() - used to join all elements of an array into a string
// map() - used to create a new array by calling a function on each element in the original array
// pop() - used to remove the last element from an array and return it
// push() - used to add one or more elements to the end of an array
// reduce() - used to reduce an array to a single value by calling a function on each element in the array
// reverse() - used to reverse the order of the elements in an array
// shift() - used to remove the first element from an array and return it
// slice() - used to create a new array by extracting a section of an existing array


// concat(): The concat() method is used to join two or more arrays or strings and return a new array or string that contains all the elements of the original arrays or strings.Here's an example:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]


// filter(): The filter() method is used to create a new array with all elements that pass the test implemented by the provided function. Here's an example:

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(number => number > 3);
// console.log(filteredNumbers); // Output: [4, 5]


// find(): The find() method is used to return the value of the first element in an array that satisfies the provided testing function. Here's an example:

// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find(number => number > 3);
// console.log(foundNumber); // Output: 4

// forEach(): The forEach() method is used to execute a provided function once for each array element.Here's an example:

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number));
// Output: 1
//         2
//         3
//         4
//         5



// includes(): This method checks whether an array includes a certain value and returns a boolean value of true or false.
//     Example:


// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.includes('apple')); // true
// console.log(fruits.includes('pear')); // false


// indexOf(): This method returns the index of the first occurrence of a specified value in an array.If the value is not found, it returns - 1.
// Example


// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('pear')); // -1


// join(): This method creates a string from an array by joining all elements with a specified separator.The default separator is a comma(,).
//     Example:


// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.join()); // 'apple,banana,orange'
// console.log(fruits.join('-')); // 'apple-banana-orange'

// map(): This method creates a new array by applying a function to each element of an existing array.
//     Example:


// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((number) => number * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]




// reduce(): This method applies a function to each element of an array and returns a single value that is the result of all the operations.
//     Example:


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sum); // 15


// reverse(): This method reverses the order of the elements in an array.
//     Example:


// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.reverse()); // ['orange', 'banana', 'apple']


// shift(): This method removes the first element from an array and returns that element.This also changes the length of the array.
//     Example:


// const fruits = ['apple', 'banana', 'orange'];

// const shiftedFruit = fruits.shift();

// console.log(shiftedFruit); // 'apple'
// console.log(fruits); // ['banana', 'orange']


// slice(): This method returns a new array that includes a portion of an existing array.The original array is not modified.
//     Example:


// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// const citrus = fruits.slice(2, 4);

// console.log(citrus); // ['orange', 'grape']
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'kiwi']