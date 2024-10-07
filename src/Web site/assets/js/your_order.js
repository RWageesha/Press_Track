// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const orderId = params.get('orderId');
    
    // Display order details or load order information based on userId and orderId
    displayOrderDetails(userId, orderId);
}

// Function to display order details
function displayOrderDetails(userId, orderId) {
    // Example order data retrieval (in a real scenario, you would fetch this from a backend API)
    const exampleOrderData = {
        "ORD5678": {
            status: "In Progress",
            items: [
                { name: "Product 1", quantity: 2, price: 19.99 },
                { name: "Product 2", quantity: 1, price: 29.99 }
            ],
            total: 69.97
        }
    };

    const orderInfo = exampleOrderData[orderId];

    if (orderInfo) {
        // Constructing order details display
        let detailsHTML = `<h3>Order ID: ${orderId}</h3>`;
        detailsHTML += `<p>Status: ${orderInfo.status}</p>`;
        detailsHTML += `<h4>Items:</h4>`;
        detailsHTML += `<ul>`;

        orderInfo.items.forEach(item => {
            detailsHTML += `<li>${item.name} (Quantity: ${item.quantity}) - $${item.price.toFixed(2)}</li>`;
        });

        detailsHTML += `</ul>`;
        detailsHTML += `<h4>Total: $${orderInfo.total.toFixed(2)}</h4>`;

        document.getElementById('order-details').innerHTML = detailsHTML;
    } else {
        document.getElementById('order-details').innerText = 'Order not found. Please check your Order ID.';
    }
}

// Add event listener for the back button
document.getElementById('back-button').addEventListener('click', function() {
    // Redirect to the login page (assuming it's named 'login.html')
    window.location.href = 'login.html';
});

// Call the function to get and display the order details
getQueryParams();
