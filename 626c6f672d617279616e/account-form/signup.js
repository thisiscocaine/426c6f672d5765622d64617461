document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailPhone = document.getElementById('signUpEmailPhone').value;
    const password = document.getElementById('signUpPassword').value;

    if (validateEmailPhone(emailPhone) && validatePassword(password)) {
        alert('Sign Up Successful');
        // Further processing and sending data to the server
    } else {
        alert('Invalid details. Please check and try again.');
    }
});

function validateEmailPhone(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
}

function validatePassword(password) {
    return password.length >= 8;
}
