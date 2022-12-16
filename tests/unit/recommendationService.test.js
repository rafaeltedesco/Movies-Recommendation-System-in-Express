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

      const usersSimilarity = await recommendationService.getUsersSimilarity(
        userId
      );
      expect(usersSimilarity).to.deep.equal(expectedPersons);
    });
    it("should sort a list of probs in descending order", async function () {
      const userId = 2;
      const expectedPersons = [
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
      const usersSimilarity = await recommendationService.getUsersSimilarity(
        userId
      );
      recommendationService.sortSimilarity(usersSimilarity);
      expect(usersSimilarity).to.deep.equal(expectedPersons);
    });
  });

  it("should sort a list of probs in ascending order", async function () {
    const userId = 2;
    const expectedPersons = [
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
    const usersSimilarity = await recommendationService.getUsersSimilarity(
      userId
    );
    recommendationService.sortSimilarity(usersSimilarity, false);
    expect(usersSimilarity).to.deep.equal(expectedPersons);
  });
});
