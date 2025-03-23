// Toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.querySelector(".eye-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "img/fi-eye.svg"; // Change to eye icon
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "img/fi-eye-off.svg"; // Change to eye-off icon
  }
}

// Redirect to a specific page
function redirectTo(page) {
  window.location.href = page;
}

// Login with Google (placeholder)
function loginWithGoogle() {
  alert("Redirecting to Google login...");
  redirectTo("photo.html");
}

// Handle form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (email && password) {
      alert("Login successful! Redirecting...");
      redirectTo("photo.html"); // Redirect to the photo page after successful login
    } else {
      alert("Please fill in all fields.");
    }
  });
