// ---------- Part 1: Variables and Conditionals ----------
let storeName = "Denim Nigeria";
let isOpen = true;

if (isOpen) {
  console.log(storeName + " is open for business!");
} else {
  console.log(storeName + " is closed today.");
}

// ---------- Part 2: Functions ----------
function greetCustomer(name) {
  return "Hello, " + name + "! Welcome to " + storeName;
}

function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

console.log(greetCustomer("Angela"));
console.log("Discounted Price: ₦" + calculateDiscount(5000, 20));

// ---------- Part 3: Loops ----------
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("Item " + i + " is on display.");
}

// Example 2: While loop
let count = 0;
while (count < 2) {
  console.log("Special offer available!");
  count++;
}

// ---------- Part 4: DOM Interactions ----------
// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").innerText = "You clicked the button! 🎉";
});

// 2. Change background color
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "#dff9fb";
});

// 3. Dynamically add a new product
let newItem = document.createElement("li");
newItem.textContent = "New Denim Caps";
document.querySelector("nav ul").appendChild(newItem);
