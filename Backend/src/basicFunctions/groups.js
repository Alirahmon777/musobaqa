// import { readFile, writeFile } from '../utils/fileSystem.js';

// export const groupsCRUD = (app) => {
//   app.get('/course', (req, res) => {
//     try {
//       const groups = readFile('grups.json');
//       res.send(groups);
//     } catch (err) {
//       res.statusCode = err.code;
//       res.send(err);
//     }
//   });
// };


import { readFile, writeFile } from '../utils/fileSystem.js';
import {getNextId} from "../utils/helpers.js"

export const groupsCRUD = (app) => {
  // GET all groups
  app.get('/group', (req, res) => {
    try {
      const groups = readFile('groups.json');
      res.send(groups);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // GET group by ID
  app.get('/group/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const groups = readFile('groups.json');
      const group = groups.find((group) => group.id === id);
      res.send(group);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // POST a new group
  app.post('/gr', (req, res) => {
    try {
      const { direction, assistant_teacher_name, group_name, jinsi, teacher_name, start_lesson_time, start_lesson_date, created_date } = req.body
      const groups = readFile('groups.json')

      if (!direction || !assistant_teacher_name || !group_name || !start_lesson_time, !start_lesson_date || !created_date) {
        res.statusCode = 400
        res.send({ message: 'All fields are required' })
        return
      }


      groups.push({
        id: getNextId(groups),
        direction, assistant_teacher_name, group_name, jinsi, teacher_name, start_lesson_time, start_lesson_date, created_date
      })

      writeFile('groups.json', groups)
      console.log(groups);
      res.send(groups)

    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // PUT a group by ID
  app.put('/groups/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { direction, group_name, teacher_name, assistant_teacher_name, start_lesson_date, start_lesson_time } = req.body;
      const groups = readFile('groups.json');
      const group = groups.find((s) => s.id == id);
      group.direction = direction ? direction : group.direction;
      group.group_name = group_name ? group_name : group.group_name;
      group.teacher_name = teacher_name ? teacher_name : group.teacher_name;
      group.assistant_teacher_name = assistant_teacher_name ? assistant_teacher_name : group.assistant_teacher_name;
      group.start_lesson_date = start_lesson_date ? start_lesson_date : group.start_lesson_date;
      group.start_lesson_time = start_lesson_time ? start_lesson_time : group.start_lesson_time;
      group.created_date = created_date ? created_date : group.created_date;

      writeFile('groups.json', groups);
      res.statusCode = 200;
      res.send(groups);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  app.delete('/gruops/:id', (req, res) => {
    try {
      console.log('delete');
      const id = parseInt(req.params.id);
      const groups = readFile('groups.json');
      const deletedgroup = groups.filter((group) => group.id != id);
      writeFile('groups.json', deletedgroup);
      res.send(deletedgroup);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });

  // PATCH a group by ID
  app.patch('/groups/:id', (req, res) => {
    const id = parseInt(req.params.id);
  });
};
