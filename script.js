// 1. Task: Array Filtering and Mapping
const people = [
    { name: 'Babul', age: 25, gender: 'female' },
    { name: 'Kabul', age: 30, gender: 'male' },
    { name: 'Cabul', age: 22, gender: 'female' },
    { name: 'Dabul', age: 28, gender: 'male' },
  ];
  
  function getMaleNames(persons) {
    const males = persons.filter(person => person.gender === 'male');
    const maleNames = males.map(person => person.name);
    return maleNames;
  }
  
  console.log(getMaleNames(people));
  

//   2. Task: Object Manipulation
const books = [
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
  ];
  
  function getBookTitles(bookArray) {
    return bookArray.map(book => book.title);
  }
  
  console.log(getBookTitles(books)); 

// 5. Task: Array Reduction (Sum of Even Numbers)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

console.log(sumEvenNumbers(numbers)); 

// 6. Task: Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  const year = 2024;
  console.log(`${year} is a leap year:`, isLeapYear(year));
  


// 7. Task: Unique Values
const nums = [1, 2, 3, 2, 4, 3, 5, 6, 1];

function getUniqueValues(arr) {
  return [...new Set(arr)];
}

console.log(getUniqueValues(nums)); 


  