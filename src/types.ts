export type Chapter = {
  number: number;
  verses?: Array<Verse>;
};

export type Verse = {
  number: number;
  text?: string;
};

export interface Book {
  name: string;
  chapters?: Array<Chapter>;
}
