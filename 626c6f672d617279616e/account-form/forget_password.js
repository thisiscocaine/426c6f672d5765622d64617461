document.getElementById('forgetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgetEmail').value;

    if (validateEmail(email)) {
        alert('Password reset link sent');
        startCountdown();
        // Further processing and sending data to the server
    } else {
        alert('Invalid email. Please check and try again.');
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function startCountdown() {
    let timeLeft = 60;
    const countdownElement = document.getElementById('countdown');
    const resendButton = document.getElementById('resendButton');
    resendButton.disabled = true;

    const countdownInterval = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = `Resend available in ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';
            resendButton.disabled = false;
        }
    }, 1000);
}

document.getElementById('resendButton').addEventListener('click', function() {
    alert('Password reset link resent');
    startCountdown();
    // Further processing and sending data to the server
});
