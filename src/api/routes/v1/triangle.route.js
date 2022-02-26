const express = require('express');
const validator = require('express-joi-validation').createValidator({ passError: true });
const controller = require('../../controllers/triangle.controller');
const {
  classifyTriangle,
} = require('../../validations/triangle.validation');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/triangle Classify type of triangle
   * @apiDescription Receives 3 sides of the triangle and return the triangle type
   * @apiVersion 1.0.0
   * @apiGroup Triangles
   *
   * @apiSuccess {Object[]} with triangle type.
   */
  .post(validator.body(classifyTriangle), controller.classifyTriangle)
  /**
   * @api {post} v1/triangle Get history
   * @apiDescription  Get triangles classification history
   * @apiVersion 1.0.0
   * @apiGroup Triangles
   */
  .get(controller.getTriangleHistory);

module.exports = router;
