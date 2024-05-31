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


document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButton = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
  
    togglePasswordButton.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
  
      // Toggle button text
      togglePasswordButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });
  
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        const response = await fetch('https://your-backend-url.herokuapp.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('token', data.token);
          setTimeout(() => {
            localStorage.removeItem('token');
            alert('Session timed out. Please log in again.');
            window.location.href = 'index.html';
          }, 40000); // 40 seconds timeout
          window.location.href = 'home.html';
        } else {
          alert('Login failed');
        }
      });
    }
  
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
      });
    }
  
    if (window.location.pathname !== '/index.html' && !localStorage.getItem('token')) {
      window.location.href = 'index.html';
    }
  });
  