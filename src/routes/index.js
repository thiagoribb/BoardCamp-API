import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import boardRouter from "./boardRouter.js";
import customerRouter from "./customerRouter.js";

const router = Router();

router.use(categoryRouter);
router.use(boardRouter);
router.use(customerRouter);

export default router;
