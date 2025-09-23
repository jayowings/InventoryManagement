let inventory = [];
let txt = "";

function addProduct(name, category, quantity, price){
    let temp = {
        id : inventory.length,
        name : name,
        category : category,
        quantity : quantity,
        price : price
    };
    if(temp.quantity < 0){
        console.log("Error: invalid quantity");
    }else if(temp.price < 0){
        console.log("Error: invalid price");
    }else{
        inventory.push(temp);
    }
}

function removeProduct(id){
    if(inventory.length <= id || inventory[id] == undefined)
    {
        console.log(`Error: Item ${id} does not exist`);
    }else{
        delete inventory[id];
    }
}

function updateProductQuantity(id, newQuantity){
    if(inventory.length <= id || inventory[id] == undefined){
        console.log(`Error: Item ${id} does not exist`);
    }else if(newQuantity < 0){
        console.log("Error: invalid quantity");
    }else{
        inventory[id].quantity = newQuantity;
    }
}

function generateReport(array){
    txt = "";
    array.forEach(report);
    console.log(txt);
}

function report(value){
    txt += value.name + ": -> " + value.quantity + "\n";

}

function categorize(value){
    return value.category == txt;
}

function filterByCategory(cat){
    let txt = cat;
    let filtered = inventory.filter(categorize());
    generateReport(filtered);
    if(filtered.length == 0){
        console.log("Error: no items found in this category");
    }
}

function value(total, value){
    if (typeof total != "number"){
        total = parseFloat(0);
    }
    if(value.price < 0.01){
        return total;
    }else{
    return total + parseFloat(value.price * value.quantity);
    }
}

function calculateTotalInventoryValue(){
    console.log(`Inventory valued at $${inventory.reduce(value)}`);
}

function low(value){
    return value.quantity < 10;
}

function lowStockAlert(){
    let lowStock = inventory.filter(low);
    generateReport(lowStock);
}


addProduct("Wireless Mouse", "Electronics", 50, 29.99);
addProduct("Wireless Keyboard", "Electronics", 25, 32.87);
addProduct("Caravelli 3-piece suit", "Clothing", 9, 199.99);
addProduct("The Holy Bible", "Literiture", 17, 15.75);

generateReport(inventory);

console.log("Update quantity for Bible");

updateProductQuantity(3, 2);

generateReport(inventory);

console.log("Remove wireless mouse");

removeProduct(0);

generateReport(inventory);

//console.log("Clothing:");

filterByCategory("Clothing");

console.log("Total value");

calculateTotalInventoryValue();

console.log("Checking low stock");

lowStockAlert();