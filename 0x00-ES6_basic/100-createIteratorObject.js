export default function createIteratorObject(report) {
  const { allEmployees } = report;

  // create an array of all employees
  const employees = [];
  for (const [, empList] of Object.entries(allEmployees)) {
    employees.push(...empList);
  }

  const index = 0;
  return {
    // implement the Symbol.iterator method
    [Symbol.iterator]: () => ({
      next: () => {
        if (index < employees.length) {
          return { value: employees[index + 1], done: false };
        }
        return { done: true };
      },
    }),
  };
}
