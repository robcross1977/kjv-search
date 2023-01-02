import { Prisma } from "@prisma/client";
import { Book } from "../types";

const toPrisma = (searches: Book[]): Prisma.BookFindManyArgs[] =>
  searches.reduce<Array<any>>((acc, search) => {
    return search.chapters && search.chapters.length > 0
      ? [
          ...acc,
          ...search.chapters.map((ch) => {
            return {
              ...formatSearch(
                search.name,
                ch.number,
                ch.verses?.map((v) => v.number)
              ),
            };
          }),
        ]
      : [...acc, formatSearch(search.name)];
  }, []);

const formatSearch = (
  book: string,
  chapter?: number,
  verses?: Array<number>
): Prisma.BookFindManyArgs => {
  return {
    include: {
      chapters: selectPrismaChapters(book, chapter, verses),
    },
    where: {
      name: { startsWith: book },
    },
  };
};

const selectPrismaChapters = (
  book: string,
  chapter?: number,
  verses?: Array<number>
): Prisma.ChapterFindManyArgs => {
  return chapter
    ? {
        include: {
          verses: selectPrismaVerses(book, verses),
        },
        orderBy: {
          number: "asc",
        },
        where: {
          AND: [
            {
              bookName: { startsWith: book },
            },
            {
              number: chapter,
            },
          ],
        },
      }
    : {
        include: {
          verses: {
            orderBy: {
              number: "asc",
            },
          },
        },
        orderBy: {
          number: "asc",
        },
      };
};

const selectPrismaVerses = (
  book: string,
  verses?: Array<number>
): Prisma.VerseFindManyArgs => {
  return verses && verses.length > 0
    ? {
        where: {
          AND: [
            {
              bookName: { startsWith: book },
            },
            {
              number: {
                in: verses,
              },
            },
          ],
        },
        orderBy: {
          number: "asc",
        },
      }
    : {
        orderBy: {
          number: "asc",
        },
      };
};

export { toPrisma };
