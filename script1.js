// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const peoples = [
  {
    name: "Babul",
    age: 25,
    gender: "male",
  },
  {
    name: "kabuli",
    age: 20,
    gender: "female",
  },
  {
    name: "mabul",
    age: 30,
    gender: "male",
  },
];

// const allName = (peoples.map((person) =>{
//     return person.name
// }));

// console.log(allName);
const getMaleNames = (persons) => {
    const males = persons.filter((person )=>person.gender ==="male")
    // console.log(males); //output [
//   { name: 'Babul', age: 25, gender: 'male' },
//   { name: 'mabul', age: 30, gender: 'male' }
// ]
    const maleNames = males.map((p)=>p.name);
    // console.log(maleNames); //output ['Babul', 'mabul']
    return maleNames;

}
console.log(getMaleNames(peoples));


// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


const books = [
    {title: 'The Alchemist', author: 'Jaber ibn Haiyan', year: 1988},
    {title: '1984', author: 'George Orwell', year: 1949},
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937},
]

const getBookTitles = (bookArray) => {
    const bookTitles = bookArray.map((book) => book.title);
    return bookTitles;
}
console.log(getBookTitles(books)); // Output: ['The Alchemist', '1984', 'The Hobbit']



// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num;
const double = (num) => num * 2; 
const addFive = (num) => num + 5;
const compose = (num) => {
    const squared = square(num);
    const doubled = double(squared);
    const result = addFive(doubled);
    return result;
}
console.log(compose(3)); // Output: 20 (3^2 = 9, 9*2 = 18, 18+5 = 23)

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
];
const sortCarsByYear = (carArray) => {
    const sortedCars = carArray.sort((a, b) => a.year - b.year);
    return sortedCars;
}
console.log(sortCarsByYear(cars)); // Output: [ { make: 'Honda', model: 'Civic', year: 2018 }, { make: 'Toyota', model: 'Camry', year: 2020 }, { make: 'Ford', model: 'Mustang', year: 2021 } ]

// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sumEvenNumbers = (arr) => {
    return arr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}
console.log(sumEvenNumbers(numbers)); // Output: 20 (2 + 4 + 6 + 8)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const functon = (arr) =>{
   return arr.reduce((acc, num)=>{
        const odd1 = num % 2 === 0 ? acc + num : acc;
        return odd1

    }, 0)
}
console.log(functon(numbers2));
// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

// 09.Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
