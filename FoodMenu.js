// function randomString() {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// }

let orderArray = [];

const populateFood = async function() {
    console.log("this is the console log");
    // console.dir(menuFile);
    $.getJSON("menu-items.json", function(menuData) {
        // console.dir(menuData.menu[0].items[0]);
        console.dir(menuData);
        const foodMenuElement = document.getElementById("food-menu"); // step 1: get parent element from document
        console.dir(foodMenuElement);
        // go through each category
        menuData.menu.forEach(category => {
            // section and heading
            categorySection = document.createElement("section"); // step 2: create new element
            categoryHeading = document.createElement("h3"); // step 2: create new element
            categoryHeading.innerText = category.name; // step 3: create content
            categorySection.appendChild(categoryHeading); // step 4: append child
            foodMenuElement.appendChild(categorySection); // step 4: append child 
            let categorySize = 0;
            category.items.forEach(item => {
                // items
                itemName = document.createElement("h4"); // step 2: create element
                itemName.innerText = item.name; // step 3: create content
                categorySection.appendChild(itemName); // step 4: append child
                itemDesc = document.createElement("p");
                itemDesc.innerText = item.description;
                categorySection.appendChild(itemDesc);
                itemPrice = document.createElement("b");
                itemPrice.innerText = '$' + item.price;
                categorySection.appendChild(itemPrice);
                // button for online ordering
                button = document.createElement("button");
                button.innerText = "Add to Online Order";
                button.onclick = function() {
                    orderArray.push(item);
                    updateCart(orderArray);
                }
                categorySection.appendChild(button);
                // optional image
                if (item.image) {
                    itemImage = document.createElement("img");
                    itemImage.setAttribute("src", item.image); //setAttribute
                    // itemImage.style.background
                    categorySection.appendChild(itemImage);
                    categorySize++;
                }
                categorySize++;
                console.log(categorySize + category.name);
                categorySection.setAttribute("style", "grid-row: span " + categorySize);
            });
        });
    });
}