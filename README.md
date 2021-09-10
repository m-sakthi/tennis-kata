# Tennis Kata with JS

## Tennis Scoring Rules
A game consists of a sequence of points played with the same player serving, and is won by the first side to have won at least four points with a margin of two points or more over their opponent.

| Number of points won |	Corresponding call |
|---|-------:|
| 0	| "Love" |
| 1 | "15"   |
| 2	| "30"   |
| 3	| "40"   |
| 4	| "Game" |

For instance if the server has won three points so far in the game, and the non-server has won one, the score is "40-15".

When both sides have won the same number of points then: when each side has won one, or two, points, the score is described as "15-all" and "30-all", respectively.

When each side have won the same number of points past 4 the score is described as "deuce"