let marks = [80, 77, 88, 95, 68];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;
let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

alert("Average marks: " + average + "\nGrade: " + grade);
