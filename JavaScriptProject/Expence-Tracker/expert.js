document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Send Message
    const sendMessageButton = document.getElementById("send-message");
    sendMessageButton.addEventListener("click", sendMessage);

    // File Upload
    const fileUpload = document.getElementById("file-upload");
    fileUpload.addEventListener("change", handleFileUpload);

    // Image Upload
    const imageUpload = document.getElementById("image-upload");
    imageUpload.addEventListener("change", handleImageUpload);

    // Show Payment Options
    const paymentOptionsLink = document.getElementById("payment-options-link");
    paymentOptionsLink.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("payment-options").style.display = "block";
        document.querySelector('.chat-messages').style.display = "none";
        document.querySelector(".message-input").style.display = "none"; // Hide payment options container initially
    });

    // Pay Button
    // const payButton = document.getElementById("pay-button");
    // payButton.addEventListener("click", function() {
    //     document.getElementById("payment-options-container").style.display = "block";
    //     document.getElementById("qr-code").style.display = "none"; // Hide QR code initially
    // });

    // Function to send message
    function sendMessage() {
        const messageInput = document.getElementById("message-input");
        const chatMessages = document.getElementById("chat-messages");
        const messageText = messageInput.value.trim();
        const errorMessage = document.getElementById("error-message");
        const loadingSpinner = document.getElementById("loading-spinner");
        const messageSendSuccess = document.getElementById("message-send-success");

        // Clear previous success/error messages
        messageSendSuccess.textContent = "";
        errorMessage.textContent = "";

        if (messageText === "") {
            errorMessage.textContent = "Please enter a message.";
            return;
        }

        // Create new message element
        const newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.textContent = messageText;

        // Append message to chat messages
        chatMessages.appendChild(newMessage);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;

        loadingSpinner.style.display = "block";

        // Simulate message sending
        setTimeout(function() {
            loadingSpinner.style.display = "none";
            messageSendSuccess.textContent = "Message sent successfully!";
        }, 2000);
    }

    // Handle file upload
    function handleFileUpload() {
        const file = fileUpload.files[0];
        const fileUploadSuccess = document.getElementById("file-upload-success-message");
        const fileUploadError = document.getElementById("file-upload-error-message");

        // Clear previous messages
        fileUploadSuccess.textContent = "";
        fileUploadError.textContent = "";

        if (file) {
            fileUploadSuccess.textContent = `File "${file.name}" uploaded successfully.`;
        } else {
            fileUploadError.textContent = "File upload failed.";
        }
    }

    // Handle image upload
    function handleImageUpload() {
        const image = imageUpload.files[0];
        const imageUploadSuccess = document.getElementById("image-upload-success-message");
        const imageUploadError = document.getElementById("image-upload-error-message");

        // Clear previous messages
        imageUploadSuccess.textContent = "";
        imageUploadError.textContent = "";

        if (image) {
            imageUploadSuccess.textContent = `Image "${image.name}" uploaded successfully.`;
        } else {
            imageUploadError.textContent = "Image upload failed.";
        }
    }

    
});    
document.addEventListener("DOMContentLoaded", function () {
    // Show payment options when "Pay" button is clicked
    document.getElementById('pay-button').addEventListener('click', function() {
        document.getElementById('payment-options-container').style.display = 'block';
    });

    // Function to show respective payment forms
    function showPaymentForm(method) {
        // Hide all forms initially
        const forms = document.querySelectorAll('.payment-form');
        forms.forEach(form => form.style.display = 'none');

        // Show the selected payment form based on the payment method
        if (method === 'upi') {
            document.getElementById('upi-form').style.display = 'block';
        } else if (method === 'card') {
            document.getElementById('card-form').style.display = 'block';
        } else if (method === 'netbanking') {
            document.getElementById('netbanking-form').style.display = 'block';
        } else if (method === 'wallet') {
            document.getElementById('wallet-form').style.display = 'block';
        }
    }

    // Expose the function globally to be accessible from inline onclick attributes
    window.showPaymentForm = showPaymentForm;

    // Function to process the payment
    function processPayment(paymentType) {
        const paymentStatus = document.getElementById('payment-status');
        paymentStatus.style.display = 'block';
        paymentStatus.textContent = 'Payment Processing...';
    
        let isValid = false;
    
        // Validate based on payment type
        if (paymentType === 'UPI') {
            const upiId = document.getElementById('upi-id').value.trim();
            if (upiId === "") {
                paymentStatus.textContent = 'Please enter a valid UPI ID Or Scan Qr.';
                return;
            }
            isValid = true;
        } else if (paymentType === 'Card') {
            const cardNumber = document.getElementById('card-number').value.trim();
            const cardHolderName = document.getElementById('card-holder-name').value.trim();
            const expiryDate = document.getElementById('expiry-date').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
    
            if (cardNumber === "" || cardHolderName === "" || expiryDate === "" || cvv === "") {
                paymentStatus.textContent = 'Please fill in all card details.';
                return;
            }
            // You could add more validation, such as checking the card number length, CVV format, etc.
            isValid = true;
        } else if (paymentType === 'Net Banking') {
            const bankSelection = document.getElementById('bank-selection').value;
            if (bankSelection === "") {
                paymentStatus.textContent = 'Please select a bank.';
                return;
            }
            isValid = true;
        } else if (paymentType === 'Wallet') {
            const walletSelection = document.getElementById('wallet-selection').value;
            if (walletSelection === "") {
                paymentStatus.textContent = 'Please select a wallet.';
                return;
            }
            isValid = true;
        }
    
        // If all fields are valid, process the payment
        if (isValid) {
            paymentStatus.textContent = paymentType + " Payment Submitted Successfully!";
        }
    }
    

    // Expose the function globally to be accessible from inline onclick attributes
    window.processPayment = processPayment;
});