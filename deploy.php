<?php
namespace Deployer;

require 'recipe/laravel.php';
require './vendor/deployer/recipes/recipe/npm.php';

// Project name
set('application', 'html');
set('ssh_multiplexing', true);
set('repository', 'git@gitlab.com:byonchat-team/personal-shopper-v2.git');
set('clear_use_sudo', true);
set('keep_releases', 5);

set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', ['.env']);
set('shared_dirs', ['storage']);

// Writable dirs by web server 
set('writable_dirs', ['storage', 'vendor']);
set('allow_anonymous_stats', false);

// Hosts

host('pershop.byonchat.com')
    ->set('deploy_path', '/var/www/{{application}}')
    ->identityFile('~/.ssh/id_rsa')
    ->forwardAgent(true)
    ->addSshOption('UserKnownHostsFile', '/dev/null')
    ->addSshOption('StrictHostKeyChecking', 'no');
    
// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

/**
 * Upload .env.production file as .env
 */
task('environment', function () {
    upload('.env.production', '{{release_path}}/.env', [
        'options' => '-avz'
    ]);
})->desc('Environment setup');

desc('Generate application key');
task('artisan:key:generate', function () {
    $output = run('{{bin/php}} {{release_path}}/artisan key:generate --force');
    writeln('<info>' . $output . '</info>');
});

desc('Npm run production');
task('npm:production', function(){
    $output = run('cd {{release_path}} && {{bin/npm}} run production');
});

desc('Composer dump autoload');
task('composer:dump', function(){
    $output = run('cd {{release_path}} && composer dump-autoload');
    writeln('<info>'.$output.'</info>');
});

// install npm
after('deploy:update_code', 'npm:install');
// compile assets
after('npm:install', 'npm:production');
// composer dump autoloading class
after('rajaongkir:clean', 'composer:dump');
// copy .env.production to .env
after('deploy:writable', 'environment');
// generate app key
after('environment', 'artisan:key:generate');
// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.
before('deploy:symlink', 'artisan:migrate');

