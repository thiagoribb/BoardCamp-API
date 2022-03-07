import db from "../db.js";

export async function validateRental(req, res, next) {
  const { customerId, gameId, daysRented } = req.body;

  if (parseInt(daysRented) <= 0) {
    return res.sendStatus(400);
  }

  try {
    const board = await db.query("SELECT * FROM games WHERE id=$1", [gameId]);

    if (board.rowCount === 0) {
      return res.sendStatus(400);
    }

    const count = await db.query(
      'SELECT id FROM rentals WHERE "gameId"=$1 AND "returnDate" is null',
      [gameId]
    );

    const stock = board.rows[0].stockTotal;
    const rentals = count.rowCount;

    if (stock - rentals === 0) {
      res.sendStatus(400);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function validateReturn(req, res, next) {
  const { id } = req.params;

  try {
    const rental = await db.query("SELECT * FROM rentals WHERE id=$1", [id]);

    if (rental.rowCount === 0) {
      return res.sendStatus(404);
    }

    if (rental.rows[0].returnDate !== null) {
      return res.sendStatus(400);
    }

    req.locals = rental.rows[0];
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
