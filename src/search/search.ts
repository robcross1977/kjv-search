import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import { toPrisma } from "./searches-to-prisma";
import { getSearches } from "./string-to-searches";
import { Book } from "../lib/types";

const bibleSearchTransaction = async (
  selects: Array<Prisma.BookFindManyArgs>
): Promise<Book[][]> =>
  prisma.$transaction(selects.map((s) => prisma.book.findMany(s))) ??
  ([] as Book[][]);

const search = (search: string) => {
  const searches = getSearches(search);
  const prismaQueries = toPrisma(searches).map((pq) => pq);
  return bibleSearchTransaction(prismaQueries);
};

export { search };
