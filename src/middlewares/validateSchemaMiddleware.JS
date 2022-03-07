export default function validateSchemaMiddleware(schema) {
  return (req, res, next) => {
    const validate = schema.validate(req.body);
    if (validate.error) {
      return res.status(400).send("Schema incorreto");
    }

    next();
  };
}
