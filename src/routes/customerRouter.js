import { Router } from "express";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
} from "../controllers/customerController.js";
import {
  validateCustomer,
  validateUpdate,
} from "../middlewares/validateCustomerMiddleware.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import customerSchema from "../schemas/customerSchema.js";

const customerRouter = Router();

customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers", getCustomers);
customerRouter.post(
  "/customers",
  validateSchemaMiddleware(customerSchema),
  validateCustomer,
  createCustomer
);
customerRouter.put(
  "/categories/:id",
  validateSchemaMiddleware(customerSchema),
  validateUpdate,
  updateCustomer
);

export default customerRouter;
