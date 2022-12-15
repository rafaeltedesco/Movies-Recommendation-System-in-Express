// [ ] GET ALL MOVIES BY USER
// [ ] GET A MOVIE BY USER

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

const { expect } = chai;

const userMovies = [
  {
    id: 4,
    movie_id: 1,
    user_id: 1,
    stars: 4,
  },
  {
    id: 5,
    movie_id: 2,
    user_id: 1,
    stars: 4.5,
  },
  {
    id: 6,
    movie_id: 3,
    user_id: 1,
    stars: 2.5,
  },
  {
    id: 7,
    movie_id: 4,
    user_id: 1,
    stars: 1.5,
  },
  {
    id: 8,
    movie_id: 5,
    user_id: 1,
    stars: 3.5,
  },
  {
    id: 9,
    movie_id: 6,
    user_id: 1,
    stars: 5,
  },
  {
    id: 10,
    movie_id: 7,
    user_id: 1,
    stars: 4,
  },
];

describe("Test Movie By User", function () {
  describe("/movies/all?userId=id", function () {
    it("should return all movies for user with id 1", async function () {
      const response = await chai.request(app).get("/movies/all").query({
        userId: 1,
      });
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(userMovies);
    });
  });
});
