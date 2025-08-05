// sign up 


document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const signupButton = document.getElementById('signupButton');
    const successMessage = document.getElementById('successMessage');

    // Error elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validation functions
    function validateUsername(username) {
        const isValid = username.length >= 4;
        usernameError.textContent = 'Username must be at least 4 characters';
        usernameError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    function validatePassword(password) {
        const isValid = password.length >= 8 && /\d/.test(password);
        passwordError.textContent = 'Password must be at least 8 characters and contain at least one number';
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
    usernameInput.addEventListener('input', () => validateUsername(usernameInput.value));
    emailInput.addEventListener('input', () => validateEmail(emailInput.value));
    passwordInput.addEventListener('input', () => validatePassword(passwordInput.value));
    confirmPasswordInput.addEventListener('input', () => 
        validateConfirmPassword(passwordInput.value, confirmPasswordInput.value));

    // Form submission
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get values
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        // Validate all fields
        const isValid = [
            validateUsername(username),
            validateEmail(email),
            validatePassword(password),
            validateConfirmPassword(password, confirmPassword)
        ].every(Boolean);

        if (!isValid) return;

        // Disable button and show loading state
        signupButton.disabled = true;
        signupButton.textContent = 'Creating account...';

        try {
            // Simulate Firebase createUserWithEmailAndPassword
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Simulate sendEmailVerification
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Show success message
            successMessage.style.display = 'block';
            signupForm.reset();
            
            // Redirect to login page after 3 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
        } catch (error) {
            // Handle errors
            alert('Error creating account: ' + error.message);
        } finally {
            signupButton.disabled = false;
            signupButton.textContent = 'Sign Up';
        }
    });
});


// log in 