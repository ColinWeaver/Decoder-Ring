// Write your tests here!

const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

/*the below test checks that while encoding function encodes 'i' and 'j'
as '42'*/
describe("polybius", () => {
  it("While Encoding: it should encode 'i' and 'j' as '42'", () => {
    const expected = "3242";
    const actual = polybius("hi");
    expect(actual).to.equal(expected);
  });
});

//tests that while decoding function decodes '42' as '(i/j)'
describe("polybius", () => {
  it("While Decoding: it should decode '42' as '(i/j)'", () => {
    const expected = "h(i/j)";
    const actual = polybius("3242", false);
    expect(actual).to.equal(expected);
  });
});

//below tests that function does not acknowledge capital letters while encoding 
describe("polybius", () => {
  it("While Encoding: it should ignore capital letters", () => {
    const expected = "3242";
    const actual = polybius("Hi");
    expect(actual).to.equal(expected);
  });
});

/*below tests that function keeps spaces in the input string 
while encoding/decoding
*/
describe("polybius", () => {
  it("While Encoding: it should keep spaces", () => {
    const expected = "3242 3251131343";
    const actual = polybius("hi hello");
    expect(actual).to.equal(expected);
  });
});
describe("polybius", () => {
  it("While Decoding: it should keep spaces", () => {
    const expected = "h(i/j) hello";
    const actual = polybius("3242 3251131343", false);
    expect(actual).to.equal(expected);
  });
});
