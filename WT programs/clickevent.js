<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Event</title>
</head>
<body>
    <h1>CLICK EVENT</h1>
    <h3>Let's start the demo</h3>
    <p>This is a sample paragraph</p>
    <button>Click me</button>

    <script>
        let h1 = document.querySelector("h1");
        let h3 = document.querySelector("h3");
        let p = document.querySelector("p");
        let btn = document.querySelector("button");  // Correctly select the button element

        function changecolor() {
            console.log(this.innerText);  // Corrected 'innertext' to 'innerText'
            this.style.backgroundColor = "blue";
        }

        // Correctly add event listeners to each element
        p.addEventListener("click", changecolor);
        h1.addEventListener("click", changecolor);
        h3.addEventListener("click", changecolor);
        btn.addEventListener("click", changecolor);
    </script>
</body>
</html>
