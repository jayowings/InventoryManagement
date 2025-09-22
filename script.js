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

function generateReport(){
    /////////TODO/////////
}

function filterByCategory(category){
    ////////////TODO////////////
}

function calculateTotalInventoryValue(){
    ////////////////////TODO////////////
}

function lowStockAlert(){
    /////////////////TODO//////////
}