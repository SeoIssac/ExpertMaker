use expertname;
CREATE TABLE if not exists Users
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     IPaddress VARCHAR(20) NOT NULL,
     Progression VARCHAR(20),
     Score VARCHAR(20)
);
CREATE TABLE if not exists Questions
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     Question VARCHAR(500) NOT NULL,
     Usable_Functions VARCHAR(50) NOT NULL,
     Hint VARCHAR(500) NOT NULL,
     Answer VARCHAR(500) NOT NULL
);
CREATE TABLE if not exists Functions
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     Function_Name VARCHAR(50) NOT NULL,
     Function_info VARCHAR(500) NOT NULL
);
CREATE TABLE if not exists Solve
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     user_ID INT,
     fOREIGN KEY(user_ID) REFERENCES Users(ID) ON UPDATE CASCADE,
     question_ID INT,
     fOREIGN KEY(question_ID) REFERENCES Questions(ID) ON UPDATE CASCADE,
     Solving_Date DATETIME NOT NULL,
     Submitted_Answer VARCHAR(500),
     Correctness INT DEFAULT 0
);
CREATE TABLE if not exists Refer
(
     ID INT PRIMARY KEY AUTO_INCREMENT,
	 user_ID INT,
     fOREIGN KEY(user_ID) REFERENCES Users(ID) ON UPDATE CASCADE,
     function_ID INT,
     fOREIGN KEY(function_ID) REFERENCES Functions(ID) ON UPDATE CASCADE,
     Refering_Date DATETIME NOT NULL,
     Search_Word VARCHAR(50)
);