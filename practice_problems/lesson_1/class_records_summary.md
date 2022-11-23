# Class Records Summary - Practice Problem

```js
/*
Problem:
- write a function that finds the percent and letter grade for all students
- these grades are based on 
  - 4 terms that all consist of:
    - 1 exam, with a max score of 100
    - varied number of exercises, that total 100 points
- determining grades
  - find average score of 4 exams
  - sum all exercises
  - apply weight of exams and exercises (65% / 35%)
  - round to nearest whole number
  - determine the letter grade from percentage
  - convert percentage and letter grade to a string "81 (C)"
- return value
  - the function should return a new object with two properties
    - studentGrades, value is an array with the string version of the students grade
    - exams, an array of objects
      - each object contains 3 properties corresponding to info about each exam
        - average, average of all exams (round to one decimal point)
        - minimum, lowest exam score
        - maximum, highest exam score

DS:
- Input: object (scores)
- Output: object (grades, and exam info)

- objects
- arrays for iteration and contained within objects
- strings, numbers as values in objects
- numbers for calculations

Abstractions:
- transformation for collecting students exam/exercises info
  - reduction for gathering total values of exams/exercises
- 

Algo:
--> function --> findLetterGrade(number) --> (string)
  - switch statement to return the appropriate letter grade

--> function --> generateClassRecordSummary(object) --> (object)
  - declare new object (examsByDate)
  - find the keys of the given object so we can iterate through them
  - iterate through the keys so that we can access each student in the given object 
    - perform all calculation to determine the grade percentage
      - reduce all exam scores, divide by 4
      - reduce all exercise scores
      - apply weights to exams and exercises, then add together
      - round
      - consult findLetterGrade to determine letter grade
      - return an array with:
        - string version of percent and letter grade
        - populate examsByDate with all exam scores (organizeExamScores)
  - this should return an array with 4 arrays
  - each array will contain a string grade, 
  - iterate through exams using transformation
    - find average of each exam
    - find min of each exam
    - find max of each exam
    - return these as properties in an object

--> function --> organizeExamScores(array(student exams), object(exams)) --> mutate exams
  - push exam score to a property of exams based on index

*/

function generateClassRecordSummary(studentInfo) {
  let examsByDate = {};
  let grades = Object.keys(studentInfo).map(student => {
                 let examsTotal = calcTotal(studentInfo, student, 'exams');
                 let exercisesTotal = calcTotal(studentInfo, student, 'exercises');
                 let gradePercentage = Math.round(((examsTotal / 4) * .65) +  (exercisesTotal * .35));
                 let letterGrade = gradePercentage + ' (' + findLetterGrade(gradePercentage) + ')';
                 
                 let studentExams = studentInfo[student].scores.exams;
                 organizeExamScores(studentExams, examsByDate);

                 return letterGrade;
               });

  let examObjects = organizeExamObjects(examsByDate);

  return { 
    studentGrades: grades,
    exams: examObjects,
  };
}

function organizeExamObjects(examsByDate) {
  let examKeys = Object.keys(examsByDate);
  let examObjects = examKeys.map(examKey => {
    let average = examsByDate[examKey].reduce((total, value) => (total + value));
                    average = Number((average / 5).toFixed(1));
                    let min = Math.min(...examsByDate[examKey]);
                    let max = Math.max(...examsByDate[examKey]);

                    return {
                      average: average,
                      minimum: min,
                      maximum: max,
                    }
                  });

  return examObjects;
}

function organizeExamScores(studentExams, examsByDate) {
  for (let i = 0; i < studentExams.length; i += 1) {
    if (examsByDate[i]) {
      examsByDate[i].push(studentExams[i]);
    } else {
      examsByDate[i] = [studentExams[i]];
    }
  }
}

function calcTotal(studentInfo, student, key) {
  let scores = studentInfo[student].scores[key];
  let finalAmount = scores.reduce((total, examScore) => {
    return total + examScore;
  });

  return finalAmount;
}

function findLetterGrade(percentage) {
  if (percentage >= 93) {
    return 'A';
  } else if (percentage >= 85) {
    return 'B';
  } else if (percentage >= 77) {
    return 'C';
  } else if (percentage >= 69) {
    return 'D';
  } else if (percentage >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
```
