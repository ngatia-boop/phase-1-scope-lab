// Write your solution in this file!
// Declare customerName in global scope using var
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that sets bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // creates global variable
}

// Function that overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer using const
const leastFavoriteCustomer = 'someone';

// Function that tries to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // throws error
}
