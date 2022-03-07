import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import boardRouter from "./boardRouter.js";

const router = Router();

router.use(categoryRouter);
router.use(boardRouter);

export default router;
