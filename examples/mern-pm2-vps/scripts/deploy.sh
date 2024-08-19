#!/bin/bash

echo "##### RUN DEPLOY SCRIPT #####" 

echo "BACKEND:"

cd /home/ubunutu/testapp/testapp.api
  
pm2 stop testapp-api
  
git checkout master
git branch
git pull

npm i
npm run start:pm2
pm2 save
  
echo "FRONTEND:"

cd /home/ubunutu/testapp.frontend
  
git checkout master
git branch
git pull

npm i
npm run build
sudo cp -r /home/ubunt/testapp/testapp.frontend/build /var/www/testapp

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx
  
echo "Done!"