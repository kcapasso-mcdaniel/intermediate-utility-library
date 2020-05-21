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

// --- will remove when finished with lessons --
// --- practice area for freecodecamp
var myDog = {
   name: "Isabella",
   legs: 4,
   tails: 1,
   friends: ["birds", "treats", "bone"],
};
console.log(myDog);
