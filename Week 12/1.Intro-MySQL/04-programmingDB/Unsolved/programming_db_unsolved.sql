DROP DATABASE IF EXISTS programming_db;
CREATE DATABASE programming_db;
USE programming_db;

CREATE TABLE programming_languages (
  id INT AUTO_INCREMENT NOT NULL,
  languages VARCHAR(100) NOT NULL,
  rating INT,
  PRIMARY KEY (id)
);

INSERT INTO programming_languages (languages, rating)
VALUES ("C#", 100);
INSERT INTO programming_languages (languages, rating)
VALUES ("Java", 60);
INSERT INTO programming_languages (languages, rating)
VALUES ("Javascript", 70);
INSERT INTO programming_languages (languages, rating)
VALUES ("Python", 50);

-- Updates the row where the column name is peter --
UPDATE programming_languages
SET rating = true, rating = 40
WHERE id = 4;

SELECT * FROM programming_languages;

USE programming_db;
ALTER TABLE programming_languages 
ADD mastered BOOLEAN DEFAULT true
SELECT * FROM programming_languages;