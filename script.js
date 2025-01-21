// Initialize the cart with an empty array or load from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the cart contents
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Clear the cart before updating

    let total = 0;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = 'Total: $0';
    } else {
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <div class="cart-item-details">
                    <span>${item.name}</span>
                    <span>$${item.price}</span>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(div);
            total += item.price;
        });

        cartTotal.innerHTML = `Total: $${total}`;
    }
}

// Function to add an item to the cart
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product); // Add product to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
    alert(`${productName} has been added to the cart!`);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in localStorage
    displayCart(); // Update the cart display
}

// Display the cart when the page loads
window.onload = displayCart;
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.product');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].offsetWidth + 20; // 20px is the margin
    const productList = document.querySelector('.product-list');
    productList.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
