import prisma from "../lib/prisma";
import { Book } from "../types";
import { bibleToPrisma } from "./bibleToPrisma";

// Book Objects
import OneChronicles from "./books/1Chronicles";
import OneCorinthians from "./books/1Corinthians";
import OneJohn from "./books/1John";
import OneKings from "./books/1Kings";
import OnePeter from "./books/1Peter";
import OneSamuel from "./books/1Samuel";
import OneThessalonians from "./books/1Thessalonians";
import OneTimothy from "./books/1Timothy";
import TwoChronicles from "./books/2Chronicles";
import TwoCorinthians from "./books/2Corinthians";
import TwoJohn from "./books/2John";
import TwoKings from "./books/2Kings";
import TwoPeter from "./books/2Peter";
import TwoSamuel from "./books/2Samuel";
import TwoThessalonians from "./books/2Thessalonians";
import TwoTimothy from "./books/2Timothy";
import ThreeJohn from "./books/3John";
import Acts from "./books/Acts";
import Amos from "./books/Amos";
import Colossians from "./books/Colossians";
import Daniel from "./books/Daniel";
import Deuteronomy from "./books/Deuteronomy";
import Ecclesiastes from "./books/Ecclesiastes";
import Ephesians from "./books/Ephesians";
import Esther from "./books/Esther";
import Exodus from "./books/Exodus";
import Ezekiel from "./books/Ezekiel";
import Ezra from "./books/Ezra";
import Galatians from "./books/Galatians";
import Genesis from "./books/Genesis";
import Habakkuk from "./books/Habakkuk";
import Haggai from "./books/Haggai";
import Hebrews from "./books/Hebrews";
import Hosea from "./books/Hosea";
import Isaiah from "./books/Isaiah";
import James from "./books/James";
import Jeremiah from "./books/Jeremiah";
import Job from "./books/Job";
import Joel from "./books/Joel";
import John from "./books/John";
import Jonah from "./books/Jonah";
import Joshua from "./books/Joshua";
import Jude from "./books/Jude";
import Judges from "./books/Judges";
import Lamentations from "./books/Lamentations";
import Leviticus from "./books/Leviticus";
import Luke from "./books/Luke";
import Malachi from "./books/Malachi";
import Mark from "./books/Mark";
import Matthew from "./books/Matthew";
import Micah from "./books/Micah";
import Nahum from "./books/Nahum";
import Nehemiah from "./books/Nehemiah";
import Numbers from "./books/Numbers";
import Obadiah from "./books/Obadiah";
import Philemon from "./books/Philemon";
import Philippians from "./books/Philippians";
import Proverbs from "./books/Proverbs";
import Psalms from "./books/Psalms";
import Revelation from "./books/Revelation";
import Romans from "./books/Romans";
import Ruth from "./books/Ruth";
import SongofSolomon from "./books/SongofSolomon";
import Titus from "./books/Titus";
import Zechariah from "./books/Zechariah";
import Zephaniah from "./books/Zephaniah";

const books: Book[] = [
  OneChronicles,
  OneCorinthians,
  OneJohn,
  OneKings,
  OnePeter,
  OneSamuel,
  OneThessalonians,
  OneTimothy,
  TwoChronicles,
  TwoCorinthians,
  TwoJohn,
  TwoKings,
  TwoPeter,
  TwoSamuel,
  TwoThessalonians,
  TwoTimothy,
  ThreeJohn,
  Acts,
  Amos,
  Colossians,
  Daniel,
  Deuteronomy,
  Ecclesiastes,
  Ephesians,
  Esther,
  Exodus,
  Ezekiel,
  Ezra,
  Galatians,
  Genesis,
  Habakkuk,
  Haggai,
  Hebrews,
  Hosea,
  Isaiah,
  James,
  Jeremiah,
  Job,
  Joel,
  John,
  Jonah,
  Joshua,
  Jude,
  Judges,
  Lamentations,
  Leviticus,
  Luke,
  Malachi,
  Mark,
  Matthew,
  Micah,
  Nahum,
  Nehemiah,
  Numbers,
  Obadiah,
  Philemon,
  Philippians,
  Proverbs,
  Psalms,
  Revelation,
  Romans,
  Ruth,
  SongofSolomon,
  Titus,
  Zechariah,
  Zephaniah,
];

// K.I.S.S. - The bible should never change. If you are seeding the db
// easier to delete data and create rather than upsert
const clearDb = () => prisma.book.deleteMany({});

(async () => {
  console.log("Starting DB Seed");
  await prisma.$connect();

  console.log("Writing KJV");
  await prisma.$transaction([
    clearDb(),
    ...books.map((b) => prisma.book.create(bibleToPrisma(b))),
  ]);

  await prisma.$disconnect();
  console.log("DB seed complete");
})();
