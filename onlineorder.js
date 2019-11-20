let cartTable;

// regular named function
function makeCartRow(item, price) {
    const row = document.createElement("tr");
    // td is table data
    const itemData = document.createElement("td");
    itemData.innerText = item;
    row.appendChild(itemData);
    const priceData = document.createElement("td");
    priceData.innerText = price;
    row.appendChild(priceData);
    return row;
}

let exampleArray = [{ item: "soup", price: 3 },
    { item: "salad", price: 3 },
    { item: "sandwich", price: 5 }
]

const rowFromItem = function(value) {
    cartTable.appendChild(makeCartRow(value.name, '$' + value.price));
}

// anonymous function as a variable
const updateCart = async function(array) {
    cartTable = document.getElementById("cart-content"); // step 1: get parent element
    console.log("called updateCart");
    // identify the table
    console.dir(cartTable);
    // clear the table
    cartTable.innerHTML = "";
    // add the headers
    const headerRow = document.createElement("tr"); // step 2: create new element to be child
    const itemHeader = document.createElement("th"); // also step 2 at the next level down
    const amountHeader = document.createElement("th");
    itemHeader.innerText = "Item"; // step 3: create content for new element
    amountHeader.innerText = "Amount";
    headerRow.appendChild(itemHeader); // step 4: append child (lower level)
    headerRow.appendChild(amountHeader);
    cartTable.appendChild(headerRow); // also step 4 (higher level)
    // add the example items
    // cartTable.appendChild(makeCartRow("soup", "$3"));
    // cartTable.appendChild(makeCartRow("salad", "$3"));
    // cartTable.appendChild(makeCartRow("sandwich", "$5"));
    if (!array) {
        array = [];
    }
    array.forEach(rowFromItem);
    const totalRow = document.createElement("tr"); // step 2 new element
    const totalHeader = document.createElement("th");
    const totalAmount = document.createElement("th");
    let sum = 0;
    array.forEach(function(item) {
        sum += item.price;
    })
    totalAmount.innerText = '$' + sum;
    totalHeader.innerText = "Total: ";
    totalRow.appendChild(totalHeader);
    totalRow.appendChild(totalAmount);
    cartTable.appendChild(totalRow);
}

// updateCart = function() {
//     console.log("3");
// }

// this is always called when the page loads
// window.onload = updateCart;
// just calling the function will create an error because the element does not exist
// updateCart();

// local storage ONLY applies to another window so this will only matter if you have two windows open
// window.addEventListener("storage", updateCart); // not used yet