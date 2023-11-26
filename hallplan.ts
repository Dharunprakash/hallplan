import { Hall, StudentsPerYear } from "./type";
import { HallPlanPerYear, HallArrangementPlan, AttendanceSheet, Seat } from "./return";
import { studentData, hallData } from "./data";
import { mapYear, mapSemester } from "./data";


const totalStudents = studentData.reduce((acc, curr) => acc + curr.strength, 0);

export const generateHallPlanForHall = (studentData: StudentsPerYear[], hallData: Hall[]) => {
  let studentCount = 0;
  let overallStudentCount = 0;
  let hallStudentCount = 0;
  let hallCount = 0;
  let previousSection = studentData[0].studentData[0].section;
  let currentSection = studentData[0].studentData[0].section;
  let studentArrayLength = studentData[0].strength;
  let studentIndex = 0;    
  let startRollNo = studentData[0].studentData[0].sno;
  const hallPlan: HallPlanPerYear = [];
  let endRollno = 0;
  
  while (true) {
    // isf the reading index strength reachesd Read the next index
    if (studentArrayLength == studentCount) {
      studentIndex++;
      studentCount = 0;
      if(studentIndex == studentData.length){
        hallPlan.push({
        section: previousSection,
        hallno: hallData[hallCount].hallno.toString(),
        totalStrength: hallData[hallCount].studentsPerHall,
        rollNo: {
          from: startRollNo.toString(),
          to: endRollno.toString(),
        },

        year: mapYear(studentData[studentIndex-1].year)!,
        semester: mapSemester(studentData[studentIndex-1].semester)!,
        dept: studentData[studentIndex-1].dept,
      });
        return hallPlan;
      }
    }
    currentSection = studentData[studentIndex].studentData[studentCount].section;
    if (
      (hallStudentCount == hallData[hallCount].studentsPerHall || previousSection != currentSection) ||
      overallStudentCount == totalStudents
    ) {
      if(studentCount == 0){
        endRollno=studentData[studentIndex-1].studentData[studentData[studentIndex-1].strength-1].sno;}
      else{
        endRollno =studentData[studentIndex].studentData[studentCount-1].sno;
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
        return hallPlan
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
};
}
console.log(generateHallPlanForHall(studentData, hallData));