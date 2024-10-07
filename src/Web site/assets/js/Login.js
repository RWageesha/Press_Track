// Handle the first step: login with email and user ID
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the user input
    const userId = document.getElementById('userId').value;
    const email = document.getElementById('email').value;

    // Example credentials for demo purposes
    const validUserId = '1234';        // Hardcoded valid user ID for demonstration
    const validEmail = 'user123@gmail.com';  // Hardcoded valid email for demonstration

    // Check if the input matches the valid credentials
    if (userId === validUserId && email === validEmail) {
        // Store the userId and email in localStorage
        localStorage.setItem('userId', userId);
        localStorage.setItem('email', email);

        // Hide the login form and show the Order ID form
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('order-id-section').style.display = 'block';
    } else {
        // Show an error message if login fails
        document.getElementById('login-error').style.display = 'block';
        document.getElementById('login-error').innerText = 'Invalid login credentials. Please try again.';
    }
});

// Handle the second step: submit the Order ID
document.getElementById('order-id-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the order ID from the form
    const orderId = document.getElementById('orderId').value;
    const userId = localStorage.getItem('userId'); // Retrieve the userId from localStorage
    const email = localStorage.getItem('email');   // Retrieve the email from localStorage

    // Example order ID validation (for demo purposes)
    const validOrderId = 'ORD5678';  // Hardcoded valid order ID for demonstration

    if (orderId === validOrderId) {
        // Redirect to 'your_order.html' page after successful validation
        window.location.href = `your_order.html?userId=${userId}&orderId=${orderId}`;
    } else {
        // Display an error message if order not found
        document.getElementById('order-error').innerText = 'Order not found. Please check your Order ID.';
        document.getElementById('order-error').style.display = 'block';
    }
});
