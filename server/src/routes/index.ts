import { Router } from "express";
import EmployeeRoutes from "../routes/employee.route";

export default Router().use(EmployeeRoutes);
