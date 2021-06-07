<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd", "root", "root2021");
$sql = "DELETE FROM salles WHERE id = $id";
$getStudents = $dbh->prepare($sql) ;
$getStudents->execute();
?>
