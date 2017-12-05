


export default function addStudents(studentName){
  console.log("Add Students action is running");
  console.log(studentName)
  return{
    type: 'ADD_STUDENT',
    payload: studentName
  }
}
