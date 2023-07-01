// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// app.use(bodyParser.json());

// const studentsJsonPath = './students.json';

// // GET all students
// app.get('/students', (req, res) => {
//     const students = readStudentsFile();
//     res.json(students);
// });

// // GET student by ID
// app.get('/students/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const students = readStudentsFile();
//     const student = students.find(student => student.id === id);
//     res.json(student);
// });

// // POST a new student
// app.post('/students', (req, res) => {
//     const newStudent = req.body;
//     const students = readStudentsFile();
//     newStudent.id = getNextId(students);
//     students.push(newStudent);
//     writeStudentsFile(students);
//     res.json(newStudent);
// });

// // PUT a student by ID
// app.put('/students/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const updateStudent = req.body;
//     const students = readStudentsFile();
//     const index = students.findIndex(student => student.id === id);
//     students[index] = updateStudent;
//     writeStudentsFile(students);
//     res.json(updateStudent);
// });

// // PATCH a student by ID
// app.patch('/students/:id', (req, res) => {
//     const id = parseInt(req.params.id);

// })

// const port = 3000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));