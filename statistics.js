window.addEventListener('load', function () {
    const foodTable = document.getElementById("foodTable-stastics");
    let form = document.getElementById("restaurantForm");
    render(getData, foodTable);
})

function getData() {
    let retrievedData = localStorage.getItem("food")
    let parsedData = JSON.parse(retrievedData);

    console.log("in getData");
    console.log('-->', parsedData);
    return parsedData;
}

function render(getData, foodTable) {
    let fixedData = getData();
    console.log("before loop...");
    if (fixedData != null) {
        for (let i = 0; i < fixedData.length; i++) {
            console.log("IN LOOP......");
            let newRow = document.createElement("tr");
            foodTable.appendChild(newRow);
            let newID = document.createElement("td");
            newID.textContent = fixedData[i].ID;
            newRow.appendChild(newID);
            let newName = document.createElement("td");
            newName.textContent = fixedData[i].name;
            newRow.appendChild(newName);
            let newType = document.createElement("td");
            newType.textContent = fixedData[i].type;
            newRow.appendChild(newType);
            let newPrice = document.createElement("td");
            newPrice.textContent = fixedData[i].price;
            newRow.appendChild(newPrice);
        }
    }
    console.log("after loop...");
}
