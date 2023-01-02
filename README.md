# King James Version Bible Search

This library exposes a single function - search. You input a bible search string, which can take many forms, and it'll spit back out a JSON object containing the results of the query.

## Installing

1. git clone
2. npm install
3. npm run build

# Query

# Component

"Ge;Ex 1;Levit 1-3;Deut 2:2-5;Rut 2:2,5,7;Jud 1,3,5,7"

// Split on the semi-colon
const queries = [
" 1 Jo ",
" Ex 1 ",
" Levit 1 - 3 ",
" Deut 2 : 2 - 5 ",
" Rut 2 : 2 , 5 , 7 ",
" Jud 1 , 3 , 5, 7 "
]
