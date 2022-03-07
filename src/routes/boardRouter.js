import { Router } from "express";
import { getBoards, postBoards } from "../controllers/boardController.js";
import validateBoardMiddleware from "../middlewares/validateBoardMiddleware.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import boardSchema from "../schemas/boardSchema.js";

const boardRouter = Router();

boardRouter.get("/games", getBoards);
boardRouter.post(
  "/games",
  validateSchemaMiddleware(boardSchema),
  validateBoardMiddleware,
  postBoards
);

export default boardRouter;
