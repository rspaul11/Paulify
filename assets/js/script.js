// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Form Validation
    const form = document.querySelector('.form-container form');
    const errorMessage = document.querySelector('.error-message');
    const loadingIndicator = document.querySelector('.loading-indicator');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error messages
        errorMessage.textContent = '';
        let hasError = false;

        // Validate inputs (example: check if fields are empty)
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                hasError = true;
                errorMessage.textContent = 'Please fill out all fields.';
            } else {
                input.classList.remove('error');
            }
        });

        if (hasError) return; // Stop if there are errors

        // Show loading indicator
        loadingIndicator.style.display = 'block';

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            loadingIndicator.style.display = 'none';
            alert('Form submitted successfully!');
            form.reset(); // Reset the form
        }, 2000);
    });

    // Cart Management
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = 0;

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    // Example function to add items to the cart
    function addToCart() {
        cartCount++;
        updateCartCount();
    }

    // Example: Add to cart button (replace with your button)
    const addToCartButton = document.querySelector('.add-to-cart-button');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal Functionality
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');

    // Function to open modal
    function openModal() {
        modal.classList.add('active');
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Example: Open modal on a button click (replace with your button)
    const openModalButton = document.querySelector('.open-modal-button');
    if (openModalButton) {
        openModalButton.addEventListener('click', openModal);
    }

    // Close modal when clicking on the close button
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside of the modal content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});