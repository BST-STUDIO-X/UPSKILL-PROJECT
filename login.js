
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usernameOrEmailInput = document.getElementById("usernameOrEmail");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login");
    const usernameOrEmailError = document.getElementById("usernameOrEmailError");
    const passwordError = document.getElementById("passwordError");

    // Validation functions
    function validateUsernameOrEmail(value) {
        const isEmpty = !value.trim();
        const isEmail = value.includes("@");
        let isValid = true;

        if (isEmpty) {
            usernameOrEmailError.textContent = "Please enter your username or email.";
            usernameOrEmailError.style.display = "block";
            isValid = false;
        } else if (isEmail) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                usernameOrEmailError.textContent = "Please enter a valid email address.";
                usernameOrEmailError.style.display = "block";
                isValid = false;
            } else {
                usernameOrEmailError.style.display = "none";
            }
        } else {
            usernameOrEmailError.style.display = "none";
        }
        return isValid;
    }

    function validatePassword(password) {
        const isEmpty = !password;
        const isValidLength = password.length >= 8;
        let isValid = true;

        if (isEmpty) {
            passwordError.textContent = "Please enter your password.";
            passwordError.style.display = "block";
            isValid = false;
        } else if (!isValidLength) {
            passwordError.textContent = "Password must be at least 8 characters long.";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }
        return isValid;
    }

    // Real-time validation
    usernameOrEmailInput.addEventListener("input", () => validateUsernameOrEmail(usernameOrEmailInput.value));
    passwordInput.addEventListener("input", () => validatePassword(passwordInput.value));

    // Form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const usernameOrEmail = usernameOrEmailInput.value.trim();
        const password = passwordInput.value;

        // Validate all fields
        const isValid = [
            validateUsernameOrEmail(usernameOrEmail),
            validatePassword(password)
        ].every(Boolean);

        if (!isValid) return;

        // Disable button and show loading state
        loginButton.disabled = true;
        loginButton.textContent = "Logging in...";

        try {
            // Simulate Firebase signInWithEmailAndPassword
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Redirect to dashboard or home page after successful login
            window.location.href = "dashboard.html";
        } catch (error) {
            // Handle errors (e.g., wrong credentials)
            usernameOrEmailError.textContent = "Invalid username/email or password.";
            usernameOrEmailError.style.display = "block";
        } finally {
            loginButton.disabled = false;
            loginButton.textContent = "Log In";
        }
    });
});
