"use strict";
const students = [
    {
        id: 1,
        name: "Rohan",
        college: "GEC",
        age: 20,
    },
    {
        id: 2,
        name: "Rahul",
        college: "GEC",
        age: 20,
    },
    {
        id: 3,
        name: "Ram",
        college: "VVP",
        age: 20,
    },
    {
        id: 4,
        name: "Rakesh",
        college: "DARSHAN",
        age: 20,
    },
];
function countStudentsByCollege(students) {
    const collegeCount = {};
    for (const student of students) {
        if (collegeCount[student.college]) {
            collegeCount[student.college]++;
        }
        else {
            collegeCount[student.college] = 1;
        }
    }
    const result = Object.keys(collegeCount).map((college) => ({
        college: college,
        NoOfStudents: collegeCount[college],
    }));
    return result;
}
const result = countStudentsByCollege(students);
console.log(result);
