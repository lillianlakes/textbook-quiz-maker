# Schema for WWCode Hackathon 2023 - Textbook Quiz Maker

create database textbookquizmaker;

create table textbook (
  id int not null auto_increment primary key,
  title varchar(30),
  author varchar(30),
  subject varchar(30)
) engine = InnoDB;

create table student (
  id int not null auto_increment primary key,
  username varchar(20),
  password varchar(20),
  first_name varchar(20),
  last_name varchar(20),
  school_name varchar(50),
  grade char(1)
) engine = InnoDB;

create table highlighted_text (
  id int not null auto_increment primary key,
  textbook_id int not null,
  highlighted_text long varchar
) engine = InnoDB;

alter table highlighted_text
  add foreign key (textbook_id)
  references textbook(id)
;

create table quiz (
  id int not null auto_increment primary key,
  textbook_id int not null
) engine = InnoDB;

create table quiz_question (
  id int not null auto_increment primary key,
  quiz_id int not null,
  question varchar(50),
  answer1 varchar(50), # this is the correct answer
  answer2 varchar(50),
  answer3 varchar(50),
  answer4 varchar(50)
) engine = InnoDB;

create table student_quiz_result (
  id int not null auto_increment primary key,
  student_id int not null,
  quiz_id int not null,
  number_of_questions_on_quiz int,
  number_of_questions_answered int,
  number_of_questions_correct int
) engine = InnoDB;

alter table student_quiz_result
  add foreign key (student_id)
  references student(id)
;

alter table student_quiz_result
  add foreign key (quiz_id)
  references quiz(id)
;