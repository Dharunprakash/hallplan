import { Hall, StudentsPerYear } from "./type";
import { HallPlanPerYear, HallArrangementPlan, AttendanceSheet } from "./return";
import { studentData, hallData } from "./data";
import { mapYear, mapSemester } from "./data";

const totalStudents = studentData.reduce((acc, curr) => acc + curr.strength, 0);

console.log(totalStudents);

const totalStudentsPerHall = hallData.reduce((acc, curr) => acc + curr.studentsPerHall, 0);

console.log(totalStudentsPerHall);

if (totalStudents > totalStudentsPerHall) {
  throw new Error("total students are more than the total students per hall");
}
export const generateSeatingPlan = (studentData: StudentsPerYear[], hallData: Hall[]) => {
  let studentCount = 0;
  let overallStudentCount = 0;
  let studentArrayIndex = 0;
  let seatvalue = '';
  let studentArrayLength = studentData[studentArrayIndex].strength;
  let secondStudentArrayLength = studentData[studentArrayIndex+1].strength;
  let secondStudentCount = 0;
  const seatPlan: HallArrangementPlan[] = [];
  let hallLength = hallData.length;
  let i=0;
  while(i<hallLength){
    let hallArrangement: string[][] = [];
    for(let j=0;j<hallData[i].benches.rows;j++){
      let row: string[] = [];
      for(let k=0;k<hallData[i].benches.cols;k++){
        row.push('');
      }
      hallArrangement.push(row);
    }
    let breakCondition=false;
    if (hallData[i].isSameYearPerBenchAllowed === false) {
      for (let j = 0; j < hallData[i].benches.rows; j++) {
        for (let k = 0; k < hallData[i].benches.cols; k++) {
          if (overallStudentCount ==  totalStudents) {
            breakCondition=true;
            break;
          }
          let year = mapYear(studentData[studentArrayIndex].year);
          let currentSection = studentData[studentArrayIndex].studentData[studentCount].section;
          let serielno = studentData[studentArrayIndex].studentData[studentCount].sno;
          seatvalue = year + currentSection + serielno;
          hallArrangement[j][k] = seatvalue;
          studentCount++;
          overallStudentCount++;
        }
        if(breakCondition){
          break;
        }
      }
    }
    else{
      for (let j = 0; j < hallData[i].benches.rows; j++) {
        for (let k = 0; k < hallData[i].benches.cols; k++) {

            if (overallStudentCount ==  totalStudents) {
            breakCondition=true;
            break;
          }
          let year = mapYear(studentData[studentArrayIndex].year);
          let currentSection = studentData[studentArrayIndex].studentData[studentCount].section;
          let serielno = studentData[studentArrayIndex].studentData[studentCount].sno;
          seatvalue = year + currentSection + serielno;
          let year2 = mapYear(studentData[studentArrayIndex+1].year);
          let currentSection2 = studentData[1].studentData[secondStudentCount].section;
          let serielno2 = studentData[1].studentData[secondStudentCount].sno;
          let seatvalue2 = year2 + currentSection2 + serielno2;
          hallArrangement[j][k] = seatvalue+','+seatvalue2;
          overallStudentCount++;    
          studentCount++;
          secondStudentCount++;
        }
      }
    }

    i++;
  }
  


};

export const generateHallPlanForHall = (studentData: StudentsPerYear[], hallData: Hall[]) => {
  let studentCount = 0;
  let overallStudentCount = 0;
  let hallStudentCount = 0;
  let hallCount = 0;
  let previousSection = studentData[0].studentData[0].section;
  let studentArrayLength = studentData[0].strength;
  let studentIndex = 0;
  let startRollNo = studentData[0].studentData[0].sno;
  const hallPlan: HallPlanPerYear = [];
  let endRollno = 0;
  while (true) {
    if (studentArrayLength == studentCount) {
      studentIndex++;
      studentCount = 0;
      studentArrayLength = studentData[studentIndex].strength;
    }

    let currentSection = studentData[studentIndex].studentData[studentCount].section;

    if (
      (hallStudentCount == hallData[hallCount].studentsPerHall || previousSection != currentSection) ||
      overallStudentCount == totalStudents
    ) {
      if(studentCount == 0){
        let endRollno=studentData[studentIndex-1].studentData[studentData[studentIndex-1].strength-1].sno;}
      else{
        let endRollno =studentData[studentIndex].studentData[studentCount-1].sno;
        }

      hallPlan.push({
        section: previousSection,
        hallno: hallData[hallCount].hallno.toString(),
        totalStrength: hallData[hallCount].studentsPerHall,
        rollNo: {
          from: startRollNo.toString(),
          to: endRollno.toString(),
        },

        year: mapYear(studentData[studentIndex].year)!,
        semester: mapSemester(studentData[studentIndex].semester)!,
        dept: studentData[studentIndex].dept,
      });

      if (overallStudentCount == totalStudents) {
        break;
      }
      
      startRollNo = studentData[studentIndex].studentData[studentCount].sno;
      
      if((hallStudentCount == hallData[hallCount].studentsPerHall)){
        hallCount++;
        hallStudentCount = 0;
      }
      previousSection = currentSection;
    }

    overallStudentCount++;
    hallStudentCount++;
    studentCount++;
  }
};
export const generateAttendanceSheetForHall = () => {
  
};