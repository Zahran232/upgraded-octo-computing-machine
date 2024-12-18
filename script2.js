// Basic HTML structure for the login page
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f9;
    }
    .login-container {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;
      text-align: center;
    }
    .login-container h1 {
      margin-bottom: 20px;
      color: #333;
    }
    .login-container input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .login-container button {
      width: 100%;
      padding: 10px;
      background-color: #007BFF;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .login-container button:hover {
      background-color: #0056b3;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Username" required />
    <input type="password" id="password" placeholder="Password" required />
    <button id="loginButton">Login</button>
    <p class="error" id="errorMessage"></p>
  </div>

  <script>
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');

    // Sample credentials
    const validCredentials = {
      username: 'admin',
      password: 'password123'
    };

    loginButton.addEventListener('click', () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Basic validation
      if (username === validCredentials.username && password === validCredentials.password) {
        alert('Login successful!');
        // Redirect to dashboard or homepage
        window.location.href = '/home';
      } else {
        errorMessage.textContent = 'Invalid username or password';
      }
    });
  </script>
</body>
</html>
`;

// Write the HTML to a file (Node.js example, optional)
const fs = require('fs');
fs.writeFileSync('login.html', html, 'utf8');

console.log('Login page has been created as login.html');
