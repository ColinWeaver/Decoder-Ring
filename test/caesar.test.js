// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

//the below tests are to check that function returns false if the shift values are not: 0, < -25, > 25
describe("caesar", () => {
  it("should return false if shift input is 0", () => {
    const actual = caesar("sentence", 0);
    expect(actual).to.be.false;
  });
});
describe("caesar", () => {
  it("should return false if shift input is less than -25", () => {
    const actual = caesar("sentence", -30);
    expect(actual).to.be.false;
  });
});
describe("caesar", () => {
  it("should return false if shift input is greater than 25", () => {
    const actual = caesar("sentence", 30);
    expect(actual).to.be.false;
  });
});

//the below test checks that function ignores capital letters
describe("caesar", () => {
  it("While Encoding: should return same for capital letter input as non-capital", () => {
    const expected = "fgqj";
    const actual = caesar("Able", 5);
    expect(actual).to.equal(expected);
  });
});
describe("caesar", () => {
  it("While Decoding: should return same for capital letter input as non-capital", () => {
    const expected = "able";
    const actual = caesar("Fgqj", 5, false);
    expect(actual).to.equal(expected);
  });
});

/*the below test checks that function encodes correctly
 if shift moves index past alphabet*/
describe("caesar", () => {
  it("While Encoding: returns encripted message if shift moves letter index past alphabet", () => {
    const expected = "ktc";
    const actual = caesar("fox", 5);
    expect(actual).to.equal(expected);
  });
});
describe("caesar", () => {
  it("While Decoding: returns encripted message if shift moves letter index past alphabet", () => {
    const expected = "fox";
    const actual = caesar("ktc", 5, false);
    expect(actual).to.equal(expected);
  });
});

//the below tests check for that function leaves spaces and non-alphabet characters
describe("caesar", () => {
  it("While Encoding: returns encripted message with spaces and other non-alphabet characters", () => {
    const expected = "f g-q j";
    const actual = caesar("a b-l e", 5);
    expect(actual).to.equal(expected);
  });
});
describe("caesar", () => {
  it("While Decoding: returns encripted message with spaces and other non-alphabet characters", () => {
    const expected = "a b-l e";
    const actual = caesar("f g-q j", 5, false);
    expect(actual).to.equal(expected);
  });
});

//additional tests below
//the below tests check that negative shift inputs work when new index moves past alphabet length
describe("caesar", () => {
  it("While Encoding: returns encripted message if shift is negative and less than alphabet length", () => {
    const expected = "zakd";
    const actual = caesar("able", -1);
    expect(actual).to.equal(expected);
  });
});
describe("caesar", () => {
  it("While Decoding: returns encripted message if shift is negative and less than alphabet length", () => {
    const expected = "able";
    const actual = caesar("zakd", -1, false);
    expect(actual).to.equal(expected);
  });
});

//the below tests check that negative shift inputs work
describe("caesar", () => {
  it("While Encoding: returns encripted message if shift is negative and greater than alphabet length", () => {
    const expected = "zmc";
    const actual = caesar("and", -1);
    expect(actual).to.equal(expected);
  });
});
describe("caesar", () => {
  it("While Decoding: returns encripted message if shift is negative and greater than alphabet length", () => {
    const expected = "and";
    const actual = caesar("zmc", -1, false);
    expect(actual).to.equal(expected);
  });
});
