const { expect } = require("chai");
const recommendationService = require("../../src/services/recommendation/recommendation.service");

describe("Test Recommendation Service", function () {
  it("given Person with id 2 should get TOP 3 similar persons", async function () {
    const userId = 2;
    const expectedPersons = [
      {
        id: 3,
        name: "Larissa",
      },
      {
        id: 1,
        name: "Rafael",
      },
      {
        id: 5,
        name: "Miguel",
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

    const simiarPersons = await recommendationService.getSimilarPersons(
      userId
    );
    expect(simiarPersons).to.deep.equal(expectedPersons);
  });
});
