// Cart items array
let cart = [];

// Select elements
const addToCartButtons = document.querySelectorAll('.product-card button');
const cartLink = document.querySelector('nav ul li a[href="#"]'); // Cart link in navbar

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h4').innerText;
        const productPrice = productCard.querySelector('p').innerText;

        // Create product object
        const item = {
            name: productName,
            price: productPrice
        };

        // Add item to cart
        cart.push(item);

        // Update Navbar Cart Count
        updateCartCount();

        // Alert user
        alert(`${productName} successfully added to cart!`);
    });
});

// Function to update cart count in the header
function updateCartCount() {
    const cartNav = Array.from(document.querySelectorAll('nav ul li a')).find(el => el.textContent.includes('Cart'));
    if (cartNav) {
        cartNav.innerText = `Cart (${cart.length})`;
    }
}

// Show Cart Items when clicking on "Cart" in Navigation
const cartNavButton = Array.from(document.querySelectorAll('nav ul li a')).find(el => el.textContent.includes('Cart'));

if (cartNavButton) {
    cartNavButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert("Your cart is currently empty!");
        } else {
            let cartContent = "--- Your Cart Items ---\n\n";
            cart.forEach((item, i) => {
                cartContent += `${i + 1}. ${item.name} - ${item.price}\n`;
            });
            alert(cartContent);
        }
    });
}