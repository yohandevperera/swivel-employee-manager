import { Router } from "express";
import * as EmployeeController from "../controllers/employee.controller";
import { employeeCreateAndUpdateRules } from "../validations/employee.validation";

const router = Router();

router.get("/employees/", EmployeeController.getAllEmployees);
router.post(
  "/employees/",
  employeeCreateAndUpdateRules,
  EmployeeController.createEmployee
);
router.put(
  "/employees/:id",
  employeeCreateAndUpdateRules,
  EmployeeController.updateEmployee
);
router.delete("/employees/:id", EmployeeController.deleteEmployee);

export default router;
