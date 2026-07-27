<?php

set_exception_handler(function ($e) {
    echo get_class($e) . ': ' . $e->getMessage() . PHP_EOL;
    echo $e->getTraceAsString();
    exit(1);
});

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$status = $app->handleCommand(new Symfony\Component\Console\Input\ArgvInput());

exit($status);
