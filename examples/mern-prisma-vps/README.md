# TestApp

## Links:

- staging: `stage-testapp.org`
- production: `prod-testapp.org`

<br/>
<hr/>

## Scripts:

- staging: `sh deploy -s`
- production: `sh deploy -p`

<br/>
<hr/>

## Util commands:

### pm2:

https://stackoverflow.com/questions/34821063/pm2-startup-not-starting-up-on-ubuntu

```
pm2 save
pm2 startup
```

### nginx:

```
sudo ln -s /etc/nginx/sites-available/testapp-prod /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/testapp-stage /etc/nginx/sites-enabled/

sudo nano /etc/nginx/sites-available/testapp.com.ar
sudo ln -s /etc/nginx/sites-available/testapp.com.ar /etc/nginx/sites-enabled/
sudo cp -r /home/testapp/staging/testapp-front/dist /var/www/testapp/staging
sudo cp -r /home/testapp/production/testapp-front/dist /var/www/testapp/production

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx

sudo tail -n 50 /var/log/nginx/error.log
sudo tail -n 50 /var/log/nginx/access.log
```

### certbot:

```
sudo certbot --nginx -d testappbar.com.ar
sudo certbot --nginx -d stage.testappbar.com.ar
```

### postgres:

```
sudo -i -u postgres
psql
psql -U postgres testapp_prod < /home/testapp/db/testapp_prod.sql
psql -U postgres testapp_stage < /home/testapp/db/testapp_stage.sql

sudo systemctl start postgresql.service
sudo systemctl status postgresql.service

pg_isready -d "postgresql://postgres:postgres@localhost:5432/testapp?schema=public"
```

### GH actinos:

[https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service
](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service)

sudo ./svc.sh install
sudo ./svc.sh start
sudo ./svc.sh status
sudo ./svc.sh stop
