import { Router } from "express";
import {
  createRental,
  getRentals,
  returnRental,
  deleteRental,
} from "../controllers/rentalController.js";
import {
  validateRental,
  validateReturn,
} from "../middlewares/validateRentalMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import rentalSchema from "../schemas/rentalSchema.js";

const rentalRouter = Router();

rentalRouter.get("/rentals", getRentals);
rentalRouter.post(
  "/rentals",
  validateSchemaMiddleware(rentalSchema),
  validateRental,
  createRental
);
rentalRouter.post("/rentals/:id/return", validateReturn, returnRental);
rentalRouter.delete("/rentals/:id", validateReturn, deleteRental);

export default rentalRouter;
