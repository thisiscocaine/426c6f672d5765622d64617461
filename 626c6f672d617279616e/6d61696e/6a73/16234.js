function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    try {
        const successful = document.execCommand("copy");
        const msg = successful ? "Password copied" : "Failed to copy password.";
        
        // Create and display the success message in green color at the top
        const msgElement = document.createElement('div');
        msgElement.style.position = 'fixed';
        msgElement.style.top = '20px';
        msgElement.style.left = '50%';
        msgElement.style.transform = 'translateX(-50%)';
        msgElement.style.backgroundColor = 'green';
        msgElement.style.color = '#fff';
        msgElement.style.padding = '10px';
        msgElement.style.borderRadius = '5px';
        msgElement.style.fontSize = '16px';
        msgElement.innerText = msg;
        
        // Append the message and remove it after 3 seconds
        document.body.appendChild(msgElement);
        setTimeout(() => {
            msgElement.remove();
        }, 3000);
        
    } catch (err) {
        alert("Oops, unable to copy password!");
    }
}
