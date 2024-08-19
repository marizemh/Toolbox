// backend/test/files.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe('Files API', () => {
  it('should return all files data', (done) => {
    chai.request(app)
      .get('/files/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        res.body.forEach(file => {
          expect(file).to.have.property('file');
          expect(file).to.have.property('lines').that.is.an('array');
        });
        done();
      });
  });

  it('should return specific file data if fileName is provided', (done) => {
    const fileName = 'test1.csv';
    chai.request(app)
      .get(`/files/data?fileName=${fileName}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').that.is.not.empty;
        res.body.forEach(file => {
          expect(file.file).to.equal(fileName);
        });
        done();
      });
  });
});
