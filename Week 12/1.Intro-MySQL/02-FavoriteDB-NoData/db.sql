Create database favorite_db;

Create TABLE favorite_foods  (
  food VARCHAR(50) NOT NULL,
  score INT
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  food VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(50),
  -- Make an integer column called "score" --
  score INT
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INT NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(100) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  -- Make an integer column called "score" --
  score INT,
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);