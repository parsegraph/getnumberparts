import { assert } from "chai";
import getNumberParts from "../src/index";

describe("Package", function () {
  it("works with positive one", () => {
    assert.deepEqual(getNumberParts(1), { sign: 0, exponent: 0, mantissa: 1 });
  });

  it("works with negative one", () => {
    assert.deepEqual(getNumberParts(-1), { sign: 1, exponent: 0, mantissa: 1 });
  });

  it("works with positive integers", () => {
    assert.deepEqual(getNumberParts(2), { sign: 0, exponent: 1, mantissa: 1 });
    assert.deepEqual(getNumberParts(3), {
      sign: 0,
      exponent: 1,
      mantissa: 1.5,
    });
    assert.deepEqual(getNumberParts(4), { sign: 0, exponent: 2, mantissa: 1 });
  });

  it("works with negative integers", () => {
    assert.deepEqual(getNumberParts(-2), { sign: 1, exponent: 1, mantissa: 1 });
    assert.deepEqual(getNumberParts(-3), {
      sign: 1,
      exponent: 1,
      mantissa: 1.5,
    });
    assert.deepEqual(getNumberParts(-4), { sign: 1, exponent: 2, mantissa: 1 });
  });
});
