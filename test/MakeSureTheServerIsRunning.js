const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

// Configure chai
chai.use(chaiHttp)
chai.should()
describe('make sure that status is 200', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})
describe('make sure register fail on no data', () => {
  it('should return 400', (done) => {
    chai.request(app)
      .post('/register')
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.a('object')
        done()
      })
  })
})
