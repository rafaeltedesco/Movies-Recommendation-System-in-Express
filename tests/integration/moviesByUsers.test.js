const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");
const sinon = require("sinon");

const {
  OK,
  NOT_FOUND,
} = require("../../src/utils/httpResponse/httpStatusCode");
const fs = require("fs").promises;

chai.use(chaiHttp);

const { expect } = chai;

const userMovies = JSON.stringify([
  {
    id: 1,
    movie_id: 1,
    user_id: 1,
    stars: 4,
  },
  {
    id: 2,
    movie_id: 2,
    user_id: 1,
    stars: 4.5,
  },
  {
    id: 3,
    movie_id: 3,
    user_id: 1,
    stars: 2.5,
  },
  {
    id: 4,
    movie_id: 4,
    user_id: 1,
    stars: 1.5,
  },
  {
    id: 5,
    movie_id: 5,
    user_id: 1,
    stars: 3.5,
  },
  {
    id: 6,
    movie_id: 6,
    user_id: 1,
    stars: 5.0,
  },
  {
    id: 7,
    movie_id: 7,
    user_id: 1,
    stars: 4.0,
  },
]);

const parsedUserMovies = JSON.parse(userMovies);

describe("Test Movie By User", function () {
  describe("/movies using query params", function () {
    beforeEach(() => {
      sinon.stub(fs, "readFile").resolves(userMovies);
    });
    afterEach(sinon.restore);
    it("should return all movies for user with id 1", async function () {
      const response = await chai.request(app).get("/movies").query({
        userId: 1,
      });
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(parsedUserMovies);
    });
    it("should return movie with id 7 from user 1", async function () {
      const expectedMovie = {
        id: 7,
        movie_id: 7,
        user_id: 1,
        stars: 4.0,
      };
      const response = await chai.request(app).get("/movies").query({
        userId: 1,
        movieId: 7,
      });

      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(expectedMovie);
    });
    it('should return 404 and message "User not found" when request an invalid user id', async function () {
      const response = await chai.request(app).get("/movies").query({
        userId: 10,
      });

      expect(response).to.have.status(NOT_FOUND);
      expect(response.body).to.deep.equal({
        message: "User not found",
      });
    });
    it('should return 404 and message "Movie not found" when request for an invalid movie id', async function () {
      const response = await chai.request(app).get("/movies").query({
        userId: 3,
        movieId: 4,
      });

      expect(response).to.have.status(NOT_FOUND);
      expect(response.body).to.deep.equal({
        message: "Movie not found",
      });
    });
  });
});
