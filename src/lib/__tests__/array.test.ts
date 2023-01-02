import { getRangeFrom } from "../array";

describe("array utility", () => {
  describe("getRangeFrom function", () => {
    it("should return an array of numbers from start up to start + count when given a positive start and a positive count", () => {
      // arrange
      const start = 3;
      const count = 3;
      const expected = [3, 4, 5];
      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });

    it("should return an array of numbers from start down to start - count given a positive start and a negative count", () => {
      // arrange
      const start = 3;
      const count = -3;
      const expected = [3, 2, 1];
      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });

    it("should return an array of numbers from start up to start + count given a negative start and a positive count", () => {
      // arrange
      const start = -3;
      const count = 3;
      const expected = [-3, -2, -1];
      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });

    it("should return <> for a negative start and a negative count", () => {
      // arrange
      const start = -3;
      const count = -3;
      const expected = [-3, -4, -5];
      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });

    it("should return an empty array when start is NaN", () => {
      // arrange
      const start = NaN; // this is NaN when parsed
      const count = 3;
      const expected: number[] = [];

      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });

    it("should return <> if count is NaN", () => {
      // arrange
      const start = 3; // this is NaN when parsed
      const count = NaN;
      const expected: number[] = [];

      // act
      const result = getRangeFrom(start, count);

      // assert
      expect(result).toEqual(expected);
    });
  });
});
