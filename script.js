document.getElementById("signup-form").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    e.preventDefault(); // Prevent form submission
    alert("Passwords do not match!");
  }
});
