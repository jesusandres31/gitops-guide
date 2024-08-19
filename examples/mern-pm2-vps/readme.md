# TestApp

<br/>
<hr/>

## Scripts:

```
sh deploy.sh
```

<br/>
<hr/>

## Util commands:

### node:

- v12.14.1

### pm2:

```
pm2 stop testapp-api
pm2 list
```

### nginx:

```
sudo nano /etc/nginx/sites-available/testapp.com

sudo ln -s /etc/nginx/sites-available/testapp.com /etc/nginx/sites-enabled/

sudo cp -r /home/ubuntu/testapp/testapp.frontend/build /var/www/testapp

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx

sudo tail -n 50 /var/log/nginx/error.log
sudo tail -n 50 /var/log/nginx/access.log
```

### certbot:

```
sudo certbot --nginx -d testapp.com
```
