import express from 'express';
import cors from 'cors';
import { PORT } from './utils/constants.js';
import dotenv from 'dotenv';

import { studentsCRUD } from './basicFunctions/students.js';
import { groupsCRUD } from './basicFunctions/groups.js';
import { errorCRUD } from './basicFunctions/error.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

studentsCRUD(app);
groupsCRUD(app);
errorCRUD(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
