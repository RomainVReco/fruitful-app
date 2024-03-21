<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    echo "Testing";
    require_once(__DIR__  . "/../config/config.php");
 
    $sql = "SELECT * FROM utilisateur";
    $stmt = $mysqlClient->prepare($sql);
    $stmt->execute();
    $query_result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($query_result as $row) {
        foreach ($row as $key => $value) {
            echo $key . ': ' . $value . '<br>';
        }
        echo '<br>';
    }