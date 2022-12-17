const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");
const sinon = require("sinon");
const fs = require("fs").promises;
chai.use(chaiHttp);

const { expect } = chai;

const movies = JSON.stringify([
  {
    id: 1,
    name: "Avatar",
  },
  {
    id: 2,
    name: "Wakanda Forever",
  },
  {
    id: 3,
    name: "Violent Night",
  },
  {
    id: 4,
    name: "The Avengers",
  },
  {
    id: 5,
    name: "Toy Story",
  },
  {
    id: 6,
    name: "Pulp Fiction",
  },
  {
    id: 7,
    name: "Jurassic Park",
  },
]);

const parsedMovies = JSON.parse(movies);

const {
  OK,
  NOT_FOUND,
} = require("../../src/utils/httpResponse/httpStatusCode");

describe("Test Movies routes", function () {
  afterEach(sinon.restore);
  describe("GET / movies", function () {
    it("should return all movies", async function () {
      sinon.stub(fs, "readFile").resolves(movies);
      const response = await chai.request(app).get("/movies");
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(parsedMovies);
    });
    it("should return movie with id 1", async function () {
      sinon.stub(fs, "readFile").resolves(movies);
      const movieId = 1;
      const response = await chai.request(app).get(`/movies/${movieId}`);
      expect(response).to.have.status(OK);
      expect(response.body).to.deep.equal(parsedMovies[0]);
    });
    it('should return 404 and message "User not found" when request for an invalid id', async function () {
      sinon.stub(fs, "readFile").resolves(movies);
      const invalidMovieId = 10;
      const response = await chai.request(app).get(`/movies/${invalidMovieId}`);
      expect(response).to.have.status(NOT_FOUND);
      expect(response.body).to.deep.equal({
        message: "User not found",
      });
    });
  });
  describe("POST /movies", function () {
    it("should add a new movie", async function () {
      sinon.stub(fs, "writeFile").resolves([{ insertedId: 8 }]);

      const newMovie = {
        name: "Black Adam",
      };
      const expectedBody = {
        id: 8,
        ...newMovie,
      };

      sinon.stub(fs, "readFile").resolves(movies);

      let response = await chai.request(app).post("/movies").send(newMovie);

      expect(response).to.have.status(201);
      expect(response.body).to.deep.equal(expectedBody);

      sinon.restore();

      sinon
        .stub(fs, "readFile")
        .resolves(JSON.stringify([...parsedMovies, expectedBody]));

      response = await chai.request(app).get("/movies");

      expect(response.body).to.deep.equal([...parsedMovies, expectedBody]);
    });
  });
});
