const mysql = require('mysql2');
const quizzes = require("./seedData.js")

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  port: 3306,
  user: 'root', // Replace with your database username
  password: 'password', // Replace with your database password
  database: 'emp' // Replace with your database name
});

connection.query(`CREATE TABLE quizzes (quiz_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, quiz_name VARCHAR(255))`)
connection.query(`CREATE TABLE questions (question_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, question_number INT NOT NULL, question VARCHAR(255),quiz_id INT, FOREIGN KEY (quiz_id) REFERENCES quizzes (quiz_id));`)
connection.query(`CREATE TABLE answers (answer_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY,a VARCHAR(255), b VARCHAR(255), c VARCHAR(255), d VARCHAR(255), answer VARCHAR(255), question_id INT, FOREIGN KEY (question_id) REFERENCES questions (question_id));`)
let x = 1;
Object.keys(quizzes).forEach((quiz, index) => {
  let y = 1;
  connection.query(`INSERT INTO quizzes (quiz_name) VALUES (?)`, quiz)
  quizzes[quiz].forEach((item) => {
    let q = item[0];
    let a = item[1];
    q.question_number = y;
    q.quiz_id = (index + 1);
    a.question_id = x;
    connection.query(`INSERT INTO questions SET ?`,q);
    connection.query(`INSERT INTO answers SET ?`,a);
    x += 1;
    y += 1;
  
})

});

connection.end();