
export type HallPlan = {
  section: string
  hallno: string
  totalStrength: number
  rollNo: {
    from: string
    to: string
  }
  year: string
  semester: string
  dept: string
}

// expected output type is HallPlanPerYear[]
export type HallPlanPerYear = HallPlan[]
export type TwoSeat = [string, string];
export type OneSeat = [string];
export type Seat = (TwoSeat | OneSeat)
// expected output type is HallArrangementPlan[]
export type HallArrangementPlan = {
  hallArrangement: Seat[][]
  hallStrength: number
  hallno: string
}

// expected output type is AttendanceSheet[] (i.e. AttendaceSheet for all halls)
export type AttendanceSheet = {
  hallno: string
  studentData: StudentAttendanceData[]
}

export type StudentAttendanceData = {
  sno: number
  regno: number
  name: string
}