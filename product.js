const products = [
    { id: 1, name: "NVIDIA RTX 4090", price: 1599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6czhnTUXz6oFU8521v2VkI1gXxhavtWBf8EDxed33gg&s=10" },
    { id: 2, name: "AMD Ryzen 9 7950X", price: 699, img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Intel Core i9-14900K", price: 589, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG495Lzv533HaCWANphfHMgD-vA6yjjf7d7bwJS8wwjg&s=10" },
    { id: 4, name: "Corsair 64GB DDR5", price: 249, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDz6Hkzpu6ZR-1oZwdVf24P58vmDd6FOn0CBfmj3HCtxJAi1qKKqdcaU&s=10" },
    { id: 5, name: "Samsung 2TB NVMe", price: 199, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxLOAqpWRO2HnW6f_UaHcC-EO4435HppCW4HFvWlNHQ&s=10" },
    { id: 6, name: "ROG Thor 1000W", price: 299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCY8iLfmu7qrGKMvzx-zPGASurI6UpztVcmNbjWKxQQ&s=10" },
    { id: 7, name: "NZXT Kraken 360", price: 179, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgb4sd2JuQ4Km2aXti-veShZDbkBJ48PlztPQUTNaPw&s=10" },
    { id: 8, name: "ASUS ROG X670E", price: 499, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzk-gE3eCftMvKIeIHXS9twymEYVINq7kgMG5dr3Y2Q&s=10" },
    { id: 9, name: "Cyber ATX Case", price: 159, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUsoB-RMVj3kTfzexEF8dehK5Sudfuc0C5ZskG2wT7g&s=10" },
    { id: 10, name: "Mechanical Keyboard", price: 129, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "4K 144Hz Monitor", price: 799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhe_E_0dAu9klO_O-Dtst-jN2JFsSdthfBMSn9uQo3w&s=10" },
    { id: 12, name: "Wireless Gaming Mouse", price: 89, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOPP5L0ExzCp14IxBKoWsHxXLtefO_RR1LPRNYXr3yw&s=10" }
];

let cart = [];

const productsContainer = document.getElementById("products-container");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOpenBtn = document.getElementById("cart-open");
const cartCloseBtn = document.getElementById("cart-close");
const overlay = document.getElementById("overlay");

function renderProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="screen-btn add-to-cart-btn" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        `;
        productsContainer.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let count = 0;
    
    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.qty}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartCount.innerText = count;
    cartTotal.innerText = total;
}

function openCart() {
    cartSidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeCart() {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
}

cartOpenBtn.addEventListener("click", openCart);
cartCloseBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

renderProducts();