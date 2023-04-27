interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

function createTeacher(teacher: Teacher): Teacher {
  return teacher;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(createTeacher(teacher3));

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedName = `${firstInitial}. ${lastName}`;
  return formattedName;
}

console.log(printTeacher("John", "Doe")); // "J. Doe"

interface IStudentClass {
  firstName: string;
  lastName: string;
}

interface IStudent {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudent {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: IStudentClass) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return "Currently working";
  }

  public displayName(): string {
    return this.firstName;
  }
}

const student1: IStudent = new StudentClass({
  firstName: "John",
  lastName: "Doe",
});

console.log(student1.workOnHomework()); // "Currently working"
console.log(student1.displayName()); // "John"
