USE topSongs_db;

CREATE TABLE albums (
  id INT NOT NULL,
  artist VARCHAR(50) NOT NULL,
  ablum VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  raw_total FLOAT NULL,
  raw_usa FLOAT NULL,
  raw_uk FLOAT NULL,
  raw_eur FLOAT NULL,
  raw_row FLOAT NULL,
  PRIMARY KEY (id)
);