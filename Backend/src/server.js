import express from 'express';
import cors from 'cors';
import { PORT } from './utils/constants.js';

import { studentsCRUD } from './basicFunctions/students.js';
import { groupsCRUD } from './basicFunctions/groups.js';

const app = express();
app.use(express.json());
app.use(cors());

studentsCRUD(app);
groupsCRUD(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
