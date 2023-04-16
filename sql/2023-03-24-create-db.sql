-- 1. Создайте БД university. В БД university сформулируйте SQL запрос для создания
-- таблицы students. Структура таблицы students:
create database university_1;
use university_1;
create table students(
id int primary key AUTO_INCREMENT,
name varchar(20) not null,
surname varchar(40) not null,
age INT NOT NULL,
course INT NOT NULL
);