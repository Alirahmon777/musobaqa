import { readFile, writeFile } from '../utils/fileSystem.js';
import { getNextId } from '../utils/helpers.js';
import multer from 'multer';

const upload = multer({
  dest: 'uploads/', // specify the destination folder for storing the uploaded files
  limits: {
    fileSize: 5 * 1024 * 1024, // limit the file size to 5MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true); // accept only jpeg and png files
    } else {
      cb(new Error('Only jpeg and png files are allowed')); // reject other file types
    }
  },
});

export const studentsCRUD = (app) => {
  // GET all students
  app.get('/students', (req, res) => {
    try {
      const students = readFile('students.json');
      res.send(students);
    } catch (err) {
      res.statusCode = 500;
      res.send({ message: 'Internal server error' });
    }
  });

  // GET student by ID
  app.get('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const students = readFile('students.json');
      const student = students.find((student) => student.id === id);
      if (student) {
        res.send(student);
      } else {
        res.statusCode = 404;
        res.send({ message: 'Student not found' });
      }
    } catch (err) {
      res.statusCode = 500;
      res.send({ message: 'Internal server error' });
    }
  });

  // POST a new student
  app.post('/students', upload.single('rasm'), (req, res) => {
    try {
      const { ism, yosh, familya, jinsi, tel_raqam, guruh, t_username } = req.body;
      const rasm = req.file;

      if (!ism || !yosh || !familya || !jinsi || !tel_raqam || !guruh || !t_username || !rasm) {
        res.statusCode = 400;
        res.send({ message: 'All fields are required' });
        return;
      }

      const students = readFile('students.json');
      students.push({
        id: getNextId(students),
        ism,
        yosh,
        familya,
        jinsi,
        tel_raqam,
        guruh,
        t_username,
        rasm: rasm.filename, // save only the filename in the JSON file
      });

      writeFile('students.json', students);
      res.send(students);
    } catch (error) {
      res.statusCode = 500;
      res.send({ message: 'Internal server error' });
    }
  });

  // PUT a student by ID
  app.put('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { ism, familya, tel_raqam, yosh, t_username, guruh } = req.body;
      const students = readFile('students.json');
      const student = students.find((s) => s.id === id);
      if (student) {
        student.ism = ism ? ism : student.ism;
        student.familya = familya ? familya : student.familya;
        student.tel_raqam = tel_raqam ? tel_raqam : student.tel_raqam;
        student.yosh = yosh ? yosh : student.yosh;
        student.t_username = t_username ? t_username : student.t_username;
        student.guruh = guruh ? guruh : student.guruh;

        writeFile('students.json', students);
        res.send(students);
      } else {
        res.statusCode = 404;
        res.send({ message: 'Student not found' });
      }
    } catch (err) {
      res.statusCode = 500;
      res.send({ message: 'Internal server error' });
    }
  });

  // DELETE a student by ID
  app.delete('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const students = readFile('students.json');
      const filteredStudents = students.filter((student) => student.id !== id);
      if (filteredStudents.length < students.length) {
        writeFile('students.json', filteredStudents);
        res.send(filteredStudents);
      } else {
        res.statusCode = 404;
        res.send({ message: 'Student not found' });
      }
    } catch (err) {
      res.statusCode = 500;
      res.send({ message: 'Internal server error' });
    }
  });

  // PATCH a student by ID
  app.patch('/students/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { ism, familya, tel_raqam,

      yosh, t_username, guruh
    } = req.body;
    const students = readFile('students.json');
    const student = students.find((s) => s.id === id);
    if (student) {
      student.ism = ism ? ism : student.ism;
      student.familya = familya ? familya : student.familya;
      student.tel_raqam = tel_raqam ? tel_raqam : student.tel_raqam;
      student.yosh = yosh ? yosh : student.yosh;
      student.t_username = t_username ? t_username : student.t_username;
      student.guruh = guruh ? guruh : student.guruh;

      writeFile('students.json', students);
      res.send(students);
    } else {
      res.statusCode = 404;
      res.send({ message: 'Student not found' });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: 'Internal server error' });
  }
});
};