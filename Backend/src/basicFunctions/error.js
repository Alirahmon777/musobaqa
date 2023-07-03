import { readFile } from '../utils/fileSystem.js';

export const errorCRUD = (app) => {
  app.get('/error', (req, res) => {
    try {
      const groups = readFile('error.json');
      res.send(groups);
    } catch (err) {
      res.statusCode = err.code;
      res.send(err);
    }
  });
};
