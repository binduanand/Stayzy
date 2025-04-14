const Joi = require("joi");

module.exports.joiStaySchema = Joi.object({
  stay: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    state: Joi.string().required(),
    image: Joi.object({
      url: Joi.string().allow("", null),
    }),
  }).required(),
});

module.exports.joiReviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
