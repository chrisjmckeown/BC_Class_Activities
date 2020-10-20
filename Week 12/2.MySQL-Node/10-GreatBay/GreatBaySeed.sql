DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  startingbid int DEFAULT 0,
  currentbid int DEFAULT 0,
  PRIMARY KEY (id)
);