let counter = 1000;
let form;
let allFood = [];

function Food(name, type, price) {
    this.ID = generateFoodID();
    this.name = name;
    this.type = type;
    this.price = price;

    allFood.push(this);
    this.render();
}

Food.prototype.render = function() {
    let newRow = document.createElement("tr");
    foodTable.appendChild(newRow);
    let newID = document.createElement("td");
    newID.textContent = this.ID;
    newRow.appendChild(newID);
    let newName = document.createElement("td");
    newName.textContent = this.name;
    newRow.appendChild(newName);
    let newType = document.createElement("td");
    newType.textContent = this.type;
    newRow.appendChild(newType);
    let newPrice = document.createElement("td");   
    newPrice.textContent = this.price;
    newRow.appendChild(newPrice);
}


window.addEventListener('load', function () {
    const foodTable = document.getElementById("foodTable");
    form = document.getElementById("restaurantForm");
    form.addEventListener("submit", handleSubmit);
})


function handleSubmit(event){
    event.preventDefault();
    let name = event.target.foodName.value
    let type = event.target.foodType.value;
    let price = event.target.foodPrice.value;

    const newFood = new Food(name, type, price);
    form.reset();
    console.log(allFood);
}

function generateFoodID() {
    return counter++;
}