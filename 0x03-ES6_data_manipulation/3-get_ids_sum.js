import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(student = getListStudents()) {
  return student.reduce((curr, next) => curr + next.id, 0);
}
