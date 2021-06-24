<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
$sql = "UPDATE salles SET numero = :numero,capacite = :capacite,nb_tableaux = :nb_tableaux,formateur = :formateur WHERE id = $id";
$addClassesQuery = $dbh->prepare($sql);
$addClassesQuery->bindParam(":numero",$_POST["numero"],PDO::PARAM_STR);
$addClassesQuery->bindParam(":capacite",$_POST["capacite"],PDO::PARAM_STR);
$addClassesQuery->bindParam(":nb_tableaux",$_POST["nb_tableaux"],PDO::PARAM_STR);
$addClassesQuery->bindParam(":formateur",$_POST["formateur"],PDO::PARAM_STR);
$addClassesQuery->execute();
?>
