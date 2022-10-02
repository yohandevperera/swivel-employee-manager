import { Router } from "express";
import UserRoutes from "../routes/user.route";

export default Router()
                    .use(UserRoutes)
                    