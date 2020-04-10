import API from "../utils/API";
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
describe("getTechniques", () => {
  it("should return an array of three techniques", () => {
    API.getTechniques()
      .then(data =>
        expect(data)
          .to.be.an("array")
          .that.has.lengthOf(3)
      )
      .catch(err => console.log(err));
  });
});

describe("getTechniques", () => {
  it("should return an object named technique1", () => {
    API.getTechniques().then(techniques => {
      expect(techniques[0])
        .to.be.an("object")
        .that.includes({ _id: 1, name: "technique1" });

      const points = techniques[0].points;
      expect(points)
        .to.be.an("array")
        .that.has.lengthOf(3);
    });
  });
});
