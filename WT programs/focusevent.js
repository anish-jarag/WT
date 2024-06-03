<!DOCTYPE html>
<html>
<head>
  <title>Focus Event Example</title>
  <style>
    .focused {
      border-color: blue;
      outline: none;
      box-shadow: 0 0 5px blue;
    }
  </style>
</head>
<body>

<h1>Focus Event Example</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>

<script>
  // Function to handle the focus event
  function handleFocus(event) {
    event.target.classList.add('focused');
  }

  // Function to handle the blur event
  function handleBlur(event) {
    event.target.classList.remove('focused');
  }

  // Get all input elements in the form
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

  // Attach focus and blur event listeners to each input element
  inputs.forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  });
</script>

</body>
</html>