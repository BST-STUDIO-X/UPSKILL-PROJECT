//Sign up page for studio x project
const signupForm = document.getElementById('signupForm');
const warning = getElementById('warning');

signupForm.addEventListener('submit', function(e) {
      e.preventDefault();  // This prevents form from submitting at default

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      

      // Validate fields are not empty
      if (!username || !password || !confirmPassword) {
          alert('All fields are required.');
          return;
      }

      //Username must be atleast 6 characters
      if(username.length < 4){
        warning.textcontent = 'username must contain more than 4 characters'
      }

      // Email must have @ and .
      if (!email.includes('@') || !email.includes('.')) {
          warning.textcontent = 'Enter a valid email';
      }

      // Validate password


      // Validate confirm password


      //Success message, if all parameters is good

       // Get users from LocalStorage or initialize an empty array if none exist
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Add new user to the array
      users.push({ username, password });

      // Save updated users array back to LocalStorage
      localStorage.setItem('users', JSON.stringify(users));


     //Success message, if all parameters is good


      // Redirect to login page after 1 second
      setTimeout(() => {
          window.location.href = 'login.html';
      }, 1000);
  });
      
   

