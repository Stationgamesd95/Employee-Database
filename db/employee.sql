DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;
USE employee_tracker_db;

CREATE Table department (
id int PRIMARY KEY,
name VARCHAR(30) NULL
);

CREATE TABLE role (
id int PRIMARY KEY,
title VARCHAR(30) NULL,
salary DECIMAL (12,4)
department_id int null
);

CREATE TABLE employee (
  id int PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id NULL,
  manager_id int NULL,
  PRIMARY KEY (position)
);

SELECT * FROM employee;