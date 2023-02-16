//THE RESTAURANT

//import mongerInventory function from fishMonger.js
const { mongerInventory } = require("./fishMonger.js")

//IMPORT INVENTORY FROM MONGER HERE. REMEMBER TO INCLUDE CHEFS BUDGET AS PARAMETER
const shoppingList = mongerInventory(5.00)

console.log(shoppingList)

const fishMenu = (fishArray) => {

    let menuString = ''

    for (let i=0; i < fishArray.length; i++){

        console.log(fishArray[i].species)

        menuString += 
        
            `
            <h2>${fishArray[i].species}</h2>
                <section class="menu__item">${fishArray[i].species} Soup</section>
                <section class="menu__item">${fishArray[i].species} Sandwich</section>
                <section class="menu__item">Grilled ${fishArray[i].species}</section>
                
            `

    }

    const htmlString = 
        `<h1>Menu</h1>
        <article class="menu">

        ${menuString}    

        </article>`

    return htmlString

}

console.log(fishMenu(shoppingList))