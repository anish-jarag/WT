<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Object Example</title>
</head>
<body>
    <script>
        // Create a simple Student object
        const student = {
            firstName: "Sakshi",
            lastName: "mae",
            age: 21,
            email: "sakshii@example.com",
            // Method to get the student's full name
            getFullName: function() {
                return this.firstName + " " + this.lastName;
            }
        };

        // Display the student's full name
        console.log("Full Name: " + student.getFullName());

        // Modify student's age
        student.age = 22;

        // Display updated age
        console.log("Updated Age: " + student.age);
    </script>
</body>
</html>

14. exception handling
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width ,initial-scale=1.0">
<title>Exception Handling</title>
</head>
<body>
<script>
function divide(a,b){
try{
if(b===0){
throw new ERROR("divide by zero is not allowed")
}
let result=a/b;
console.log(Result: ${result});
}catch(error){
console.log(ERROR:${error.message});
}
finally{
console.log("Execution completed");
}
}

divide(10,5);
divide(10,0);
divide(10,'a');
</script>
</body>
</html>
