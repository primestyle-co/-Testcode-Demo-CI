<?php

/**
 * GIT DEPLOYMENT SCRIPT
 *
 * Used for automatically deploying websites via GitHub
 *
 */

// array of commands
$commands = array(
    'echo $PWD',
    'whoami',
    'cd /srv/qa.primelabo.com.vn/Testcode-Demo-CI/public',
    'ls',
    'which git',
    './script.sh',
    // '/usr/bin/git pull origin main',
    // '/usr/bin/git pull git@github.com:primestyle-co/Testcode-Demo-CI.git main',
    // '/usr/bin/git status',
    // 'git submodule sync',
    // 'git submodule update',
    // 'git submodule status',
);

dd(system('git pull origin main'));

// exec commands
$output = '';
foreach ($commands as $command) {
    $tmp = shell_exec($command);

    $output .= "<span style=\"color: #6BE234;\">\$</span><span style=\"color: #729FCF;\">{$command}\n</span><br />";
    $output .= htmlentities(trim($tmp)) . "\n<br /><br />";
}
?>

<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>GIT DEPLOYMENT SCRIPT</title>
</head>

<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
    <div style="width:700px">
        <div style="float:left;width:350px;">
            <p style="color:white;">Git Deployment Script fdsfds</p>
            <?php echo $output; ?>
        </div>
    </div>
</body>

</html>