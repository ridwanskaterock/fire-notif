<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Firebase\firebaseLib;

const DEFAULT_URL = 'https://fire-notif.firebaseio.com/';
const KEY = 'q1rcKg8zxPUySGntLfnIYNMFufq2';
const DEFAULT_PATH = '/'.KEY . '/notify';

$firebase = new \Firebase\FirebaseLib(DEFAULT_URL);

$dateTime = new DateTime();

if (isset($_POST['message']) AND !empty($_POST['message'])) {
	$firebase->push(DEFAULT_PATH , [
		'message' => $_POST['message'],
		'datatime' => $dateTime
		]);

	echo json_encode([
		'success' => true,
		'message' => 'successfully send message'
		]);
} else {
	echo json_encode([
		'success' => false,
		'message' => 'please fill message first'
		]);
}

