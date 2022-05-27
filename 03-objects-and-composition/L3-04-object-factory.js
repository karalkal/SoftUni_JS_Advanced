/* Create a function that can compose objects by copying functions from a given library of functions. 
You will receive two parameters – a library of functions as an associative array (object) and 
an array of orders, represented as objects. You must return a new array – the fulfilled orders.
The first parameter will be an object where each property is a function. 
You will use this library of functions to compose new objects. */

function factory(library, orders) {
    let products = []
    
    for (let order of orders) {
        let currentProduct = order.template

        for (let part of order.parts) {
            currentProduct[part] = library[part]
        }
        // console.log(currentProduct)
        products.push(currentProduct)
    }
    return products
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);