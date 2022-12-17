const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app.js");
const fs = require('fs').promises
const sinon = require('sinon')

chai.use(chaiHttp);

const { expect } = chai;

const users = JSON.stringify([
  {
      "id": 1,
      "name": "Rafael"
  },
  { 
      "id": 2,
      "name": "Matheus"
  },
  {
      "id": 3,
      "name": "Larissa"
  },
  {
      "id": 4,
      "name": "Jessica"
  },
  {
      "id": 5,
      "name": "Miguel"
  },
  {
      "id": 6,
      "name": "Leonardo"
  }
])
const parsedUsers = JSON.parse(users)

const { OK } = require("../../src/utils/httpResponse/httpStatusCode.js");


describe("Test Users routes", function () {
  afterEach(sinon.restore)
  describe("GET /users", function () {
    it("should have return all users and status 200", async function () {
      sinon.stub(fs, 'readFile').resolves(users)
      const response = await chai.request(app).get("/users");
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(parsedUsers);
    });
  });
  describe("GET /users:id", function () {
    beforeEach(()=> {
      sinon.stub(fs, 'readFile').resolves(users)
    })
    it("should return user with id 1", async function () {
      
      const userId = 1;
      const response = await chai.request(app).get(`/users/${userId}`);
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(parsedUsers[0]);
    });
    it("should return status 404 and message \"User not found\" when request an invalid user Id", async function () {
      const invalidUserId = 10;
      const response = await chai.request(app)
        .get(`/users/${invalidUserId}`)

      expect(response).to.have.status(404)
      expect(response.body).to.deep.equal({
        message: 'User not found'
      })
    })
  });
});
