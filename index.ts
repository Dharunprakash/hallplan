import { Hall, StudentsPerYear } from "./type";
import { HallPlanPerYear, HallArrangementPlan, AttendanceSheet, Seat } from "./return";
import { studentData, hallData } from "./data";
import { mapYear, mapSemester } from "./data";
import { generateHallPlanForHall } from "./hallplan";
import { generateSeatingPlan } from "./seatplan";
const totalStudents = studentData.reduce((acc, curr) => acc + curr.strength, 0);

console.log(totalStudents);

const totalStudentsPerHall = hallData.reduce((acc, curr) => acc + curr.studentsPerHall, 0);

console.log(totalStudentsPerHall);


if (totalStudents > totalStudentsPerHall) {
  throw new Error("total students are more than the total students per hall");
}


console.log(generateSeatingPlan(studentData, hallData));
console.log(generateHallPlanForHall(studentData, hallData));