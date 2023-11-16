import { Hall, StudentsPerYear } from "./type";

export const studentData: StudentsPerYear[] = [
  {
    year: 1,
    semester:5,
    dept: "CSE",
    strength: 10,
    studentData: [
      {
        name: "A",
        sno: 1,
        regno: 1,
        rollno: "19CS001",
        section: "A",
      },
      {
        name: "B",
        sno: 2,
        regno: 2,
        rollno: "19CS002",
        section: "A",
      },
      {
        name: "C",
        sno: 3,
        regno: 3,
        rollno: "19CS003",
        section: "A",
      },
      {
        name: "D",
        sno: 4,
        regno: 4,
        rollno: "19CS004",
        section: "A",
      },
      {
        name: "E",
        sno: 5,
        regno: 5,
        rollno: "19CS005",
        section: "A",
      },
      {
        name: "F",
        sno: 6,
        regno: 6,
        rollno: "19CS006",
        section: "A",
      },
      {
        name: "G",
        sno: 7,
        regno: 7,
        rollno: "19CS007",
        section: "A",
      },
      {
        name: "H",
        sno: 8,
        regno: 8,
        rollno: "19CS008",
        section: "A",
      },
      {
        name: "I",
        sno: 9,
        regno: 9,
        rollno: "19CS009",
        section: "A",
      },
      {
        name: "J",
        sno: 10,
        regno: 10,
        rollno: "19CS010",
        section: "A",
      },
    ],
  },
    {
    year: 1,
    semester:5,
    dept: "CSE",
    strength: 10,
    studentData:[
      {
        name: "A",
        sno: 1,
        regno: 1,
        rollno: "19CS001",
        section: "B",
      },
      {
        name: "B",
        sno: 2,
        regno: 2,
        rollno: "19CS002",
        section: "B",
      },
      {
        name: "C",
        sno: 3,
        regno: 3,
        rollno: "19CS003",
        section: "B",
      },
      {
        name: "D",
        sno: 4,
        regno: 4,
        rollno: "19CS004",
        section: "B",
      },
      {
        name: "E",
        sno: 5,
        regno: 5,
        rollno: "19CS005",
        section: "B",
      },
      {
        name: "F",
        sno: 6,
        regno: 6,
        rollno: "19CS006",
        section: "B",
      },
      {
        name: "G",
        sno: 7,
        regno: 7,
        rollno: "19CS007",
        section: "B",
      },
      {
        name: "H",
        sno: 8,
        regno: 8,
        rollno: "19CS008",
        section: "B",
      },
      {
        name: "I",
        sno: 9,
        regno: 9,
        rollno: "19CS009",
        section: "B",
      },
      {
        name: "J",
        sno: 10,
        regno: 10,
        rollno: "19CS010",
        section: "B",
      }
      
    ],
  },
];
export const hallData: Hall[] = [
  {
    hallno: "1",
    dept: "CSE",
    studentsPerBench: 1,
    studentsPerHall: 10,
    isSameYearPerBenchAllowed: false,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
  {
    hallno: "2",
    dept: "CSE",
    studentsPerBench: 2,
    studentsPerHall: 20,
    isSameYearPerBenchAllowed: true,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
  {
    hallno: "3",
    dept: "CSE",
    studentsPerBench: 1,
    studentsPerHall: 10,
    isSameYearPerBenchAllowed: false,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
  {
    hallno: "4",
    dept: "CSE",
    studentsPerBench: 2,
    studentsPerHall: 20,
    isSameYearPerBenchAllowed: true,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
  {
    hallno: "5",
    dept: "CSE",
    studentsPerBench: 1,
    studentsPerHall: 10,
    isSameYearPerBenchAllowed : false,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
  {
    hallno: "6",
    dept: "CSE",
    studentsPerBench: 2,
    studentsPerHall: 20,
    isSameYearPerBenchAllowed: true,
    benches: {
      rows: 5,
      cols: 2,
      extra: 0,
    },
    isSameYearPerHallAllowed: false,
  },
];

export const mapYear = (year: number) => {
  switch (year) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    default:
      return 'I';
  }
}

export const mapSemester = (semester: number) => {
  switch (semester) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    default:
      return 'I';
  }
}
