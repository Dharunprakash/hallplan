export type HallPlan = {
  section: string;
  hallno: string;
  totalStrength: number;
  rollNo: {
    from: string;
    to: string;
  },
  year: string;
  semester: string;
  dept: string;
}

// expected output type is HallPlanPerYear[]
export type HallPlanPerYear = HallPlan[];

// expected output type is HallArrangementPlan[]
export type HallArrangementPlan = {
  hallArrangement: string[][];
  hallStrength: number;
  hallno: string;
}

// expected output type is AttendanceSheet[] (i.e. AttendaceSheet for all halls)
export type AttendanceSheet = {
  hallno: string;
  studentData: StudentAttendaceData[];
}

export type StudentAttendaceData = {
  sno: number;
  regno: number;
  name: string;
}