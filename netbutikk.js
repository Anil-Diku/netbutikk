let cartItems = [];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Your login logic here
    // For demonstration purposes, let's assume the login is successful if username and password are not empty
    if (username && password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("store-container").style.display = "block";
    } else {
        document.getElementById("login-message").innerText = "Please enter both username and password.";
    }
}

function addToCart(itemName, itemImage, itemPrice) {
    // Your add to cart logic here
    // For demonstration purposes, let's assume the item is added successfully
    cartItems.push({ name: itemName, image: itemImage, price: itemPrice });

    renderCart();
}

function renderCart() {
    var cartDiv = document.getElementById("cart");
    var totalDiv = document.getElementById("total");

    cartDiv.innerHTML = ""; // Clear the previous content

    var totalPrice = 0;

    cartItems.forEach(item => {
        var newItem = document.createElement("div");
        newItem.classList.add("cart-item");
        newItem.innerHTML = "<img src='" + item.image + "' alt='" + item.name + "'><span>" + item.name + " - $" + item.price.toFixed(2) + "</span>";
        cartDiv.appendChild(newItem);

        totalPrice += item.price;
    });

    totalDiv.innerText = "Total: $" + totalPrice.toFixed(2);
}

function logout() {
    // Your logout logic here
    // For demonstration purposes, let's just reload the page
    location.reload();
}
