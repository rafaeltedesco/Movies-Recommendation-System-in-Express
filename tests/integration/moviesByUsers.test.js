const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");

chai.use(chaiHttp);

const { expect } = chai;

const userMovies = [
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
];

describe("Test Movie By User", function () {
  describe("/movies using query params", function () {
    it("should return all movies for user with id 1", async function () {
      const response = await chai.request(app).get("/movies").query({
        userId: 1,
      });
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(userMovies);
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

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(expectedMovie);
    });
  });
});
