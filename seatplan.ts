import { Hall, StudentsPerYear } from "./type";
import { HallPlanPerYear, HallArrangementPlan, Seat } from "./return";
import { studentData, hallData } from "./data";
import { mapYear, mapSemester } from "./data";

const totalStudents = studentData.reduce((acc, curr) => acc + curr.strength, 0);

export const generateSeatingPlan = (studentData: StudentsPerYear[], hallData: Hall[]) => {
  let studentCount = 0;
  let overallStudentCount = 0;
  let studentArrayIndex = 0;
  let hallIndex = 0;
  let seatvalue = '';
  let studentArrayLength = studentData[studentArrayIndex].strength;
  let res: any[][][] = [];
  let hallLength = hallData.length;
  let i = 0;
  let hallArrangementPlans: HallArrangementPlan[] = [];

  for (let index = 0; index < hallLength; index++) {
    let table: Seat[][] = [];
    for (let j = 0; j < hallData[index].benches.rows; j++) {
      let row: Seat[] = [];
      for (let k = 0; k < hallData[index].benches.cols; k++) {
        row.push(hallData[index].studentsPerBench === 1 ? [""] : ["", ""]);
      }
      table.push(row);
    }
    console.log(table);
    res.push(table);
    hallArrangementPlans.push({
      hallArrangement: table,
      hallStrength: hallData[index].studentsPerHall,
      hallno: hallData[index].hallno.toString(),
    });
  }

  while (overallStudentCount < totalStudents) {
    if (hallData[hallIndex].isInterchange === true) {
      // Handle interchange logic
    } else if (hallData[hallIndex].studentsPerBench === 2) {
      if (hallData[hallIndex].isSameYearPerBenchAllowed === true) {
        for (let j = 0; j < hallData[hallIndex].benches.rows; j++) {
          for (let ind = 0; ind < 2; ind++) {
            for (let k = 0; k < hallData[hallIndex].benches.cols; k++) {
              let year = mapYear(studentData[studentArrayIndex].year);
              let currentSection =
                studentData[studentArrayIndex].studentData[studentCount].section;
              let serielno =
                studentData[studentArrayIndex].studentData[studentCount].sno;
              seatvalue = year + currentSection + serielno;
              hallArrangementPlans[hallIndex].hallArrangement[j][k][ind] = seatvalue;
              studentCount++;
              overallStudentCount++;

              if (overallStudentCount === totalStudents) {
                break;
              }
              if (studentCount === studentArrayLength) {
                studentArrayIndex++;
                studentCount = 0;
                studentArrayLength = studentData[studentArrayIndex].strength;
              }
            }
          }
        }
      } else {
        // Handle other logic for two students per bench
      }
    } else {
      for (let j = 0; j < hallData[hallIndex].benches.rows; j++) {
        for (let k = 0; k < hallData[hallIndex].benches.cols; k++) {
          let year = mapYear(studentData[studentArrayIndex].year);
          let currentSection =
            studentData[studentArrayIndex].studentData[studentCount].section;
          let serielno =
            studentData[studentArrayIndex].studentData[studentCount].sno;
          seatvalue = year + "-" + currentSection + `(${serielno})`;
          hallArrangementPlans[hallIndex].hallArrangement[j][k][0] = seatvalue;
          studentCount++;
          overallStudentCount++;

          if (overallStudentCount === totalStudents) {
            break;
          }
          if (studentCount === studentArrayLength) {
            studentArrayIndex++;
            studentCount = 0;
            studentArrayLength = studentData[studentArrayIndex].strength;
          }
        }
      }
      console.log(hallArrangementPlans[hallIndex].hallArrangement);
      hallIndex++;
      if (hallIndex === hallLength) {
        hallIndex = 0;
      }
    }
  }
  return hallArrangementPlans;
};
