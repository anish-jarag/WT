<?php
// Define a sample array
$array = array(5, 2, 9, 1, 5, 6);

// 1. array_push
array_push($array, 4); // Adds 4 at the end of the array
echo "After array_push: ";
print_r($array);
echo "<br>";

// 2. array_pop
array_pop($array); // Removes the last element of the array
echo "After array_pop: ";
print_r($array);
echo "<br>";

// 3. array_shift
array_shift($array); // Removes the first element of the array
echo "After array_shift: ";
print_r($array);
echo "<br>";

// 4. array_unshift
array_unshift($array, 10); // Adds 10 at the beginning of the array
echo "After array_unshift: ";
print_r($array);
echo "<br>";

// 5. array_unique
$array = array(5, 2, 9, 1, 5, 6);
$uniqueArray = array_unique($array); // Removes duplicate values from the array
echo "After array_unique: ";
print_r($uniqueArray);
echo "<br>";
?>