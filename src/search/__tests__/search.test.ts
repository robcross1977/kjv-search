import { search } from "../index";
import { searchMocks } from "./__mocks__/mocks";

/**
 * TODO: We do eventually want to run these as e2e tests before we allow
 * it to be checked into the trunk branch. However, we currently don't
 * have it set up on git, so the use for this now is to verify locally that
 * you haven't broken anything. If you want these to run just change xdescribe
 * to describe and xit to it.
 */
xdescribe("search", () => {
  for (const mock of searchMocks) {
    xit(`should return the end result of the search ${mock.search}`, async () => {
      if (mock.sqlResult !== undefined) {
        const result = await search(mock.search);
        expect(result).toEqual(mock.sqlResult);
      }
    });
  }
});
