<?php

try {
    $mysqlClient = new PDO('mysql:host=localhost;dbname=fruitful;port=3306;charset=utf8mb4', 'root', '');} catch (Exception $exception) {
    die('Erreur : ' . $exception->getMessage());
}