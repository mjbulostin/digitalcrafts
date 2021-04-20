CREATE DATABASE tododatabase;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KeyboardEvent, -- MAKE THIS ID UNIQUE FROM ANY OTHER IDS
    description VARCHAR(255)

)

CREATE TABLE gamer(
    gamer_id SERIAL PRIMARY KeyboardEvent,
    userid SERIAL,
    userName VARCHAR(20)
    platform
)

CREATE TABLE platform(
    platform_id SERIAL PRIMARY KEY,
    platformName VARCHAR(20)
    gamerPlatform
)