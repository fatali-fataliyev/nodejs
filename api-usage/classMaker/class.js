//contain students,
//class has: roomNum, chairs, tableSize
// accept new student to class.

const Student = require("./student");
const Teacher = require("./teacher");

function createClass(num, windowCount, studentLimit) {
  if (studentLimit > 50) {
    console.log("students must be max: 50, default set to 50");
    studentLimit = 50;
  }
  this.num = num;
  this.windowCount = windowCount;
  this.students = [];
  this.teachers = [];
  this.studentLimit = studentLimit;

  this.addStudent = function (name, favLessons, age) {
    this.students.push(new Student(name, favLessons, age));
  };

  this.addTeacher = function (name, branchName, exp) {
    this.teachers.push(new Teacher(name, branchName, exp));
  };

  this.aboutClass = function () {
    console.log(`
      Class Number: ${this.num},
      Count of Windows: ${this.windowCount},
      Students count: ${this.students.length},
      Student Limit: ${this.studentLimit}
      Teachers count: ${this.teachers.length}

    `);
  };
  this.showStudents = function () {
    for (let student of this.students) {
      student.aboutStudent();
    }
  };

  this.showTeachers = function () {
    for (let teacher of this.teachers) {
      teacher.aboutTeacher();
    }
  };
}

module.exports = createClass;
