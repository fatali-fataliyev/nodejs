//name, branchName, experience

function Teacher(name, branchName, exp) {
  this.name = name;
  this.branchName = branchName;
  this.exp = exp;

  this.aboutTeacher = function () {
    console.log(
      `Teacher Name: ${this.name}, Branch Name: ${this.branchName}, Experience: ${this.exp}`
    );
  };
}
module.exports = Teacher;
