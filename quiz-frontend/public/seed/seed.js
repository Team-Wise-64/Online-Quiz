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
connection.query(`CREATE TABLE questions (question_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), a VARCHAR(255), b VARCHAR(255), c VARCHAR(255), d VARCHAR(255), answer VARCHAR(255), quiz_id INT, FOREIGN KEY (quiz_id) REFERENCES quizzes (quiz_id));`)
Object.keys(quizzes).forEach((quiz, index) => {
  connection.query(`INSERT INTO quizzes (quiz_name) VALUES (?)`, quiz)
  quizzes[quiz].forEach((item) => {
    item.quiz_id = (index + 1);
    connection.query(`INSERT INTO questions SET ?`,item, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data inserted successfully');
    }
  });
  })
  
});

connection.end();