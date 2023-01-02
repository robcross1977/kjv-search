import { search } from "../index";
import { searchMocks } from "./__mocks__/mocks";

describe("search", () => {
  for (const mock of searchMocks) {
    it(`should return the end result of the search ${mock.search}`, async () => {
      if (mock.sqlResult !== undefined) {
        const result = await search(mock.search);
        expect(result).toEqual(mock.sqlResult);
      }
    });
  }
});
