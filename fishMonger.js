//THE FISH MONGER

//import boatInventory function from fishingBoat.js
const { boatInventory } = require("./fishingBoat.js")

//create new variable for array getting imported from fishingBoat.js
let arrayOfBoatFish = boatInventory()


// //UNCOMMENT TO TEST LOCALLY
// arrayOfBoatFish = [
//     { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
//     { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
//     { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
//     { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
//     { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
//     { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
//     { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
//     { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
// ]


//mongerInventory function accepts a requested budget from the chef as a parameter
const mongerInventory = (chefBudget) => {

    let newArrayOfFish = []

//loop through arrayOfBoatFish
    for(let i=0; i<arrayOfBoatFish.length; i++){

    //create new array keeping fish amounts higher than 9 and fish cheaper than 7.50 and the chef's budget 
    if(arrayOfBoatFish[i].amount > 9 && 
        arrayOfBoatFish[i].price < 7.50 &&
        arrayOfBoatFish[i].price < chefBudget){

        //adjust amount of fish to 10 without altering 
        const newFish = arrayOfBoatFish[i]
        newFish.amount = 10

        //add fish that meet criteria to new array
        newArrayOfFish.push(newFish)
        console.log(newFish)
        }
    }

    return newArrayOfFish
}

console.log(mongerInventory(5.00))


//export mongerInventory function
module.exports = { mongerInventory }