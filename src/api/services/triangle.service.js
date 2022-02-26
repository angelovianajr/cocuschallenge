const Triangle = require('../models/triangle.model');

/**
* Query for all triangles history
* @returns {Promise<Triangle>}
*/
const queryTrianglesHistory = async () => {
  return Triangle.findAll();
};

/**
* Save triangle on database
* @param type Type of triangle
* @param sizes Array with 3 values of triangle
* @returns {Promise<Triangle>}
*/
const saveTriangle = async (type, sizes) => {
  const triangle = Triangle.build({
    type,
    size_a: sizes[0],
    size_b: sizes[1],
    size_c: sizes[2]
  });

  return triangle.save();
}

/**
*
* @param values Array with 3 values of triangle
* @returns {Promise<Triangle>}
*/
const classifyTriangle = (values) => {
  const [a, b, c] = values;
  if (a === b && a === c && b === c) {
    return 'equilateral';
  } if (a === b || b === c || a === c) {
    return 'isosceles';
  }
  return 'scalene';
};

module.exports = {
  queryTrianglesHistory,
  classifyTriangle,
  saveTriangle,
};
