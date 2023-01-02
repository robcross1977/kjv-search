import { getRangeFrom } from "../lib/array";
import { Book, Chapter, Verse } from "../lib/types";

const buildSearch = (bookName: string, params: string): Book | undefined => {
  if (hasNonConsecutiveVerses(params)) {
    return buildNonConsecutiveVerses(bookName, params);
  } else if (hasNonConsecutiveChapters(params)) {
    return buildNonConsecutiveChapters(bookName, params);
  } else if (hasChapterVerses(params)) {
    return buildChapterVerses(bookName, params);
  } else if (hasChapters(params)) {
    return buildChapters(bookName, params);
  } else if (hasChapterVerse(params)) {
    return buildChapterVerse(bookName, params);
  } else if (hasChapter(params)) {
    return buildChapter(bookName, params);
  } else if (bookName.trim().length > 0) {
    return buildBook(bookName);
  }
};

const getSearches = (search: string) =>
  search.split(";").reduce<Array<Book>>((p, c) => {
    const [bookName, params] = getBook(c);
    const searchObj = buildSearch(bookName, params);
    return searchObj ? [...p, searchObj] : p;
  }, [] as Array<Book>);

const getBook = (search: string): [bookName: string, params: string] => {
  const bookParts = search.match(/^\s*([1|2|3]?)([a-zA-Z ]+)(.*)/);
  const [_search, bookNum, bookText, remaining] = [
    bookParts?.at(0),
    bookParts?.at(1) ?? "",
    bookParts?.at(2)?.trim() ?? "",
    bookParts?.at(3)?.trim() ?? "",
  ];
  return [
    `${
      bookNum.length > 0 && bookText.length > 0 ? `${bookNum} ` : ""
    }${bookText}`,
    remaining,
  ];
};
const buildBook = (bookName: string): Book => {
  return {
    name: bookName,
    chapters: [],
  };
};

const hasChapter = (params: string) => /^\s*\d+\s*/.test(params);
const getChapter = (params: string) => params.match(/^\s*(\d+)\s*/)?.at(0);
const buildChapter = (bookName: string, params: string): Book => {
  const chapterNumber = parseInt(getChapter(params)!);

  const chapter: Chapter = {
    number: chapterNumber,
    verses: [],
  };

  return {
    name: bookName,
    chapters: [chapter],
  };
};

const hasChapters = (params: string) => /^\s*\d+\s*-\s*\d+\s*/.test(params);
const getChapters = (params: string): Array<number> => {
  const result = params.match(/^\s*(\d+)+\s*-\s*(\d+)+\s*/);
  const digit1 = parseInt(result?.at(1)!);
  const digit2 = parseInt(result?.at(2)!);
  const low = Math.min(digit1, digit2);
  const high = Math.max(digit1, digit2);
  const count = high - low + 1;
  const range = getRangeFrom(low, count);
  return range;
};
const buildChapters = (bookName: string, params: string): Book => {
  const chapters = getChapters(params).map<Chapter>((c) => {
    return {
      number: c,
      verses: [],
    };
  });

  return {
    name: bookName,
    chapters: chapters,
  };
};

const hasChapterVerse = (params: string) =>
  /^\s*\d+\s*:\s*\d+\s*?/.test(params);
const getChapterVerse = (params: string): [chapter: number, verse: number] => {
  const result = params.match(/^\s*(\d+)\s*:\s*(\d+)\s*?/);
  return [parseInt(result!.at(1)!), parseInt(result!.at(2)!)];
};
const buildChapterVerse = (bookName: string, params: string): Book => {
  const [chapter, verse] = getChapterVerse(params);

  return {
    name: bookName,
    chapters: [
      {
        number: chapter,
        verses: [
          {
            number: verse,
          },
        ],
      },
    ],
  };
};

const hasChapterVerses = (params: string) =>
  /^\s*\d+\s*:\s*\d+\s*-\s*\d+\s*/.test(params);
