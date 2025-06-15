document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        if (!validateLogin(username, password)) {
            return;
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.text();
            document.body.innerHTML = result;
        } catch (error) {
            showMessage(loginForm, 'An error occurred. Please try again.', 'error');
        }
    });
    loginForm.appendChild(messageDiv.cloneNode(true));

    // Signup form handler
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (!validateSignup(username, password, confirmPassword)) {
            return;
        }

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.text();
            document.body.innerHTML = result;
        } catch (error) {
            showMessage(signupForm, 'An error occurred. Please try again.', 'error');
        }
    });
    signupForm.appendChild(messageDiv.cloneNode(true));

    function validateLogin(username, password) {
        if (username.trim().length < 3) {
            showMessage(loginForm, 'Username must be at least 3 characters long', 'error');
            return false;
        }
        
        if (password.length < 8) {
            showMessage(loginForm, 'Password must be at least 8 characters long', 'error');
            return false;
        }
        
        return true;
    }

    function validateSignup(username, password, confirmPassword) {
        if (username.trim().length < 3) {
            showMessage(signupForm, 'Username must be at least 3 characters long', 'error');
            return false;
        }
        
        if (password.length < 8) {
            showMessage(signupForm, 'Password must be at least 8 characters long', 'error');
            return false;
        }

        if (password !== confirmPassword) {
            showMessage(signupForm, 'Passwords do not match', 'error');
            return false;
        }
        
        return true;
    }

    function showMessage(form, text, type) {
        const messageDiv = form.querySelector('.message');
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
    }
});

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}
