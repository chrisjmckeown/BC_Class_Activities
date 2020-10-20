DROP DATABASE IF EXISTS orders_db;
CREATE DATABASE orders_db;
USE orders_db;

CREATE TABLE Persons (
    PersonID int NOT NULL,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY (PersonID)
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);