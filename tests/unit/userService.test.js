const { expect } = require("chai");
const userService = require("../../src/services/user.service");

describe("Test User Service", function () {
  describe("User Exists? ", function () {
    it("when ask for an invalid userId should return false", async function () {
      const userId = 7;
      const userExists = await userService.exists(userId);
      expect(userExists).to.be.false;
    });
    it("when ask for a valid user should return true", async function () {
      const userId = 1;
      const userExists = await userService.exists(userId);
      expect(userExists).to.be.true;
    });
  });
});
