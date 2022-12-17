const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app.js");

chai.use(chaiHttp);

const { expect } = chai;

const users = require("../../src/database/users.json");
const { OK } = require("../../src/utils/httpResponse/httpStatusCode.js");

describe("Test Users routes", function () {
  describe("GET /users", function () {
    it("should have return all users and status 200", async function () {
      const response = await chai.request(app).get("/users");
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(users);
    });
  });
  describe("GET /users:id", function () {
    it("should return user with id 1", async function () {
      const userId = 1;
      const response = await chai.request(app).get(`/users/${userId}`);
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(users[0]);
    });
  });
});
