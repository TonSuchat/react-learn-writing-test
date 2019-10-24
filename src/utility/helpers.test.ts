import * as helpers from "./helpers";

describe("utility helper methods", () => {
  it("should generate random string properly", () => {
    const randomNum = helpers.generateRandom();
    expect(typeof randomNum).toBe("string");
  });
});
