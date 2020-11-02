CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
id, author, chirp, and 
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp varchar(255) NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
