<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
$sql = "UPDATE salles SET numero = :numero,capacite = :capacite,nb_tableaux = :nb_tableaux,formateur = :formateur WHERE id = $id";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":name",$_POST["name"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":capacite",$_POST["capacite"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":nb_tableaux",$_POST["nb_tableaux"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":formateur",$_POST["formateur"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>
