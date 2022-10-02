import { db } from "../src/utils/db.server";
import employees from "./employees.json";
import Employee from "../src/models/employee.model";

const getEmployees = (): Array<Omit<Employee, "id">> => {
  const employeeSeedData: any = employees;
  return employeeSeedData.map((employee) => {
    return {
      firstname: employee.first_name,
      lastname: employee.last_name,
      email: employee.email,
      phone: employee.number,
      gender: employee.gender,
      photo: employee.photo,
    };
  });
};

const seed = async () => {
  await Promise.all(
    getEmployees().map(async (employee) => {
      try {
        await db.employee.create({
          data: {
            ...employee,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })
  );
};

seed();
