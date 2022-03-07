import { Router } from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/createCategory.js";
import { validateCategoryMiddleware } from "../middlewares/validateCategoryMiddleware.js";

const categoryRouter = Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.post("/categories", validateCategoryMiddleware, createCategory);

export default categoryRouter;
