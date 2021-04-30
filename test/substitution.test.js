// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

//tests check that function returns 'false' if input alphabet is not 26 characters
describe("substitution", () => {
  it("While Encoding: should return false if alphabet isn't 26 characters", () => {
    const actual = substitution("hi", "axedhfbg*yolp07&5324-!1@/"); //25 characters alphabet
    expect(actual).to.be.false;
  });
});
describe("substitution", () => {
  it("While Decoding: should return false if alphabet isn't 26 characters", () => {
    const actual = substitution("g*", "axedhfbg*yolp07&5324-!1@/", false); //25 characters alphabet
    expect(actual).to.be.false;
  });
});

//General functionality test: tests check that function is encoding/decoding properly
describe("substitution", () => {
  it("should encode input correctly", () => {
    const input = "axedhfbg*yolp07&5324-!1@/$";
    const expected = "g*";
    const actual = substitution("hi", input);
    expect(actual).to.equal(expected);
  });
});
describe("substitution", () => {
  it("should decode input correctly", () => {
    const expected = "hi";
    const actual = substitution("g*", "axedhfbg*yolp07&5324-!1@/$", false);
    expect(actual).to.equal(expected);
  });
});

//below tests check that function returns 'false' for duplicate characters in input
describe("substitution", () => {
  it("While encoding: should return false if input alphabet contains duplicate characters", () => {
    const actual = substitution("hi", "aaedhfbg*yolp07&5324-!1@/q"); //2 'a's at alphabet start
    expect(actual).to.be.false;
  });
});
describe("substitution", () => {
  it("While Decoding: should return false if input alphabet contains duplicate characters", () => {
    const actual = substitution("g*", "aaedhfbg*yolp07&5324-!1@/q", false);
    expect(actual).to.be.false;
  });
});

//below tests check for spaces being kept in string during encoding/decoding
describe("substitution", () => {
  it("While Encoding: should return string with same spaces as input", () => {
    const expected = "g* gh997";
    const actual = substitution("hi hello", "axedhfbg*yo9p07&5324-!1@/q");
    expect(actual).to.equal(expected);
  });
});
describe("substitution", () => {
  it("While Decoding: should return string with same spaces as input", () => {
    const expected = "hi hello";
    const actual = substitution(
      "g* gh997",
      "axedhfbg*yo9p07&5324-!1@/q",
      false
    );
    expect(actual).to.equal(expected);
  });
});

//below tests check that capitalizations are being ignored by function for encoding/decoding
describe("substitution", () => {
  it("While Encoding: should ignore capitalizations", () => {
    const expected = "g*";
    const actual = substitution("Hi", "axedhfbg*yo9p07&5324-!1@/q");
    expect(actual).to.equal(expected);
  });
});
describe("substitution", () => {
  it("While Decoding: should ignore capitalizations", () => {
    const expected = "hi";
    const actual = substitution("G*", "axedhfbg*yo9p07&5324-!1@/q", false);
    expect(actual).to.equal(expected);
  });
});
