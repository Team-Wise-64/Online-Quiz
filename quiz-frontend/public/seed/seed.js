const mysql = require('mysql2');
const quizzes = require("./seedData.js")

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  port: 3306,
  user: 'root', // Replace with your database username
  password: 'password', // Replace with your database password
  database: 'emp' // Replace with your database name
});

Object.keys(quizzes).forEach((quiz, index) => {
  connection.query(`CREATE TABLE ${quiz} (question_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), a VARCHAR(255), b VARCHAR(255), c VARCHAR(255), d VARCHAR(255), answer VARCHAR(255));`)
  
  quizzes[quiz].forEach((item) => {
    connection.query(`INSERT INTO ${quiz} SET ?`,item, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data inserted successfully');
    }
  });
  })
  
});

connection.end();