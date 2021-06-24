<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd", "root", "root2021");
$sql = "DELETE FROM salles WHERE id = $id";
$getClasse = $dbh->prepare($sql) ;
$getClasse->execute();
?>
