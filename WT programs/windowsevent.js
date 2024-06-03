<!DOCTYPE html>
<html>
<head>
  <title>Window Events Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    .box {
      height: 1000px; /* To make the page scrollable */
    }
    .message {
      position: fixed;
      bottom: 10px;
      left: 10px;
      background-color: lightgray;
      padding: 10px;
      border: 1px solid black;
      display: none; /* Initially hidden */
    }
  </style>
</head>
<body>

<h1>Window Events Example</h1>
<div class="box">
  <p>Resize the window to see the effect.</p>
  <p>Scroll down the page to see the effect.</p>
</div>
<div class="message" id="message">Window event triggered!</div>

<script>
  // Function to handle window resize event
  function handleResize() {
    const message = document.getElementById('message');
    message.innerText = 'Window resized!';
    message.style.display = 'block';
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }

  // Function to handle window scroll event
  function handleScroll() {
    const message = document.getElementById('message');
    message.innerText = 'Window scrolled!';
    message.style.display = 'block';
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }

  // Attach event listeners for resize and scroll events
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
</script>

</body>
</html>