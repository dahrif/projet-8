<?php
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root2021");
$sql = " SELECT * FROM salles ";
$classesQuery = $dbh->query($sql);
$getclasses = $classesQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getclasses));
?>
