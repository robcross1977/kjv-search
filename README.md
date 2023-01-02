# King James Version Bible Search

The purpose of this library is two-fold.

1. Generate a database containing the King James version of the bible
2. Expose a `search` function to query that database using everyday bible search strings. Ex. `Genesis 1:1-5`

## Installing

1. Run the command `git clone https://github.com/robcross1977/kjv-search.git` or `git@github.com:robcross1977/kjv-search.git` or `gh repo clone robcross1977/kjv-search` depending on your setup.
2. Run the command `npm i`

## Running the Tests

1. To validate the tests simply work, use the command `npm test`
2. To calculate the test coverage use the command `npm run test:ci`

## Generating the DB

1. Add a .env file to the root of the project.
2. Add an entry to the env file for the database connection string
   1. `DATABASE_URL=<connection string here>`
3. Run the command `npm run build`

## SqlLite DB

If you want to use sqlite you can change the file `./prisma/schema.prisma` to replace: 1. This: `provider = "cockroachdb"` with `provider = "sqlite"` 2. This: `url = env("DATABASE_URL")` with `url = "file:./kjv.db"` 3. Then run the seeder.

This is unnecessary if you just want a sqlite database file to use for your application. I've included it pre-built in `./prisma/kjv.db` and you are welcome to make a copy.

# Query

# Component
