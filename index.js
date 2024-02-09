// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  const drivers = ['Antonia', 'Nuru'];
  console.log(returnFirstTwoDrivers(drivers)); // Output: [ 'Antonia', 'Nuru' ]

const returnLastTwoDrivers = (driver) => {
    return driver.slice(-2);
  };
  const driver = ['Amari', 'Mo'];
  console.log(returnLastTwoDrivers(driver)); // Output: [ 'Amari', 'Mo' ]

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Testing the functions by calling them with an array of drivers
const allDrivers = ["Antonia", "Nuru", "Amari", "Mo"];
const firstTwoDrivers = selectingDrivers[0](allDrivers);
const lastTwoDrivers = selectingDrivers[1](allDrivers);

console.log(firstTwoDrivers); // Output: ["Antonia", "Nuru"]
console.log(lastTwoDrivers); // Output: ["Amari", "Mo"]

const createFareMultiplier = (multiply) => {
  return (num) => {
    return num * multiply;
  };
};

const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5)); // Output: 25

const fareDoubler = (fare) => {
  return fare * 2;
}
const doubleFare = 20
console.log(doubleFare(10)); // Output: 20

// Define the fareTripler function
function fareTripler(fare) {
  return fare * 3;
}
// Define the triplesFare variable
const triplesFare = 36;
const tripledFare = fareTripler(triplesFare);
console.log(tripledFare); // Output: 108

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}

const drivered =  ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivered, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivered, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']