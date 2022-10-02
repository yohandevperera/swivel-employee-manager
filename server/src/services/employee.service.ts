import { db } from "../utils/db.server";
import Employee from "../models/employee.model";
import _ from "lodash";


/**
 * Name: EmployeeService
 * Purpose: To perform all the crud operations related to the Employee table.
 * Description: This service will return and excute all the raw CRUD operations
 */



/**
 * This function can be used fetch all the employees in the table
 * @returns Promise<Employee[]>
 */
export const listEmployees = async (): Promise<Employee[]> => {
  return db.employee.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      gender: true,
      phone: true,
      photo: true,
    },
  });
};

/**
 * This function can be used create an employee
 * @params Employee object
 * @returns Promise<Employee>
 */
export const createEmployees = async (
  employee: Omit<Employee, "id">
): Promise<Employee> => {
  return await db.employee.create({
    data: {
      ...employee,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      gender: true,
      phone: true,
      photo: true,
    },
  });
};

/**
 * This function can be used update an employee for a given id
 * @params Employee object
 * @params id - employee id number
 * @returns Promise<Employee>
 */
export const updateEmployees = async (
  employee: Omit<Employee, "id">,
  id: number
): Promise<Employee> => {
  return await db.employee.update({
    where: {
      id,
    },
    data: {
      ...employee,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      gender: true,
      phone: true,
      photo: true,
    },
  });
};

/**
 * This function can be used delete an employee for a given id
 * @params id number
 * @returns Promise<Employee>
 */
export const deleteEmployee = async (id: number): Promise<Employee> => {
  return await db.employee.delete({
    where: {
      id,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      gender: true,
      phone: true,
      photo: true,
    },
  });
};
