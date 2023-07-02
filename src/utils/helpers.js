import { api } from './api';

export const deleteHandler = (id, setStudents) => {
  api()
    .delete(`students/${id}`)
    .then((res) => {
      setStudents(res.data);
    });
};

