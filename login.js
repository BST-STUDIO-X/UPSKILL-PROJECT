document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const userInput = document.getElementById("usernameOrEmail");
    const passInput = document.getElementById("password");
    const warning = document.getElementById("warning");
  
    form.addEventListener("submit", (e) => {
      // clear previous warning
      warning.textContent = "";
      warning.style.color = "red";
  
      const userVal = userInput.value.trim();
      const passVal = passInput.value;
  
      // Check non-empty
      if (!userVal) {
        warning.textContent = "Please enter your username or email.";
        userInput.focus();
        e.preventDefault();
        return;
      }
  
      // If it looks like an email, do a basic regex‐check
      if (userVal.includes("@")) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userVal)) {
          warning.textContent = "Please enter a valid email address.";
          userInput.focus();
          e.preventDefault();
          return;
        }
      }
  
      // Password checks
      if (!passVal) {
        warning.textContent = "Please enter your password.";
        passInput.focus();
        e.preventDefault();
        return;
      }
      if (passVal.length < 8) {
        warning.textContent = "Password must be at least 8 characters long.";
        passInput.focus();
        e.preventDefault();
        return;
      }
    });
  });
  