const getChapterVerses = (
  params: string
): [chapter: number, verses: Array<number>] => {
  const result = params.match(/^\s*(\d+)+\s*:\s*(\d+)+\s*-\s*(\d+)+\s*/);
  const chapter = parseInt(result?.at(1)!);
  const digit1 = parseInt(result?.at(2)!);
  const digit2 = parseInt(result?.at(3)!);
  const min = Math.min(digit1, digit2);
  const max = Math.max(digit1, digit2);
  const count = max - min + 1;

  return [chapter, getRangeFrom(min, count)];
};
const buildChapterVerses = (bookName: string, params: string): Book => {
  const [chapter, verses] = getChapterVerses(params);
  const finalVerses = verses.map<Verse>((v) => {
    return {
      number: v,
    };
  });

  return {
    name: bookName,
    chapters: [
      {
        number: chapter,
        verses: finalVerses,
      },
    ],
  };
};

const hasNonConsecutiveChapters = (params: string) =>
  /^\s*\d{1,3}\s*-?\s*\d{0,3}\s*(,\s*\d{1,3}\s*)+/.test(params);
const getNonConsecutiveChapters = (params: string) =>
  params.split(",").reduce<Array<number>>((p, fragment) => {
    const matches = fragment.match(/^\s*(\d{1,3})\s*-?\s*(\d{0,3})\s*/);
    const digit1 = parseInt(matches?.at(1)!);
    const digit2 = parseInt(matches?.at(2)!);

    if (!Number.isNaN(digit1) && !Number.isNaN(digit2)) {
      const lowest = Math.min(digit1, digit2);
      const highest = Math.max(digit1, digit2);
      const range = getRangeFrom(lowest, highest - lowest + 1);
      return [...p, ...range];
    } else if (!Number.isNaN(digit1)) {
      return [...p, digit1];
    }

    // Should be unable to get here from the public interface since we always
    // call hasNonConsecutiveChapters before calling this (at least I hope we do)
    return [...p];
  }, []);
const buildNonConsecutiveChapters = (
  bookName: string,
  params: string
): Book => {
  const chapters = getNonConsecutiveChapters(params);

  return {
    name: bookName,
    chapters: chapters.map((c) => {
      return <Chapter>{
        number: c,
      };
    }),
  };
};

const hasNonConsecutiveVerses = (params: string) =>
  /^\s*\d{1,3}\s*:\s*\d{1,3}\s*,+\s*\d{1,3}\s*/.test(params);
const getNonConsecutiveVerses = (
  params: string
): [chapter: number, verses: Array<number>] => {
  const initialMatches = params.match(/^\s*(\d{1,3})\s*:\s*(\d{1,3})\s*/);
  const chapter = parseInt(initialMatches?.at(1)!);
  const initialVerse = parseInt(initialMatches?.at(2)!);
  const paramsSansInital = params.replace(/^\s*\d{1,3}\s*:\s*\d{1,3}\s*/, "");

  const verses = [
    initialVerse,
    ...paramsSansInital.split(",").reduce<Array<number>>((p, fragment) => {
      const matches = fragment.match(/^\s*(\d{1,3})\s*/);
      const digit = parseInt(matches?.at(1)!);

      if (
        !Number.isNaN(chapter) &&
        !Number.isNaN(initialVerse) &&
        !Number.isNaN(digit)
      ) {
        return [...p, digit];
      } else {
        return p;
      }
    }, []),
  ];

  return [chapter, verses.sort((a, b) => a - b)];
};
const buildNonConsecutiveVerses = (bookName: string, params: string): Book => {
  const [chapter, verses] = getNonConsecutiveVerses(params);

  return {
    name: bookName,
    chapters: [
      {
        number: chapter,
        verses: verses.map((v) => {
          return {
            number: v,
          };
        }),
      },
    ],
  };
};

export { getSearches };
