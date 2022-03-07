import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import boardRouter from "./boardRouter.js";
import customerRouter from "./customerRouter.js";
import rentalRouter from "./rentalRouter.js";

const router = Router();

router.use(categoryRouter);
router.use(boardRouter);
router.use(customerRouter);
router.use(rentalRouter);

export default router;
