import db from "../db.js";

export default async function validateBoardMiddleware(req, res, next) {
  const { name, stockTotal, priceperday, categoryId } = req.body;

  if (parseInt(stockTotal) <= 0 || parseInt(priceperday) <= 0) {
    return res.sendStatus(400);
  }

  try {
    const category = await db.query("SELECT id FROM categories WHERE id=$1", [
      categoryId,
    ]);

    const sameName = await db.query("SELECT id FROM games WHERE name=$1", [
      name,
    ]);

    if (category.rowCount === 0) {
      return res.sendStatus(400);
    }

    if (sameName.rowCount > 0) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
