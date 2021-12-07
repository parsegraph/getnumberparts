import {assert} from "chai";
import todo from "../dist/parsegraph-getnumberparts";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
