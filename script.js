// Variables for modals
const signInBtn = document.getElementById('signInBtn');
const loginBtn = document.getElementById('loginBtn');
const aboutBtn = document.getElementById('aboutBtn');
const productsBtn = document.getElementById('productsBtn');
const purchasesBtn = document.getElementById('purchasesBtn');
const cartBtn = document.getElementById('cartBtn');
const modal = document.getElementById('authModal');
const closeModal = document.getElementsByClassName('close')[0];
const authForm = document.getElementById('authForm');
const cartCountElement = document.getElementById('cartCount');
const cartItemsElement = document.getElementById('cartItems');
const emptyCartMsg = document.getElementById('emptyCartMsg');

// Sections
const aboutSection = document.getElementById('aboutSection');
const productsSection = document.getElementById('productsSection');
const cartSection = document.getElementById('cartSection');
const purchasesSection = document.getElementById('purchasesSection');

// Show modal for Sign In and Login
let isSignIn = true;
signInBtn.onclick = function() {
    openModal('Sign In');
};
loginBtn.onclick = function() {
    openModal('Login');
};

function openModal(title) {
    isSignIn = title === 'Sign In';
    document.getElementById('authTitle').innerText = title;
    modal.style.display = 'flex';
}

// Close modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Submit form (Sign In / Login)
authForm.onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (isSignIn) {
        alert(`Welcome, ${name}! Your account has been created.`);
    } else {
        alert(`Welcome back, ${name}! You are now logged in.`);
    }

    modal.style.display = 'none';
};

// About Us section
aboutBtn.onclick = function() {
    hideAllSections();
    aboutSection.style.display = 'block';
};

// Products section
productsBtn.onclick = function() {
    hideAllSections();
    productsSection.style.display = 'block';
};

// Cart section
cartBtn.onclick = function() {
    hideAllSections();
    cartSection.style.display = 'block';

    // Show or hide empty cart message
    if (cartItemsElement.children.length === 0) {
        emptyCartMsg.style.display = 'block';
    } else {
        emptyCartMsg.style.display = 'none';
    }
};

// Purchases section
purchasesBtn.onclick = function() {
    hideAllSections();
    purchasesSection.style.display = 'block';
};

// Hide all sections initially
function hideAllSections() {
    aboutSection.style.display = 'none';
    productsSection.style.display = 'none';
    cartSection.style.display = 'none';
    purchasesSection.style.display = 'none';
}

// Add to cart functionality
const addToCartButtons = document.getElementsByClassName('addToCartBtn');
for (let button of addToCartButtons) {
    button.addEventListener('click', function() {
        const productName = this.parentElement.getAttribute('data-name');
        const productPrice = this.parentElement.getAttribute('data-price');
        
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice}`;
        cartItemsElement.appendChild(cartItem);
        
        // Update cart count
        let cartCount = parseInt(cartCountElement.textContent);
        cartCountElement.textContent = ++cartCount;

        // Hide empty cart message
        emptyCartMsg.style.display = 'none';
    });
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
