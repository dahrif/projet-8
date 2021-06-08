<?php
$dbh= new PDO ("mysql:host=localhost:3306 ; dbname=schoolstd", "root", "root2021");
$sql="INSERT INTO schoolstudents(name, fathername, rollno, degree, branch) VALUE(:name, :fathername, :rollno, :degree, :branch)";
$addStudentsQuery= $dbh -> prepare($sql);
$addStudentsQuery-> bindParam(":name", $POST["name"], PDO:: PARAM_STR);
$addStudentsQuery-> bindParam(":fathername", $POST["fathername"], PDO:: PARAM_STR);
$addStudentsQuery-> bindParam(":rollno", $POST["rollno"], PDO:: PARAM_STR);
$addStudentsQuery-> bindParam(":degree", $POST["degree"], PDO:: PARAM_STR);
$addStudentsQuery-> bindParam(":branch", $POST["branch"], PDO:: PARAM_STR);
$addStudentsQuery-> execute();
 ?>