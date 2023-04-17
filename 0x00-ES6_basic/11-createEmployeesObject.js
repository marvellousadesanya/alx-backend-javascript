function createEmployeesObject(departmentName, employees) {
  const departmentObject = { name: departmentName, employees: [] };

  employees.forEach((employee) => {
    departmentObject.employees.push({ name: employee });
  });

  return departmentObject;
}

export default createEmployeesObject;
