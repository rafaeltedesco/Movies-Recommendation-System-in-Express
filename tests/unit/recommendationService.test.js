const { expect } = require("chai");
const recommendationService = require("../../src/services/recommendation/recommendation.service");

describe("Test Recommendation Service", function () {
  describe("Test calculateUsersSimilarity", function () {
    it("given Person with id 2 should calculate similarity for all other users", async function () {
      const userId = 2;
      const expectedPersons = [
        {
          user_id: 1,
          prob: "0.39",
        },
        {
          user_id: 3,
          prob: "0.40",
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
          user_id: 6,
          prob: "0.00",
        },
      ];

      const usersSimilarity =
        await recommendationService.calculateUsersSimilarity(userId);
      expect(usersSimilarity).to.deep.equal(expectedPersons);
    });
  });

  it.skip("given Person with id 2 should get TOP 3 similar persons", async function () {
    const userId = 2;
    const expectedPersons = [
      {
        id: 3,
        name: "Larissa",
        prob: 0.4,
      },
      {
        id: 1,
        name: "Rafael",
        prob: 0.38,
      },
      {
        id: 5,
        name: "Miguel",
        prob: 0.27,
      },
    ];

    const similarPersons = await recommendationService.getSimilarPersons(
      userId
    );
    expect(similarPersons).to.deep.equal(expectedPersons);
  });
  it.skip("given Person with id 3 should get TOP 3 similar persons", async function () {
    const userId = 3;
    const expectedPersons = [
      {
        id: 1,
        name: "Rafael",
      },
      {
        id: 5,
        name: "Miguel",
      },
      {
        id: 6,
        name: "Leonardo",
      },
    ];

    const simiarPersons = await recommendationService.getSimilarPersons(userId);
    expect(simiarPersons).to.deep.equal(expectedPersons);
  });
});
