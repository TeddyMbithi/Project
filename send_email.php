<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Check if inputs are valid
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = ["status" => "error", "message" => "Please fill out all fields correctly."];
        echo json_encode($response);
        exit;
    }

    // Email details
    $to = "kamititechsolutions@gmail.com";
    $subject = "New Service Request from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        $response = ["status" => "success", "message" => "Thank you! Your message has been sent."];
    } else {
        $response = ["status" => "error", "message" => "Sorry, something went wrong. Please try again later."];
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    $response = ["status" => "error", "message" => "Invalid request method."];
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>