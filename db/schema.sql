CREATE DATABASE burgers_db;
USE DATABASE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burger_name varchar
    (255) NOT NULL,
    devoured bit NOT NULL,
    PRIMARY KEY
    (id)
)
