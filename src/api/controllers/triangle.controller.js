const httpStatus = require('http-status');
const service = require('../services/triangle.service');

/**
 * Classify triangle type
 * @public
 */
const classifyTriangle = async (req, res, next) => {
  const { sizes } = req.body;
  const type = service.classifyTriangle(sizes);

  await service.saveTriangle(type, sizes)

  res.status(httpStatus.CREATED);
  res.json({ type });
};

/**
 * Get history of all classified triangles
 * @public
 */
const getTriangleHistory = async (req, res, next) => {
  const results = await service.queryTrianglesHistory();
  res.status(httpStatus.OK);
  res.json(results);
};

module.exports = {
  classifyTriangle,
  getTriangleHistory
}