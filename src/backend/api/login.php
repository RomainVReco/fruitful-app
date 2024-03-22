<?php

require_once (__DIR__ . "/../config/config.php");

header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: *');

$_SESSION['user_id'] = "Romain";

//  A écrire...
$method = $_SERVER['REQUEST_METHOD'];
$user= file_get_contents('php://input');
$data=json_decode($user, true);
echo $data;

switch($method) {
    case "POST":
        $user= file_get_contents('php://input');
        $sql = "SELECT i_id_utilisateur marque FROM utilisateur WHERE s_email=:email AND s_mot_de_passe = :password";
        $stmt = $mysqlClient->prepare($sql);
        $stmt->bindParam(":email", $data['email'][0]);
        $stmt->bindParam(":password", $data['password'][0]);
        $stmt->execute();
        $query_result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($query_result)
}

foreach ($query_result as $row) {
    foreach ($row as $key => $value) {
        echo $key . ': ' . $value . '<br>';
    }
}

