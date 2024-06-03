document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phoneNo = document.getElementById('phoneNo').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPass = document.getElementById('confirmPass').value.trim();

  // Validate first name
  if (firstName === "") {
    alert('First Name is required.');
    return;
  }

  // Validate last name
  if (lastName === "") {
    alert('Last Name is required.');
    return;
  }

  // Validate phone number (simple pattern for demonstration)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneNo)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate password length
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Validate confirm password
  if (password !== confirmPass) {
    alert('Passwords do not match.');
    return;
  }

  // If all validations pass, submit the form
  alert('Form submitted successfully!');
  document.getElementById('registrationForm').submit();
});