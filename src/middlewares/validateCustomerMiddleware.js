import db from "../db.js";

export async function validateCustomer(req, res, next) {
  const { cpf } = req.body;

  try {
    const { rows: cpfReal } = await db.query(
      `SELECT * FROM customers WHERE cpf=$1`,
      [cpf]
    );

    if (cpfReal) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  export async function validateUpdate(req, res, next) {
    const { cpf } = req.body;
    const { id } = req.params;

    try {
      const { rows: sameCpf } = await db.query(
        `SELECT * FROM customers WHERE cpf=$1`,
        [cpf]
      );

      if (sameCpf && sameCpf.id != id) {
        return res.sendStatus(409);
      }
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
