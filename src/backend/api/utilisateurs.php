<?php
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
if(!isset($_SESSION)) {
   session_start();
}
// csrf code add here (see below...)
$http_origin = $_SERVER['HTTP_ORIGIN'];
if ($http_origin == "http://dev.local:3000" || $http_origin == "http://localhost:3000"){
    header("Access-Control-Allow-Origin: $http_origin");
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');

    require_once(__DIR__  . "/../config/config.php");
 @
    $sql = "SELECT * FROM utilisateur";
    $stmt = $mysqlClient->prepare($sql);
    $stmt->execute();
    $query_result = $stmt->fetchAll(PDO::FETCH_ASSOC);

   foreach ($query_result as $row) {
        foreach ($row as $key => $value) {
            echo $key . ': ' . $value . '<br>';
        }
    } 

echo "Cookie";
echo json_encode($_COOKIE);