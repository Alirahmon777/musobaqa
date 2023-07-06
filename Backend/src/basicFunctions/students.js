import { readFile, writeFile } from '../utils/fileSystem.js';
import { getNextId } from '../utils/helpers.js';

export const studentsCRUD = (app) => {
  // GET all students
  app.get('/students', (req, res) => {
    try {
      const students = readFile('students.json');
      res.send(students);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // GET student by ID
  app.get('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const students = readFile('students.json');
      const student = students.find((student) => student.id === id);
      res.send(student);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // POST a new student
  app.post('/students', (req, res) => {
    try {
      const { ism, yosh, familya, jinsi, tel_raqam, guruh, t_username, rasm } = req.body
      const students = readFile('students.json')

      if (!ism || !yosh || !familya || !guruh, !t_username || !rasm) {
        res.statusCode = 400
        res.send({ message: 'All fields are required' })
        return
      }


      students.push({
        id: getNextId(students),
        ism, yosh, familya, jinsi, tel_raqam, guruh, t_username, rasm
      })

      writeFile('students.json', students)
      console.log(students);
      res.send(students)

    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // PUT a student by ID
  app.put('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { ism, familya, tel_raqam, yosh, t_username, guruh } = req.body;
      const students = readFile('students.json');
      const student = students.find((s) => s.id == id);
      student.ism = ism ? ism : student.ism;
      student.familya = familya ? familya : student.familya;
      student.tel_raqam = tel_raqam ? tel_raqam : student.tel_raqam;
      student.yosh = yosh ? yosh : student.yosh;
      student.t_username = t_username ? t_username : student.t_username;
      student.guruh = guruh ? guruh : student.guruh;
      student.rasm = rasm ? rasm : student.rasm;

      writeFile('students.json', students);
      res.statusCode = 200;
      res.send(students);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  app.delete('/students/:id', (req, res) => {
    try {
      console.log('delete');
      const id = parseInt(req.params.id);
      const students = readFile('students.json');
      const deletedStudent = students.filter((student) => student.id != id);
      writeFile('students.json', deletedStudent);
      res.send(deletedStudent);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // PATCH a student by ID
  app.patch('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
  });
};
