## Scripts:

```
sh deploy.sh
```

## Util commands:

### node:

- v20.11.1

npm install -g pnpm

### nginx:

```
sudo nano /etc/nginx/conf.d/ctesf5-app.duckdns.org.conf
sudo nano /etc/nginx/conf.d/admin-ctesf5-app.duckdns.org.conf

sudo cp -r /home/ec2-user/ctes-f5-app/frontend/dist /var/www/ctes-f5-app/

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx

sudo tail -n 50 /var/log/nginx/error.log
sudo tail -n 50 /var/log/nginx/access.log
```

sudo service nginx reload

- uncomment line: `# include /etc/nginx/default.d/*.conf;`

### certbot:

```
sudo certbot --nginx -d ctesf5-app.duckdns.org
sudo certbot --nginx -d admin-ctesf5-app.duckdns.org
```

### pocketbase

https://pocketbase.io/docs/going-to-production/

sudo nano /lib/systemd/system/pocketbase.service

chmod +x pocketbase-linux

```
systemctl enable pocketbase.service
systemctl start pocketbase
```
