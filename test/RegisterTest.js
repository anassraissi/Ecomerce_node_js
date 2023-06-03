
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('make sure server is returnning registration page', () => {
  it('should return a page with status 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        // res.body.should.be.a('object')
        done()
      })
  })
})

describe('make sure register fail on no data', () => {
  it('should return validation errors', (done) => {
    chai.request(app)
      .post('/register')
      .end((err, res) => {
        // res.should.have.status(400)
        console.log('body :', res.body)
        res.body.should.be.a('object')
        done()
      })
  })
})
