const mysql = require('mysql2');
const quizzes = require("./seedData.js")
const users = require("./userData.js");
const scores = [
  {quiz_id: 1, score: 15500, user_id: 3},
  {quiz_id: 2, score: 21630, user_id: 4},
  {quiz_id: 4, score: 19800, user_id: 2}
];

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  port: 3306,
  user: 'root', // Replace with your database username
  password: 'password', // Replace with your database password
  database: 'emp' // Replace with your database name
});
try{

  //drop previous tables
  connection.query(`SET FOREIGN_KEY_CHECKS = 0;`)
  connection.query(`DROP TABLE IF EXISTS quizzes;`);
  connection.query(`DROP TABLE IF EXISTS questions;`);
  connection.query(`DROP TABLE IF EXISTS answers;`);
  connection.query(`DROP TABLE IF EXISTS users;`);
  connection.query(`DROP TABLE IF EXISTS scores;`);

  //create new tables
  connection.query(`SET FOREIGN_KEY_CHECKS = 1;`)
  connection.query(`CREATE TABLE quizzes (quiz_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, quiz_name VARCHAR(255))`)
  connection.query(`CREATE TABLE questions (question_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, question_number INT NOT NULL, question VARCHAR(255),quiz_id INT, FOREIGN KEY (quiz_id) REFERENCES quizzes (quiz_id));`)
  connection.query(`CREATE TABLE answers (answer_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY,a VARCHAR(255), b VARCHAR(255), c VARCHAR(255), d VARCHAR(255), answer VARCHAR(255), question_id INT, FOREIGN KEY (question_id) REFERENCES questions (question_id));`)
  connection.query(`CREATE TABLE users (user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255));`)
  connection.query(`CREATE TABLE scores (score_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, quiz_id INT NOT NULL, score INT NOT NULL, user_id INT NOT NULL, FOREIGN KEY (user_id) REFERENCES users (user_id));`)


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

  users.forEach((user) => {
    const sql = 'INSERT INTO users SET ?';

    connection.query(sql,user,(error) => {
      if(error){
        console.log('Error occured when inserting user data: ', error);
      }else{
      }
    });
  });

  scores.forEach((score) => {
    const sql = 'INSERT INTO scores SET ?';

    connection.query(sql,score,(error) => {
      if(error){
        console.log('Error occured when inserting user data: ', error);
      }else{
      }
    });
  });


}catch(error){
  console.log(error)
}

connection.end();
console.log("Data seeded succesfully!")