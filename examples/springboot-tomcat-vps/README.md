# ticks-deploy

# server

ip: 192.168.200.101
user: ticks
psswd: ticks123

# deploy ticks

### MySql

1. install mysql

- psswd: Root123-

1. restore database

```
mysql -u root -p

CREATE DATABASE ticks;

mysql -u root -p ticks < dump-ticks-202310121717.sql

-

mysql -u root -p

SHOW DATABASES;

USE ticks;

SHOW TABLES;

SELECT * FROM users;
```

### Install Java and Maven

1. Java 11 and Maven >=3.6

```bash
# some commands

mvn compile

mvn clean package

mvn spring-boot:run
```

### Tomcat9

1. sudo apt-get install tomcat9

```
sudo systemctl enable tomcat9
sudo systemctl disable tomcat9

sudo systemctl start tomcat9
sudo systemctl stop tomcat9

sudo systemctl status tomcat9
```

### Config proj

- envs:

```
DB_URL=jdbc:mysql://localhost
DB_PORT=3306
DB_NAME=ticks
DB_USER=root
DB_PASSWORD=
```

1. cd ticks-feature-show-tick/

1. sudo nano src/main/resources/application.properties

```
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/ticks
spring.datasource.username=root
spring.datasource.password=Root123-
spring.jpa.hibernate.ddl-auto=update
spring.datasource.initialize=true
spring.jpa.show-sql=true

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.mvc.hiddenmethod.filter.enabled=true

web.baseUrl = http://localhost:8080
```

1. sudo nano pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <parent>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-parent</artifactId>
                <version>2.7.1</version>
                <relativePath/> <!-- lookup parent from repository -->
        </parent>
        <groupId>com.lab</groupId>
        <artifactId>ticks</artifactId>
        <version>0.0.1-SNAPSHOT</version>
        <name>ticks</name>
        <description>Proyecto en desarrollo</description>
        <properties>
                <java.version>11</java.version>
                <mapstruct.version>1.5.1.Final</mapstruct.version>
        </properties>
        <packaging>war</packaging> <!-- add this line -->
        <dependencies>
...

```

1. sudo nano src/main/java/com/lab/ticks/TicksApplication.java

```java
package com.lab.ticks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer; // add this pkg

@SpringBootApplication
public class TicksApplication extends SpringBootServletInitializer { // extends the class

        public static void main(String[] args) {
                SpringApplication.run(TicksApplication.class, args);
        }

}
```

1. create .war and cp to tomcat path

```
mvn clean package

sudo cp target/ticks-0.0.1-SNAPSHOT.war /var/lib/tomcat9/webapps/

ls /var/lib/tomcat9/webapps/
```

- go to http://192.168.200.101:8080/ticks-0.0.1-SNAPSHOT

- default admin user:

```
admin@admin.com
12345678
```

- set default tomcat:

```
cd /var/lib/tomcat9/webapps
sudo mv ROOT ROOT_backup
sudo ln -s ticks-0.0.1-SNAPSHOT ROOT
sudo service tomcat9 restart
```

### Nginx and Certbot

### esxi

```
192.168.100.1
Username: juanc
Password: Pass.4321.
```
