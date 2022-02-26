const Joi = require('joi');
const { values } = require('lodash');


/**
 * GET /v1/triangle
 * 
 * Validate if has at least 3 values, none of then is zero and is a valid triangle
 */
const classifyTriangle = Joi.object({
  sizes: Joi.custom((values, helper) => {
    if(values.length < 3) {
      return helper.message("Sizes must have at least 3 values")
    }

    if(values.includes(0)) {
      return helper.message("All sides of the triangle must be greater than 0");
    }

    const [a, b, c] = values;
    if(!(a + b >= c && a + c >= b && b + c >= a)) {
      return helper.message("The sum of the lengths of any two sides must be greater than or equal to the length of the third side.")
    }
    return values;
  }),
});

module.exports = {
  classifyTriangle
};
