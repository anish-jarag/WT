<?php
// Define an associative array
$student = array(
    "first_name" => "John",
    "last_name" => "Doe",
    "age" => 20,
    "course" => "Computer Science"
);

// Display the associative array
foreach($student as $key => $value) {
    echo "$key: $value<br>";
}
?>