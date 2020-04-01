import API from "../utils/API";
const expect = require("chai").expect;

describe("getTechniques", () => {
  it("should return an array of three techniques", () => {
    API.getTechniques()
      .then(data => expect(data).to.be.an("array"))
      .catch(err => console.log(err));
  });
});
