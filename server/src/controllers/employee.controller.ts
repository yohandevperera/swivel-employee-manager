import { Request, Response } from "express";
import {
  successRes,
  errorRes,
  validationErrorRes,
} from "../utils/response.formatter";
import * as EmployeeService from "../services/employee.service";
import _ from "lodash";
import { validationResult } from "express-validator";

/**
 * The function that will fetch all the employees
 * @returns ResponseType{Employee[]}
 */
export const getAllEmployees = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const employeeList = await EmployeeService.listEmployees();
    if (_.isEmpty(employeeList)) {
      return response
        .status(404)
        .json(errorRes("Error no employees to retrieved"));
    }
    return response
      .status(200)
      .json(successRes("Employees successfully retrieved", employeeList));
  } catch (error) {
    return response.status(500).json(errorRes((error as Error).message));
  }
};

/**
 * The function that will create an employee for a given employee object
 * @params :Request
 * @returns ResponseType{Employee}
 */
export const createEmployee = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      return response.status(400).json(validationErrorRes(validationErrors));
    }
    const createdEmployee = await EmployeeService.createEmployees(request.body);
    if (_.isEmpty(createdEmployee)) {
      return response.status(404).json(errorRes("Error creating employee"));
    }
    return response
      .status(200)
      .json(successRes("Employee created successfully", createdEmployee));
  } catch (error) {
    return response.status(500).json(errorRes((error as Error).message));
  }
};

/**
 * The function that will update an employee for a given employee object and id
 * @params :Request
 * @returns ResponseType{Employee}
 */
export const updateEmployee = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      return response.status(400).json(validationErrorRes(validationErrors));
    }
    const id = parseInt(request.params.id, 10);
    const createdEmployee = await EmployeeService.updateEmployees(
      request.body,
      id
    );
    if (_.isEmpty(createdEmployee)) {
      return response.status(404).json(errorRes("Error updating employee"));
    }
    return response
      .status(200)
      .json(successRes("Employee updated successfully", createdEmployee));
  } catch (error) {
    return response.status(500).json(errorRes((error as Error).message));
  }
};

/**
 * The function that will delete an employee for a given id
 * @params :Request
 * @returns ResponseType{Employee}
 */
export const deleteEmployee = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const id = parseInt(request.params.id, 10);
    const createdEmployee = await EmployeeService.deleteEmployee(id);
    if (_.isEmpty(createdEmployee)) {
      return response.status(404).json(errorRes("Error deleting employee"));
    }
    return response
      .status(200)
      .json(successRes("Employee deleted successfully", createdEmployee));
  } catch (error) {
    return response.status(500).json(errorRes((error as Error).message));
  }
};
