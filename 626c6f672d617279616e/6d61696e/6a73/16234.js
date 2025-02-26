async function copyPassword() {
    const passwordField = document.getElementById('password');
    
    // Check if the password is empty before attempting to copy
    if (!passwordField.value.trim()) {
        // Create and display the error message in red at the top
        const msgElement = document.createElement('div');
        msgElement.style.position = 'fixed';
        msgElement.style.top = '20px';
        msgElement.style.left = '50%';
        msgElement.style.transform = 'translateX(-50%)';
        msgElement.style.backgroundColor = 'red'; // Red background for error
        msgElement.style.color = '#fff';
        msgElement.style.padding = '10px';
        msgElement.style.borderRadius = '5px';
        msgElement.style.fontSize = '16px';
        msgElement.innerText = "Oops, unable to copy password! Please generate a password first.";
        
        // Append the error message and remove it after 3 seconds
        document.body.appendChild(msgElement);
        setTimeout(() => {
            msgElement.remove();
        }, 3000);
        return; // Exit the function to prevent copying
    }

    try {
        // Ensure the context is valid for clipboard operations (ensure user action)
        if (!document.hasFocus()) {
            console.warn('Clipboard operation denied due to page focus.');
            alert('Please interact with the page before attempting to copy.');
            return;
        }

        // Use the Clipboard API for secure clipboard access
        await navigator.clipboard.writeText(passwordField.value);
        
        // Create and display the success message in green at the top
        const msgElement = document.createElement('div');
        msgElement.style.position = 'fixed';
        msgElement.style.top = '20px';
        msgElement.style.left = '50%';
        msgElement.style.transform = 'translateX(-50%)';
        msgElement.style.backgroundColor = 'green'; // Green background for success
        msgElement.style.color = '#fff';
        msgElement.style.padding = '10px';
        msgElement.style.borderRadius = '5px';
        msgElement.style.fontSize = '16px';
        msgElement.innerText = "arisksec says Password copied to clipboard!";
        
        // Append the success message and remove it after 3 seconds
        document.body.appendChild(msgElement);
        setTimeout(() => {
            msgElement.remove();
        }, 3000);
    } catch (err) {
        // In case of error, log the specific error securely
        console.error('Clipboard access failed:', err);
        
        // Alert the user with a generic error message, preventing leakage of sensitive info
        alert("Oops, unable to copy password! Please try again.");
    }
}
