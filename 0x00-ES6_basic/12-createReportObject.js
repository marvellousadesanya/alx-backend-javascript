export default function createReportObject(employeesList) {
  const departments = {};
  employeesList.forEach((employee) => {
    const { department, name } = employee;
    if (departments[department]) {
      departments[department] = [...departments[department], name];
    } else {
      departments[department] = [name];
    }
  });

  return {
    allEmployees: departments,
    getNumberOfDepartments() {
      return Object.keys(departments).length;
    },
  };
}
