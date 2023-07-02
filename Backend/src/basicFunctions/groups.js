import { readFile, writeFile } from '../utils/fileSystem.js';

export const groupsCRUD = (app) => {
  app.get('/course', (req, res) => {
    try {
      const groups = readFile('grups.json');
      res.send(groups);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });
};
