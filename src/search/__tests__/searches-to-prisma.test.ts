import { searchMocks } from "./__mocks__/mocks";
import { toPrisma } from "../searches-to-prisma";

describe("string-to-searches", () => {
  searchMocks.forEach((v) => {
    it(`should return a prisma search for: ${v.search}`, () => {
      if (v && v.prismaObj && v.searchObj) {
        // arrange
        const expected = Array.isArray(v.prismaObj)
          ? [...v.prismaObj]
          : [v.prismaObj];

        // act
        const result = toPrisma([v.searchObj]);

        // assert
        expect(result).toEqual(expected);
      }
    });
  });
});
