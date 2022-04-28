#!/usr/bin/fish
ssh ek@192.168.0.2 'rm -rf /var/www/lestudio/static/*';
scp -r build ek@192.168.0.2:/var/www/lestudio/static/;
scp -r ../backend/static/* ek@192.168.0.2:/var/www/lestudio/static;
ssh ek@192.168.0.2 'rm -rf /var/www/lestudio/module/*';
scp -r ../backend/module/* ek@192.168.0.2:/var/www/lestudio/module;