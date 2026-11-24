// Student information stored in variables.
const studentName = "Alex Johnson";
const studentAge = 18;
const studentId = "STU001";
const studentCourse = "Computer Science";

// A function displays the welcome message.
function displayWelcome() {
  console.log("Welcome to the Student Information Program!");
}

displayWelcome();
console.log("-------------------------------------------");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Student ID:", studentId);
console.log("Course:", studentCourse);

// Check whether the student is 18 or older.
if (studentAge >= 18) {
  console.log("Age status: The student is 18 or older.");
} else {
  console.log("Age status: The student is younger than 18.");
}
