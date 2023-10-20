# Schema for WWCode Hackathon 2023 - Textbook Quiz Maker

create database textbookquizmaker;

create table textbook (
  id int not null auto_increment primary key,
  title varchar(100),
  author varchar(50),
  subject varchar(30),
  epub_link varchar(50)
) engine = InnoDB;

create table student (
  id int not null auto_increment primary key,
  username varchar(20),
  password varchar(20),
  first_name varchar(20),
  last_name varchar(20),
  school_name varchar(50),
  grade char(2)
) engine = InnoDB;

create table quiz (
  id int not null auto_increment primary key,
  textbook_id int not null
) engine = InnoDB;

create table quiz_question (
  id int not null auto_increment primary key,
  textbook_id int not null,
  highlighted_text long varchar,
  full_sentence long varchar,
  quiz_question varchar(280)
) engine = InnoDB;

alter table quiz_question
  add foreign key (textbook_id)
  references textbook(id)
;

alter table quiz_question
  add foreign key (quiz_id)
  reference quiz(id)
;

create table student_quiz_answer (
  id int not null auto_increment primary key,
  student_id int not null,
  quiz_question_id int not null,
  student_answer varchar(280)
) engine = InnoDB;

alter table student_quiz_answer
  add foreign key (student_id)
  references student(id)
;

alter table student_quiz_answer
  add foreign key (quiz_question_id)
  references quiz_question(id)
;