<?php
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
$sql = " SELECT * FROM schoolstudents ";
$studentsQuery = $dbh->query($sql);
$getStudents = $studentsQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getStudents));
?>
