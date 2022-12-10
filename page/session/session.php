<?php
include_once '../../components/gLibraries/gjson.php';
session_start();
error_reporting(0);
echo 'let permissions = ' . json_encode(gJSON::flatten($_SESSION['role']['permissions'])) . ';';

echo 'let datasession = ' . json_encode($_SESSION) . ';';