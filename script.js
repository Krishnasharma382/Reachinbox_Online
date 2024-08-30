document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (email === 'user@example.com' && password === 'password') {
        // Redirect to google-login.html
        window.location.href = 'google-login.html';
      } else {
        alert('Invalid email or password');
      }
    });
  
    const signinButton1 = document.getElementById('signin-btn-google');
    signinButton1.addEventListener('click', function () {
      window.location.href = 'https://reachinbox-assignment-4rf9.onrender.com/auth/google';
    });
  });
  