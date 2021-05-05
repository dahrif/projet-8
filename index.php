<?php
$servername = "localhost";
$username = "root";
$dbname="first";
$password = "root2021";

// Creer la connexion
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Checker connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM first.stagiaires";
$result = mysqli_query($conn, $sql);

// détermine le nombre de ligne : mysqli_num_rows()
if (mysqli_num_rows($result) > 0) {

  //Récupère une ligne de résultat sous forme de tableau associatif :mysqli_fetch_assoc()
  echo "<table border='2'>";
  echo "<tr><th> Id </th>";
  echo "<th> Nom </th></tr>";
  while($row = mysqli_fetch_assoc($result)) {

    echo  "<tr>"."<td>".$row["idstagiaires"]."</td>" ."<td>". $row["nom"]. "</td>"."</tr>";
  }
  echo "</table>";
}
else {
  echo "la table est vide";
}


mysqli_close($conn);
?> 