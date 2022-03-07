import db from "../db.js";

export async function getBoards(req, res) {
  const { name } = req.query;

  try {
    if (!name) {
      const { rows: boards } = await db.query(
        'SELECT g.*, c.name AS "categoryName" FROM games g JOIN categories c ON g."categoryId" = c.id'
      );
      return res.send(boards);
    }
    const { rows: boards } = await db.query(
      'SELECT g.*, c.name AS "categoryName" FROM games g WHERE LOWER (name) LIKE LOWER($1) JOIN categories c ON g."categoryId" = c.id'[
        "${name}%"
      ]
    );
    res.send(boards);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function postBoard(req, res) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  try {
    await db.query(
      'INSERT INTO games(name,image,"stockTotal","categoryId","pricePerParty") VALUES($1,$2,$3,$4,$5)',
      [
        name,
        image,
        parseInt(stockTotal),
        parseInt(categoryId),
        parseInt(princePerDay),
      ]
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
