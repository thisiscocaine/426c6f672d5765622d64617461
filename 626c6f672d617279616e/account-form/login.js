document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailPhone = document.getElementById('loginEmailPhone').value;
    const password = document.getElementById('loginPassword').value;

    if (validateEmailPhone(emailPhone) && password) {
        alert('Login Successful');
        // Further processing and sending data to the server
    } else {
        alert('Invalid login details. Please check and try again.');
    }
});

document.getElementById('passKeyLogin').addEventListener('click', function() {
    alert('Pass Key Login clicked');
    // Implement Pass Key login functionality
});

function validateEmailPhone(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
}
