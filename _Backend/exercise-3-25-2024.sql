-- Create db name as purwadhika_student, purwadhika_schedule, purwadhika_branch --
CREATE DATABASE  purwadhika_student; 
CREATE DATABASE  purwadhika_schedule;
CREATE DATABASE  purwadhika_branch;

-- Show list of database with name contain purwadhika.
 SHOW DATABASES LIKE "%purwadhika%";

-- Delete database purwadhika_schedule
DROP DATABASE purwadhika_schedule;

-- Create table name as Students in purwadhika_student db, with field id, last_name, first_name, address, city. 
-- The id field should be in integer type while the rest is varchar.
CREATE TABLE purwadhika_student.Students (
    id INT UNIQUE AUTO_INCREMENT,
    last_name VARCHAR(45),
	first_name VARCHAR(45),
    address VARCHAR(225),
    city VARCHAR(45)
);

-- Add email column into table Students with type varchar
ALTER TABLE purwadhika_student.Students ADD (
	email VARCHAR(45)
);

-- Add gender, batch_code, phone_number, alternative_phone_number column in single query.
ALTER TABLE purwadhika_student.Students ADD (
	gender VARCHAR(45),
	batch_code VARCHAR(45),
    phone_number INT(15),
    alternative_phone_number  INT(15)
);

-- Change alternative_phone_number column name into description with varchar type.
ALTER TABLE  purwadhika_student.Students CHANGE  alternative_phone_number description VARCHAR(225);

-- Remove column gender in table Students
ALTER TABLE purwadhika_student.Students DROP COLUMN gender;

-- Since you already create purwadhika_branch database, use that db to complete this exercise.
-- 1. Try to create table with output look like image below:
CREATE TABLE  purwadhika_branch.Branch (
	id INT UNIQUE AUTO_INCREMENT,
    branch_name VARCHAR(3),
    pic VARCHAR(15),
    address VARCHAR(45),
    city VARCHAR(45),
    province VARCHAR(45)
);

INSERT INTO purwadhika_branch.Branch VALUES
(NULL, "BSD", "THOMAS", "GREEN OFFICE PARK 9", "BSD", "TANGERANG"),
(NULL, "JKT", "BUDI", "MSIG TOWER", "JAKARTA SELETAN", "JAKARTA"),
(NULL, "BTM", "ANGEL", "NONGSA", "BATAM", "KEP. RIAU");

-- 2. Change PIC name into Dono if city is BSD
UPDATE purwadhika_branch.Branch SET pic = "Dono" WHERE id = 1;

-- 3. Add another branch with branch name BLI, pic is Tono, address is Gianyar, city is Gianyar, province is Bali
INSERT INTO purwadhika_branch.Branch VALUES(NULL, "BLI", "Tono", "Gianyar", "Gianyar", "Bali");

SELECT * FROM purwadhika_branch.Branch;


-- Go to https://dev.mysql.com/doc/index-other.html and download sakila db. Extract and import sakila data intoyour MySQL.
-- 1. Display the first and last names of all actors from the table actor.

SELECT last_name FROM sakila.actor;

-- 2. You need to find the ID number, first name, and last name of an actor, of whom you know only the first
-- name, "Joe." What is one query would you use to obtain this information?
SELECT * FROM sakila.actor WHERE first_name = "Joe";

-- 3. Display the address, district, and city_id from address only for district: California, Alberta and Mekka
SELECT ad.address, ad.district, ad.city_id FROM sakila.address ad
WHERE district in ("California", "Alberta", "Mekka");

-- 4. Count actor with last name WOOD from table actors.
SELECT count(last_name) as total_actor FROM actor WHERE last_name = 'WOOD';

-- 5. Shows list of customer_id and sum of amount spent that made payment more than 20
SELECT customer_id, SUM(amount) as total from sakila.payment GROUP BY customer_id;

-- 1. Add new actor into table actors with name JHONNY DAVIS
INSERT INTO sakila.actor (first_name, last_name) 
VALUES ("JHONNY", "DAVIS");

-- 2. There are several new actor to add. Add new actor into table actors with name ADAM DAVIS, JEREMY DAVIS,
-- CRAIG DAVIS, STEVE DAVIS in a single query.
INSERT INTO sakila.actor (first_name, last_name) 
VALUES ("ADAM", "DAVIS"), ("JEREMY", "DAVIS"), ("CRAIG", "DAVIS"), ("STEVE", "DAVIS");

-- 3. Count how many actors with last name DAVIS
SELECT count(last_name)  as total_actor FROM sakila.actor WHERE last_name = "DAVIS";

-- #4. Delete actor with last name DAVIS and first name JENNIFER.
-- Menonaktifkan pengecekan foreign key sementara
SET foreign_key_checks = 0;

-- Menghapus entri dari tabel anak (film_actor) yang terkait dengan aktor yang akan dihapus
DELETE FROM sakila.film_actor 
WHERE actor_id IN (
    SELECT actor_id 
    FROM sakila.actor 
    WHERE first_name = "JENNIFER" AND last_name ="DAVIS"
);

-- Menghapus aktor dari tabel induk (actor)
DELETE FROM sakila.actor 
WHERE first_name = "JENNIFER" AND last_name ="DAVIS";

-- Mengaktifkan kembali pengecekan foreign key
SET foreign_key_checks = 1;

-- 5. Update actor with last name DAVIS and change his/her first name into GEORGE
UPDATE sakila.actor SET first_name = "GEORGE" WHERE last_name="DAVIS";

-- 6. Find top 10 actor with the most perform on film.
SELECT a.actor_id, a.first_name, a.last_name, COUNT(fc.film_id) AS qty_film
FROM sakila.film_actor fc 
JOIN sakila.actor a ON fc.actor_id = a.actor_id 
GROUP BY a.actor_id, a.first_name, a.last_name
ORDER BY qty_film DESC
LIMIT 10;

-- 7. Display title, description, length, and rating from film, where special features include deleted scenes and behind
-- the scenes order by most length
SELECT title, description, length, rating, special_features FROM sakila.film
WHERE special_features LIKE "%Deleted Scenes%"
ORDER BY length DESC;

-- 8. Display country and total of inactive customer (active = 0) from country where customer active = 0 order by the
-- highest inactive (active = 0) customer
SELECT co.country, COUNT(ci.country_id) as jml_country
FROM sakila.customer c
JOIN sakila.address a ON c.address_id = a.address_id
JOIN sakila.city ci ON ci.city_id = a.city_id
JOIN sakila.country co ON co.country_id = ci.country_id
WHERE active = 0
GROUP BY co.country
ORDER BY jml_country DESC;






