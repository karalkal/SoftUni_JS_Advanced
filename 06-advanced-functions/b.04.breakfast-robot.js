function solution() {
    // create the menu

    let menu = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
    }

    // create available ingredients' stock
    let ingredientsInStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return takeAction; // RETURN FUNCTION AS REFERANCE

    // function gets arguments from outer scope
    function takeAction(input) {
        let [action, arg, quantity] = input.split(' ')

        // restock
        if (action === 'restock') {
            ingredientsInStock[arg] += Number(quantity);
            return 'Success';
        }

        // prepare
        else if (action === 'prepare') {
            // check if ALL required amounts are available (arg here is the required ingredient)
            let recipe = menu[arg];
            let hasEnoughStock = true;
            // ... if not - display message
            for (let [recipeItem, recipeUnits] of Object.entries(recipe)) {
                if (recipeUnits * Number(quantity) > ingredientsInStock[recipeItem]) {
                    hasEnoughStock = false;
                    return `Error: not enough ${recipeItem} in stock`;
                }
            }
            if (hasEnoughStock) {
                for (let [recipeItem, recipeUnits] of Object.entries(recipe)) {
                    ingredientsInStock[recipeItem] -= recipeUnits * Number(quantity);
                }
                return 'Success';
            }
        }

        // report 
        else if (action === 'report') {
            return `protein=${ingredientsInStock.protein} carbohydrate=${ingredientsInStock.carbohydrate} fat=${ingredientsInStock.fat} flavour=${ingredientsInStock.flavour}`
        }
    }
}

let manager = solution();
manager('restock flavour 50')
manager('prepare lemonade 4')
manager('restock carbohydrate 10')
manager('restock flavour 10')
manager('prepare apple 1')
manager('restock fat 10')
manager('prepare burger 1')
manager('report')