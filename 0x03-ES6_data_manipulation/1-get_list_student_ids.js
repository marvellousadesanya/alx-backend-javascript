// eslint-disable-next-line consistent-return
export default function getListStudentIds(arg) {
   if (!Array.isArray(arg)) return [];
     return arg.map((student) => student.id);
}
