import { Prisma } from "@prisma/client";
import { Book, Chapter, Verse } from "../lib/types";

export const bibleToPrisma = (book: Book): Prisma.BookCreateArgs => {
  return {
    data: {
      name: book.name,
      chapters: {
        create: createChapters(book.chapters ?? []),
      },
    },
  };
};

const createChapters = (chapters: Chapter[]) =>
  chapters.map<Prisma.ChapterCreateWithoutBookInput>((chapter) => {
    return {
      number: chapter.number,
      verses: {
        create: createVerses(chapter.verses ?? []),
      },
    };
  });

const createVerses = (verses: Verse[]) =>
  verses.map<Prisma.VerseCreateWithoutChapterInput>((verse) => {
    return {
      number: verse.number,
      text: verse.text ?? "",
    };
  });
