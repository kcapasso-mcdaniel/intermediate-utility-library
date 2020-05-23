// Card counting function
// var count = 0
//each card assigned a value
var count = 0;

function countingCards(card) {
   switch (card) {
      // // 2-6 = [(+1) or increment]
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         ++count;
         break;
      // 7-9 = 0 not necessary to have case count//
      // 10 + highCard = [(-1) or decrement]
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         --count;
         break;
   }
   var holdBet = "Hold";
   if (count > 0) {
      holdBet = "Bet";
      // //when the count is positive bet high
      // // when the count is zero or negative bet low
   }
   console.log(4);
   return count + " " + holdBet;
}

// Profile Lookup Function

var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
   },
];

function lookUpProfile(name, prop) {
   for (var i = 0; i < contacts.length; i++) {
      var singleContactObj = contacts[i];
      var firstName = singleContactObj.firstName;
      if (firstName === name) {
         if (singleContactObj.hasOwnProperty(prop)) {
            console.log(firstName);
            return singleContactObj[prop];
         } else {
            return "No such propery.";
         }
      }
   }
   return "No such contact.";
}

// Generate a random whole number
// Math.floor(math.random() * number;
function randomWholeNumber() {
   return Math.floor(Math.random() * 200);
}

// Generate a randrom whole number within a range
// Math.floor(math.random() * (max - min + 1)) + min;
function randomWholeNumberRange(myMax, myMin) {
   console.log(randomWholeNumber);
   var randomWholeNumber = randomWholeNumberRange(1, 200);
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//Remove items using splice()
// any number of consecutive elements can be removed
function removeItemSplice(array, start, end) {
   //  element will be removed at start input up to and end input
   array.splice(start, end);
   console.log(array);
   return array;
}

// Add items using splice()
// add new elements
function addItemSplice(array, start, end, addOn) {
   //  elements in start to end range will be removed and replaced with addOn
   array.splice(start, end, addOn);
   console.log(array);
   return array;
}

// Check for the presence of an element with indexOf()
function checkArray(array, element) {
   console.log(array);
   // target the array through the index and check if element exists
   // inequality operater used here because index starts at 0 so anything equal to -1 would be undefined
   return array.indexOf(element) != -1;
}
// Use typeof to Check the type of variable
function checkVariable(variable) {
   return typeof variable;
}
