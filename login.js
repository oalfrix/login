document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded credentials, replace with your own logic
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to a protected page
        window.location.href = 'page1.html';
    } else {
        alert('Invalid username or password');
    }
});
