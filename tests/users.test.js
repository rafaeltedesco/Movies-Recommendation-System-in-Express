const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app.js");

chai.use(chaiHttp);

const { expect } = chai;

const users = require("../src/database/users.json");

describe("Test Users routes", function () {
  describe("/GET", function () {
    it("should have status 200", async function () {
      const response = await chai.request(app).get("/");
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(users);
    });
  });
  describe("GET /:id", function () {
    it("should return user with id 1", async function () {
      const userId = 1;
      const response = await chai.request(app).get(`/${userId}`);
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(users[0]);
    });
  });
});
