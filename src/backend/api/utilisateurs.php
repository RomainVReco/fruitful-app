<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    echo "Testing";

    try {
        $mysqlClient = new PDO('mysql:host=localhost;dbname=fruitful;port=3306;charset=utf8mb4', 'root', '');
    
    } catch (Exception $exception) {
        die('Erreur : ' . $exception->getMessage());
    }

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