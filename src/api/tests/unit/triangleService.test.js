
const TriangleService = require('../../services/triangle.service')
const { expect } = require('chai');

describe('Triangle service', async () => {

    it('should test triangle classification equilateral', () => {
        const type = TriangleService.classifyTriangle([10,10,10]);
        expect(type).to.be.equal('equilateral');
    });

    it('should test triangle classification isoceles', () => {
        const type = TriangleService.classifyTriangle([10,5,10]);
        expect(type).to.be.equal('isosceles');
    });

    it('should test triangle classification scalene', () => {
        const type = TriangleService.classifyTriangle([8,9,10]);
        expect(type).to.be.equal('scalene');
    });
});
