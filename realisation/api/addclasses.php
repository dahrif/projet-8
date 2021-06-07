<?php
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
$sql = " INSERT INTO salles(numero,capacite,nb_tableaux,formateur) VALUES (:numero,:capacite,:nb_tableaux,:formateur)";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":numero",$_POST["numero"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":capacite",$_POST["capacite"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":nb_tableaux",$_POST["nb_tableaux"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":formateur",$_POST["formateur"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>