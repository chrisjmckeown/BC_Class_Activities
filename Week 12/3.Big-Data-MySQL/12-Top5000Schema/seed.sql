DROP DATABASE IF EXISTS topSongs_db;

CREATE DATABASE topSongs_db;

USE topSongs_db;

CREATE TABLE top5000 (
  ranking INT NOT NULL,
  artist VARCHAR(50) NOT NULL,
  song VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  raw_total FLOAT NULL,
  raw_usa FLOAT NULL,
  raw_uk FLOAT NULL,
  raw_eur FLOAT NULL,
  raw_row FLOAT NULL,
  PRIMARY KEY (ranking)
);


INSERT INTO products (ranking,  artist,  song,  year,  raw_total,  raw_usa,  raw_uk,  raw_eur,  raw_row)
VALUES (1,"Bing Crosby","White Christmas",1942,39.903,23.929,5.7,2.185,0.54)
,(2,"Bill Haley & his Comets","Rock Around the Clock",1955,36.503,19.961,7.458,5.663,0.76)
,(3,"Celine Dion","My Heart Will Go On",1998,35.405,12.636,8.944,23.701,3.61)
SELECT * FROM top5000;