import Prisma from "@prisma/client";

const prismaGlobal = global as typeof global & {
  prisma?: Prisma.PrismaClient;
};

const prisma: Prisma.PrismaClient =
  prismaGlobal.prisma ||
  new Prisma.PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? [{ level: "query", emit: "event" }, "error", "warn"]
        : ["error", { level: "query", emit: "event" }],
  });

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

// @ts-ignore
// prisma.$on("query", (e) => {
//   if (process.env.NODE_ENV === "development") {
//     console.log(e);
//   }
// });

export default prisma;
