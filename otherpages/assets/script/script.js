function goToHomePage() {
    window.location.href = "home.html";
}

function goToAbout() {
    window.location.href = "last page.html";
}

window.onload = function () {
    const userName = document.getElementById("username");
    const button = document.getElementById("userbtn");
    const outPut = document.getElementById("output");

    outPut.innerHTML = "Hello, " + userName.value;
}

function addToCart(productId, productName, productPrice) {

    var cart = document.getElementById("cart");

    var cartItem = document.createElement("li");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                <span>${productName} - $${productPrice.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(this, ${productPrice})">Remove</button>
            `;


    document.getElementById("cart-items").appendChild(cartItem);


    updateTotal(productPrice);
}


function removeFromCart(button, price) {

    var cartItem = button.parentElement;


    document.getElementById("cart-items").removeChild(cartItem);

    updateTotal(-price);
}

function updateTotal(price) {

    var currentTotal = parseFloat(document.getElementById("cart-total").textContent);

    var newTotal = currentTotal + price;

    document.getElementById("cart-total").textContent = newTotal.toFixed(2);
}

function login() {
    var userName = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if ((userName == 'rayan' && pass == '230018') ||
        (userName == 'ahmad' && pass == '230060') ||
        (userName == 'uwaid' && pass == '232574') ||
        (userName == 'abdur' && pass == '232082') ||
        (userName == 'amna' && pass == '230102')) {
        window.location.href = "otherpages/home.html";
        alert("Login Successful");
    } else {
        alert("Try Again! Login Unsuccessful");
    }
}

function forget() {
    alert("Check Your Mail :)")
}