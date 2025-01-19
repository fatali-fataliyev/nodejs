const createClass = require("./class");
const inquirer = require("inquirer");

async function start() {
  let klass;

  while (true) {
    if (klass == undefined) {
      console.log("please create a class");
    } else {
      console.log("class: ", klass);
    }
    let command = await inquirer.prompt([
      {
        type: "list",
        name: "selected",
        message: "select operation",
        choices: ["create class", "exit"],
      },
    ]);

    switch (command.selected) {
      case "create class": {
        let klass = await inquirer.prompt([
          {
            type: "input",
            name: "number",
            message: "Enter class number: ",
          },
          {
            type: "input",
            name: "windowCount",
            message: "Enter window count in class: ",
          },
          {
            type: "input",
            name: "studentLimit",
            message: "Enter max student capacity: ",
          },
        ]);
        klass = new createClass(
          klass.number,
          klass.windowCount,
          klass.studentLimit
        );

        klassLoop: while (true) {
          let command = await inquirer.prompt([
            {
              type: "list",
              name: "selected",
              message: "select operation",
              choices: [
                "add student",
                "add teacher",
                "about class",
                "get students info",
                "get teachers info",
                "exit",
              ],
            },
          ]);

          switch (command.selected) {
            case "add student": {
              let student = await inquirer.prompt([
                {
                  type: "input",
                  name: "name",
                  message: "Enter student name: ",
                },
                {
                  type: "input",
                  name: "favLessons",
                  message: "Enter student's favorite lessons(with ,):  ",
                },
                {
                  type: "input",
                  name: "age",
                  message: "Enter age: ",
                },
              ]);
              klass.addStudent(student.name, student.favLessons, student.age);
              console.log("student added.");
              break;
            }
            case "add teacher": {
              let teacher = await inquirer.prompt([
                {
                  type: "input",
                  name: "name",
                  message: "Enter teacher name: ",
                },
                {
                  type: "input",
                  name: "branch",
                  message: "Enter teacher's branch name:  ",
                },
                {
                  type: "input",
                  name: "exp",
                  message: "Enter teacher's experience: ",
                },
              ]);
              klass.addTeacher(teacher.name, teacher.branch, teacher.exp);
              console.log("teacher added.");
              break;
            }
            case "about class": {
              klass.aboutClass();
              break;
            }
            case "get students info": {
              klass.showStudents();
              break;
            }
            case "get teachers info": {
              klass.showTeachers();
              break;
            }
            case "exit": {
              console.log("shut down. . .");
              process.exit();
            }
            default: {
              console.log("unknown command");
            }
          }
        }
      }
      case "exit": {
        console.log("shut down. . .");
        process.exit();
      }
      default: {
        console.log("unknown command");
      }
    }
  }
}

start();
