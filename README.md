# node-express-mysql-boilerplate
## Description
boilerplate for the purpose of being used for future services

## Technologies
- [NodeJS] - evented I/O for the backend!
- [Mysql] - relational database!
- [Express] - fast node.js network app framework!

## DB
```JSON
DROP SCHEMA IF EXISTS salesSystemsDB;

CREATE DATABASE salesSystemsDB
   DEFAULT CHARACTER SET = 'utf8mb4';

USE salesSystemsDB;

CREATE TABLE customer(
customerId int(255) auto_increment not null,
firstName varchar(50) not null,
lastName varchar(50) not null,
email varchar(50) not null,
updateAt datetime null,
createAt datetime DEFAULT CURRENT_TIMESTAMP,	
CONSTRAINT pk_task PRIMARY KEY(customerId)
)ENGINE =innoDb;

INSERT INTO salesSystemsDB.customer (customerId, firstName, lastName, email) 
VALUES (1, 'alina', 'gutierrez', 'alina@gmail.com');
```