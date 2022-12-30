# Ungroup Students

```js
/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

----------------------------

Input: 1 array of objects
- each object has two properties
  - a teacher property 
  - and a data property containing an array of objects
    - each object represents a students and some information about them

Output: 1 array of objects
  - each object will combine the teacher and each individual students information

Rules:
- take an array of objects as an argument and reorganize it so that 
  - each individual student has a
    - teacher property
    - name property
    - and other property specific to the student

DS:
- iterateion will be used to construct a new array of objects

Algo:
- decalre a new array object (newStudents)
- iterate through the array of objects
  - iterate through the current objects properties
    - iterate through the data property array
      - push a new object to newStudents with 
        - the outer objects teacher property
        - each property of the inner object
- return newStudents

*/

function ungroupStudents(students) {
  let newStudents = [];
  
  for (let outerObj of students) {
    let newStudent = {};
    for (let outerProp in outerObj) {
      let innerArray = outerObj[outerProp]
      
      if (outerProp === 'teacher') {
        newStudent.teacher = innerArray
      } else {
        for (let innerObj of innerArray) {
          for (let innerProp in innerObj) {
            newStudent.teacher = outerObj.teacher
            newStudent[innerProp] = innerObj[innerProp];
          }
          newStudents.push(newStudent);
          newStudent = {};
        }
      }
    }
  }

  return newStudents;
}

console.log(ungroupStudents([{
    teacher: "Ms. Car",
    data: [{ name: "James",
            emergenceNumber: "617-771-1082",
          }, 
          { name: "Alice",
            alergies: ["nuts", "carrots"],
          }],
  }, { 
    teacher: "Mr. Lamb",
    data: [{ name: "Aaron",
             age: 3
          }]
}]));
// ➞ [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]
````
