let inventory = [];

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

function report(value){
    txt += value.name + ": ->" + value.quantity + "<br>";

}

function generateReport(array){
    let txt = "";
    array.forEach(report);
    console.log(txt);
}

function categorize(category, value){
    return value.category == category;
}

function filterByCategory(category){
    let filtered = inventory.filter(categorize(category));
    generateReport(filtered);
    if(filtered.length == 0){
        console.log("Error: no items found in this category");
    }
}

function value(total, value){
    return total + (value.price * value.quantity);
}

function calculateTotalInventoryValue(){
    let total = inventory.reduce(value);
    console.log(`Inventory valued at $${total}`);
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

console.log("remove wireless mouse");

removeProduct(0);

generateReport(inventory);

console.log("Cloting:");

filterByCategory("Clothing");

console.log("Total value");

calculateTotalInventoryValue();

console.log("Checking low stock");

lowStockAlert();