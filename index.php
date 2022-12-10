<?php
session_start();
if ($_SESSION['username']) {
    header('location: ./home');
} else {
    header('location: ./login');
}