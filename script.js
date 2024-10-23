const close= document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if (bar) {
bar.addEventListener('click', () =>
     { nav.classList.add('active');
})
}
if (close) {
    close.addEventListener('click', () =>
         { nav.classList.remove('active');
    })
    }


document.getElementById('registerForm').addEventListener('submit', function (event) {
    let formValid = true;

    // Validate email format
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        formValid = false;
    }

    // Validate password complexity
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        formValid = false;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        formValid = false;
    }

    if (!formValid) {
        event.preventDefault();
    }
});

const products = [
    { name: 'Product 1', description: 'Description for product 1', image: 'product1.jpg', category: 'Category 1' },
    { name: 'Product 2', description: 'Description for product 2', image: 'product2.jpg', category: 'Category 2' },
    // Add more products as needed
];

function displayProducts(filteredProducts = products) {
    const productCatalog = document.getElementById('products');
    productCatalog.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button class="addToCartButton" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productCatalog.appendChild(productDiv);
    });

    // Apply hover and animation effects
    document.querySelectorAll('.product img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.5)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    document.querySelectorAll('.addToCartButton').forEach(button => addAnimationToButton(button));
}

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function sortProductsByName() {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    displayProducts(sortedProducts);
}

let cart = [];

function addToCart(productName) {
    cart.push(productName);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear existing cart items

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function checkout() {
    // Implement checkout functionality
    alert('Checking out');
}

function addAnimationToButton(button) {
    button.addEventListener('click', () => {
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
    });
}

// Initial display of all products
displayProducts(products);

function revealMystery() {
    const items = [
        "Exclusive Designer Watch",
        "Premium Headphones",
        "Limited Edition T-shirt",
        "Luxury Skincare Set",
        "Portable Bluetooth Speaker",
        "Stylish Sunglasses"
    ];

    const randomItem = items[Math.floor(Math.random() * items.length)];

    document.getElementById("mysteryItem").textContent = randomItem;
    document.getElementById("mysteryContent").style.display = "block";
}



