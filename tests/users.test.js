
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app.js');

chai.use(chaiHttp);

const { expect } = chai;


describe('Test Users routes', function () {
    describe('/GET', function () {
        it('should have status 200', async function () {
            const response = await chai.request(app)
                .get('/')
            expect(response).to.have.status(200)
        })
    })
})