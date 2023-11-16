export type Student = {
  name: string;
  sno: number;
  regno: number;
  rollno: string;
  section: string;
};

export type StudentPerYear = {
  year: 1 | 2 | 3 | 4,
  semester:number
  dept: string,
  strength: number,
  studentData: Student[]
}

export type Hall = {
  hallno: number;
  dept: string;
  studentsPerBench: 1 | 2;
  studentsPerHall: number;
  isSameYearPerBenchAllowed: boolean;
  benches: {
    rows: number;
    cols: number;
    total?: number;
  };
};