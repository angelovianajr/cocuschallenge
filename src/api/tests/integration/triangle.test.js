const request = require('supertest');
const TriangleService = require('../../services/triangle.service')
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require("sinon");
const app = require('../../../index');

describe('Users API', async () => {
  let dbTriangles;
  let triangleEquilateral = [10,10,10]
  let triangleIsosceles = [10,5,10]
  let triangleScalene = [8,9,10]

  beforeEach(async () => {
    dbTriangles = [
      {
        "id": 1,
        "type": "isosceles",
        "size_a": 10,
        "size_b": 10,
        "size_c": 1
      },
      {
        "id": 2,
        "type": "equilateral",
        "size_a": 5,
        "size_b": 5,
        "size_c": 5
      }
    ];
  });

  describe('GET /triangles', () => {
    
    it('should get triangles history', () => {
      sinon.stub(TriangleService, 'queryTrianglesHistory').callsFake(() => (dbTriangles));
      return request(app)
      .get('/triangle')
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).to.be.eql(dbTriangles);
      });
    });
  });

  describe('POST /triangles', () => {
    let saveTriangle = false;
    sinon.stub(TriangleService, 'saveTriangle').callsFake(() => (saveTriangle = true));
    beforeEach(async () => {
      saveTriangle = false;
    });

    it('should classify a triangle as equilateral', () => {
      return request(app)
        .post('/triangle')
        .send({ sizes: triangleEquilateral })
        .expect(httpStatus.CREATED)
        .then((res) => {
          expect(res.body.type).to.be.equal('equilateral');
          expect(saveTriangle).to.be.equal(true);
        });
    });

    it('should classify a triangle as isosceles', () => {
      return request(app)
        .post('/triangle')
        .send({ sizes: triangleIsosceles })
        .expect(httpStatus.CREATED)
        .then((res) => {
          expect(res.body.type).to.be.equal('isosceles');
          expect(saveTriangle).to.be.equal(true);
        });
    });

    it('should classify a triangle as scalene', () => {
      return request(app)
        .post('/triangle')
        .send({ sizes: triangleScalene })
        .expect(httpStatus.CREATED)
        .then((res) => {
          expect(res.body.type).to.be.equal('scalene');
          expect(saveTriangle).to.be.equal(true);
        });
    });

    it('should return validation error side 0', () => {
      return request(app)
        .post('/triangle')
        .send({ sizes: [0,0,0] })
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.message).to.be.equal('Validation Error');
          expect(res.body.errors[0].message).to.be.equal('All sides of the triangle must be greater than 0');
        });
    });
  });

  
});
