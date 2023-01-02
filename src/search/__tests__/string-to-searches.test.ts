import { getSearches } from "../string-to-searches";
import { searchMocks } from "./__mocks__/mocks";

describe("string-to-searches", () => {
  it("should return an equivalent search object for each search passed to it", () => {
    // arrange
    const searchString = searchMocks.map((sm) => sm.search).join(";");
    const expected = searchMocks.map((sm) => sm.searchObj);

    // act
    const result = getSearches(searchString);

    // assert
    expect(result).toEqual(expected);
  });
});
