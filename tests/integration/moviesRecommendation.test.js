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
const app = require("../../src/app");

chai.use(chaiHttp);

const { expect } = chai;

describe("Test Recommendation", function () {
  describe("Test GET /recommendation", function () {
    describe("When User with id 2", function () {
      it("should show a list of similar persons sorted by similarity", async function () {
        const expectedBody = [
          {
            user_id: 3,
            prob: "0.40",
          },
          {
            user_id: 1,
            prob: "0.39",
          },
          {
            user_id: 5,
            prob: "0.35",
          },
          {
            user_id: 4,
            prob: "0.33",
          },
          {
            user_id: 6,
            prob: "0.00",
          },
        ];
        const response = await chai
          .request(app)
          .get("/recommendation/show-similar-users/2");

        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(expectedBody);
      });
      it("should show a list of similar persons sorted by similarity in ascending order", async function () {
        const expectedBody = [
          {
            user_id: 6,
            prob: "0.00",
          },
          {
            user_id: 4,
            prob: "0.33",
          },
          {
            user_id: 5,
            prob: "0.35",
          },
          {
            user_id: 1,
            prob: "0.39",
          },
          {
            user_id: 3,
            prob: "0.40",
          },
        ];
        const response = await chai
          .request(app)
          .get("/recommendation/show-similar-users/2")
          .query({
            order: 'asc',
          });

        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(expectedBody);
      });
    });
    describe("When user id is invalid", function () {
      it("should return User Not Found when id is invalid", async function () {
        const userId = 7;
        const response = await chai
          .request(app)
          .get(`/recommendation/show-similar-users/${userId}`);
        expect(response).to.have.status(400);
        expect(response.body).to.deep.equal({
          message: "User not found",
        });
      });
    });
  });
});

// describe("Test Recommendation System", function () {
//   describe("Reccomend a movie for user with id 2", function () {
//     it("should reccomend a movie for user with id 2", async function () {
//       const expectedRecommendation = {
//         prob: 4.52656746,
//         movie: {
//           id: 6,
//           name: "Pulp Fiction",
//         },
//       };
//       const response = await chai.request(app).get("/recommendation/user/2");

//       expect(response).to.have.status(200);
//       expect(response.body).to.deep.equal(expectedRecommendation);
//     });
//     it("should reccomend a movie for user with id 3", async function () {
//       const expectedRecommendation = {
//         prob: 5.803767491,
//         movie: {
//           id: 6,
//           name: "Pulp Fiction",
//         },
//       };
//       const response = await chai.request(app).get("/recommendation/user/2");

//       expect(response).to.have.status(200);
//       expect(response.body).to.deep.equal(expectedRecommendation);
//     });
//   });
// });
