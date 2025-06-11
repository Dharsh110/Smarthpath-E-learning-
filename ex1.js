// JavaScript for form validation and feedback submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    let valid = true;

    // Validate Name Field
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameField.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate Email Field
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate Password Field
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordField.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        e.preventDefault(); // Prevent actual form submission for demo purposes
        alert('Feedback sent successfully! Thank you for your feedback.');
        document.getElementById('feedbackForm').reset(); // Reset form fields
    } else {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
