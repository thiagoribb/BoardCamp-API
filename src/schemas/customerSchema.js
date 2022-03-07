import joi from "joi";

const customerSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  cpf: joi.string().required(),
  birthday: joi
    .string()
    .pattern(/^\d{4}\-\d{2}\-\d{2}$/)
    .required(),
});

export default customerSchema;
