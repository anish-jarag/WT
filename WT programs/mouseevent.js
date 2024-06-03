<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Event Handling</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <div id="box">Hover over me to see the mouse events</div>
    <script>
        const box = document.getElementById('box');

        // Function to handle mouseover event
        box.addEventListener('mouseover', function(event) {
            console.log("Mouseover event");
        });

        // Function to handle mouseout event
        box.addEventListener('mouseout', function(event) {
            console.log("Mouseout event");
        });

        // Function to handle mouseup event
        box.addEventListener('mouseup', function(event) {
            console.log("Mouseup event");
        });

        // Function to handle mousedown event
        box.addEventListener('mousedown', function(event) {
            console.log("Mousedown event");
        });

        // Function to handle mousemove event
        document.addEventListener('mousemove', function(event) {
            console.log("Mousemove event");
        });

        // Function to handle mouseenter event
        box.addEventListener('mouseenter', function(event) {
            console.log("Mouseenter event");
        });
    </script>
</body>
</html>
