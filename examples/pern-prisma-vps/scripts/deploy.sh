#!/bin/bash

#
# use example:
# sh deploy.sh -s
# sh deploy.sh -p
#

deploy() {
  local env=$1
  local env_abb=$2

  pwd 

  echo "ENV DEPLOYMENT: "$env""

  echo "BACKEND:"

  cd /home/testapp/$env/testapp-back
  
  pm2 stop testapp-$env_abb
  
  git checkout $env
  git branch
  git pull

  npm i
  npx prisma generate
  npm run start:$env_abb
  pm2 save
  
  echo "FRONTEND:"

  cd /home/testapp/$env/testapp-front
  
  git checkout $env
  git branch
  git pull

  npm i
  npm run build:$env_abb
  sudo cp -r /home/testapp/$env/testapp-front/dist /var/www/testapp/$env

  sudo nginx -t
  sudo systemctl restart nginx
  sudo systemctl status nginx
  
  echo "Done!"
}

# Start...
while getopts ":psd" opt; do
  case $opt in
    s)
      deploy staging stage
      ;;
    p)
      deploy production prod
      ;;
    \?)
      echo "Invalid Option: -$OPTARG"
      exit 1
      ;;
  esac
done