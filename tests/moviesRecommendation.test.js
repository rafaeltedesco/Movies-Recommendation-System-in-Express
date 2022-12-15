// GIVEN: User with id 2
// WHEN: request a movie recommendation
// THEN:
// - GET all movies watched and evaluation.
// - Calculate distance for each movie evaluated with the same movies evaluateds by other persons
// - GET movies that person with id 2 did not watch from most likely person
// - Calculate probably rate that person 2 will vote
// - recommend movie with best probably rate

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

const { expect } = chai;

describe("Test Recommendation System", function () {
  describe("Reccomend a movie for user with id 2", function () {
    it("should reccomend a movie for user with id 2", async function () {
      const expectedRecommendation = {
        prob: 4.52656746,
        movie: {
          id: 6,
          name: "Pulp Fiction",
        },
      };
      const response = await chai.request(app).get("/recommendation/user/2");

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(expectedRecommendation);
    });
    it("should reccomend a movie for user with id 3", async function () {
      const expectedRecommendation = {
        prob: 4.52656746,
        movie: {
          id: 6,
          name: "Pulp Fiction",
        },
      };
      const response = await chai.request(app).get("/recommendation/user/2");

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(expectedRecommendation);
    });
  });
});
