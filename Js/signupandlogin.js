// toggle password
const inputPassword = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const confirmPassword = document.getElementById('confirmPassword');
const toggleconfirmPassword = document.getElementById('toggleconfirmPassword');

// Password toggle
togglePassword.addEventListener('click', function () {
  const type =
    inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Confirm password toggle
if (toggleconfirmPassword) {
  toggleconfirmPassword.addEventListener('click', function () {
    const type =
      confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
}

// sign up
document.addEventListener('DOMContentLoaded', () => {
  // Form elements
  const signupForm = document.getElementById('signupForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const signupButton = document.getElementById('signupButton');
  const successMessage = document.getElementById('successMessage');

  // Check if elements exist
  if (
    !signupForm ||
    !usernameInput ||
    !passwordInput ||
    !confirmPasswordInput ||
    !signupButton
  ) {
    console.error('One or more form elements not found');
    return;
  }

  // Error elements
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Validation functions
  function validateUsername(username) {
    const isValid = username.length >= 4;
    usernameError.textContent = 'Username must be at least 4 characters';
    usernameError.style.display = isValid ? 'none' : 'block';
    return isValid;
  }

  function validatePassword(password) {
    const isValid = password.length >= 8 && /\d/.test(password);
    passwordError.textContent =
      'Password must be at least 8 characters and contain at least one number';
    passwordError.style.display = isValid ? 'none' : 'block';
    return isValid;
  }

  function validateConfirmPassword(password, confirmPassword) {
    const isValid = password === confirmPassword && confirmPassword.length > 0;
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPasswordError.style.display = isValid ? 'none' : 'block';
    return isValid;
  }

  // Real-time validation
  usernameInput.addEventListener('input', () =>
    validateUsername(usernameInput.value)
  );
  passwordInput.addEventListener('input', () =>
    validatePassword(passwordInput.value)
  );
  confirmPasswordInput.addEventListener('input', () =>
    validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)
  );

  // Form submission
  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get values
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate all fields
    const isValid = [
      validateUsername(username),
      validatePassword(password),
      validateConfirmPassword(password, confirmPassword),
    ].every(Boolean);

    if (!isValid) return;

    // Disable button and show loading state
    signupButton.disabled = true;
    signupButton.textContent = 'Creating account...';

    try {
      const response = await registerUser(username, password);
      if (response) {
        successMessage.textContent =
          'You have successfully registered, proceed to login';
        successMessage.style.display = 'block';
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);
      }
    } catch (error) {
      usernameError.textContent = error.message;
      usernameError.style.display = 'block';
    } finally {
      signupButton.disabled = false;
      signupButton.textContent = 'Sign Up'; // Reset text
    }
  });
});

// log in validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('login');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');

  // Validation functions
  function validateUsername(value) {
    const isEmpty = !value.trim();
    let isValid = true;

    if (isEmpty) {
      usernameError.textContent = 'Please enter your username.';
      usernameError.style.display = 'block';
      isValid = false;
    } else {
      usernameError.style.display = 'none';
    }
    return isValid;
  }

  function validatePassword(password) {
    const isEmpty = !password;
    const isValidLength = password.length >= 8;
    let isValid = true;

    if (isEmpty) {
      passwordError.textContent = 'Please enter your password.';
      passwordError.style.display = 'block';
      isValid = false;
    } else if (!isValidLength) {
      passwordError.textContent =
        'Password must be at least 8 characters long.';
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }
    return isValid;
  }

  // Real-time validation
  usernameInput.addEventListener('input', () =>
    validateUsername(usernameInput.value)
  );
  passwordInput.addEventListener('input', () =>
    validatePassword(passwordInput.value)
  );

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Validate all fields
    const isValid = [
      validateUsername(username),
      validatePassword(password),
    ].every(Boolean);

    if (!isValid) return;

    // Disable button and show loading state
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    try {
      const token = await loginUser(username, password);
      if (token) {
        localStorage.setItem('authToken', token);
        successMessage.textContent = 'Login successful!';
        successMessage.style.display = 'block';
        // Optionally redirect or store token
        // Redirect to landing page after a short delay
        setTimeout(() => {
          window.location.href = 'moviecatalogue.html'; //
        }, 2000);
      }
    } catch (error) {
      usernameError.textContent = error.message;
      usernameError.style.display = 'block';
    } finally {
      loginButton.disabled = false;
    }
  });
});

// authentication with database
var token = '';

// register user

async function registerUser(username, password) {
  const data = await fetch(
    'https://virtual-cinema-backend.onrender.com/api/v1/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  const response = await data.json();
  if (!data.ok) {
    console.log(`HTTP error! status: ${data.status}`, response);
    throw new Error(response.message || 'Registration failed');
  }
  console.log('Registration successful:', response);
  return response; // Return on success
}

// login user
async function loginUser(username, password) {
  const data = await fetch(
    'https://virtual-cinema-backend.onrender.com/api/v1/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  const response = await data.json();
  if (!data.ok) {
    console.log(`HTTP error! status: ${data.status}`, response);
    throw new Error(response.message || 'Login failed');
  }
  return response.data.token;
}

// get user profile
async function getUserProfile(token) {
  const data = await fetch(
    'https://virtual-cinema-backend.onrender.com/api/v1/user/profile',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const response = await data.json();
  if (!data.ok) {
    console.log(`HTTP error! status: ${response.message}`);
    return;
  }
  return response.data;
}

// Wrap the test calls in an async IIFE (Immediately Invoked Function Expression)
// (async () => {
//   try {
//     await registerUser('testuser', 'testpassword');
//     const token = await loginUser('testuser', 'testpassword');
//     if (token) {
//       const profile = await getUserProfile(token);
//       console.log(profile);
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// })();
