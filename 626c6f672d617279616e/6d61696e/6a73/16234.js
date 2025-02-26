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
        msgElement.innerText = "Oops, unable to copy password.";
        
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
        msgElement.innerText = "Password copied.";
        
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



        (function() {
            // Disable Right-click
            document.addEventListener('contextmenu', event => event.preventDefault());
    
            // Disable DevTools, View Source & Other Hotkeys
            document.addEventListener('keydown', function(event) {
                if (
                    event.key === "F12" || 
                    (event.ctrlKey && (event.key === 'u' || event.key === 'U')) ||  // Ctrl+U (View Source)
                    (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.key === 'J' || event.key === 'j')) || // Ctrl+Shift+I/J (DevTools)
                    (event.ctrlKey && (event.key === 'S' || event.key === 's')) || // Ctrl+S (Save Page)
                    (event.ctrlKey && (event.key === 'P' || event.key === 'p')) // Ctrl+P (Print Page)
                ) {
                    event.preventDefault();
                    return false;
                }
            });
    
            // Advanced DevTools Detection & Prevention
            function devToolsCheck() {
                let before = performance.now();
                debugger;
                let after = performance.now();
                if (after - before > 100) {
                    document.body.innerHTML = "<h1>Access Denied</h1>";
                    setTimeout(() => { while (true) {} }, 1000); // Freeze Page
                }
            }
    
            setInterval(devToolsCheck, 1000);
    
            // Fake Source Injection (For Ctrl+U Bypass)
            Object.defineProperty(document, "onkeydown", {
                get: function() {
                    return function() {
                        return false;
                    };
                }
            });
    
            // Disable Double Click Selection
            document.addEventListener('dblclick', function(event) {
                event.preventDefault();
            });
    
            // Prevent Debugging via Console
            setInterval(function() {
                console.clear();
                console.log("%c Stop Trying to Hack!", "color: red; font-size: 20px; font-weight: bold;");
            }, 1000);
    
        })();
    
    
    
