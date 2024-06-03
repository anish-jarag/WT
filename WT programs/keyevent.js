<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Event Handling</title>
</head>
<body>
<h1>key evnets</h1>
    <input  placeholder="type something">
    <button>Click Me!</button>
    <script>
        // Function to handle keydown event
	inp=document.querySelector("input")
        inp.addEventListener('keydown', function(event) {
            console.log("Key was pressed down:", event.key, event.code);
        });

        // Function to handle keyup event
        inp.addEventListener('keyup', function(event) {
            console.log("Key was pressed up:", event.key, event.code);
        });

        // Function to handle keypress event (only for printable characters)
        inp.addEventListener('keypress', function(event) {
            console.log("Key was pressed:", event.key, event.ode);
        });
    </script>
</body>
</html>
