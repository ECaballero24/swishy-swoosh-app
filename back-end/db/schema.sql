DROP DATABASE IF EXISTS swishy_swoosh_app;
CREATE DATABASE swishy_swoosh_app;

\c swishy_swoosh_app;

DROP TABLE IF EXISTS sneakers;

    CREATE TABLE sneakers(
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    size INTEGER,
    price INTEGER,
    rating NUMERIC,
    CHECK (rating >=0 AND rating <= 5),
    featured BOOLEAN,
    image TEXT
);
