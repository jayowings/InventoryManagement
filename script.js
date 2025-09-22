let inventory = [];

function addProduct(name, category, quantity, price){
    let temp = {
        id : inventory.length,
        name : name,
        category : category,
        quantity : quantity,
        price : price
    }
    if(temp.quantity < 0){
        console.log("Error: invalid quantity");
    }
    else if(temp.price < 0){
        console.log("Error: invalid price");
    }else{
        inventory.push(temp);
    }
}