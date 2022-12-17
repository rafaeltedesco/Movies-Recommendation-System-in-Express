const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");

chai.use(chaiHttp);

const { expect } = chai;

const movies = require("../../src/database/movies.json");

describe("Test Movies routes", function () {
  describe("GET / movies", function () {
    it("should return all movies", async function () {
      const response = await chai.request(app).get("/movies");
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(movies);
    });
    it("should return movie with id 1", async function () {
      const movieId = 1;
      const response = await chai.request(app).get(`/movies/${movieId}`);
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(movies[0]);
    });
    it('should return 404 and message "User not found" when request for an invalid id', async function () {
      const invalidMovieId = 10;
      const response = await chai.request(app).get(`/movies/${invalidMovieId}`);
      expect(response).to.have.status(404);
      expect(response.body).to.deep.equal({
        message: "User not found",
      });
    });
  });
});
