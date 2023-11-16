"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSeatingPlanForHall = exports.generateHallPlanForHall = exports.generateAttendanceSheetForHall = exports.generateSeatingPlan = exports.generateHallPlan = exports.generateAttendanceSheet = void 0;
const data_1 = require("./data");
//sum of all students
const totalStudents = data_1.studentData.reduce((acc, curr) => acc + curr.strength, 0);
console.log(totalStudents);
const generateAttendanceSheet = (studentData, hallData) => {
};
exports.generateAttendanceSheet = generateAttendanceSheet;
const generateHallPlan = (studentData, hallData) => {
};
exports.generateHallPlan = generateHallPlan;
const generateSeatingPlan = (studentData, hallData) => {
};
exports.generateSeatingPlan = generateSeatingPlan;
const generateAttendanceSheetForHall = () => {
};
exports.generateAttendanceSheetForHall = generateAttendanceSheetForHall;
const generateHallPlanForHall = () => {
};
exports.generateHallPlanForHall = generateHallPlanForHall;
const generateSeatingPlanForHall = () => {
};
exports.generateSeatingPlanForHall = generateSeatingPlanForHall;
