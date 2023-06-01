USE expertname;
DROP TABLE Functions;
DROP TABLE Answers;
DROP TABLE Hints;
DROP TABLE Questions;
CREATE TABLE if not exists Questions
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     Level VARCHAR(20) NOT NULL,
     Qnum INT NOT NULL,
     Question VARCHAR(500) NOT NULL,
     Usable_Functions VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX QNL on Questions(Level, Qnum);
CREATE TABLE if not exists Answers
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     question_ID INT,
     fOREIGN KEY(question_ID) REFERENCES Questions(ID) ON UPDATE CASCADE,
     Answer VARCHAR(500) NOT NULL
);
CREATE TABLE if not exists Hints
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     question_ID INT,
     fOREIGN KEY(question_ID) REFERENCES Questions(ID) ON UPDATE CASCADE,
     Hint VARCHAR(500) NOT NULL
);
CREATE TABLE if not exists Functions
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     Function_Name VARCHAR(50) NOT NULL,
     Function_info VARCHAR(500) NOT NULL
);