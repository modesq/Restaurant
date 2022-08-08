const counter = 1000;
const allFood = [];
const foodTable = document.getElementById("foodTable");
function Food(name, type, price) {
    this.ID = generateFoodID();
    this.name = name;
    this.type = type;
    this.price = price;

    allFood.push(this);
}

let form = document.getElementById("restaurant");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let ID = generateFoodID();
    let name = event.getElementById("foodName").value;
    let type = event.getElementById("foodType").value;
    let price = event.getElementById("foodPrice").value;

}

function generateFoodID() {
    return counter++;
}