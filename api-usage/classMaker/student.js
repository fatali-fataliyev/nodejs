//name, favLesson, avarageCredit.

function Student(name, favLesson, age) {
  this.name = name;
  this.favLesson = favLesson;
  this.age = age;

  this.aboutStudent = function () {
    console.log(
      `Student Name: ${this.name}, Favorite Lessons: ${this.favLesson}, Age: ${this.age}`
    );
  };
}
module.exports = Student;
