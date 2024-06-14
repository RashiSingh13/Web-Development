// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById('message').textContent = '';

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        document.getElementById('message').textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Passwords do not match.';
        return;
    }

    // Success message
    document.getElementById('message').textContent = 'Registration successful!';
    document.getElementById('message').style.color = 'green';

    // Clear form
    document.getElementById('registrationForm').reset();
});
