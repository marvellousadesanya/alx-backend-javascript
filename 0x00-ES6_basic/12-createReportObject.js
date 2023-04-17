export default function createReportObject(employeesList) {
  const allEmployees = {};

  // group employees by department
  for (const [name, employees] of Object.entries(employeesList)) {
    if (!allEmployees[name]) {
      allEmployees[name] = [];
    }
    allEmployees[name].push(...employees);
  }

  return {
    allEmployees,

    // return number of departments
    getNumberOfDepartments: () => Object.keys(allEmployees).length,
  };
}
