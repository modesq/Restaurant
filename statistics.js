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

Food.prototype.render = function () {
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
    const foodTable = document.getElementById("foodTable-stastics");
    form = document.getElementById("restaurantForm");
    getData();
    // form.addEventListener("submit", handleSubmit);
})

function getData() {
    let retrievedData = localStorage.getItem("food")
    let arrayData = JSON.parse(retrievedData);
    console.log(arrayData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Food(
                arrayData[i].ID,
                arrayData[i].name,
                arrayData[i].type,
                arrayData[i].price
            );
        }
    }

    // for (let i = 0; i < allFood.length; i++) {
    //     allFood[i].printMenu();
    // }

    console.log('-->', food);
    console.log('-->', arrayData);
}

function generateFoodID() {
    return counter++;
}