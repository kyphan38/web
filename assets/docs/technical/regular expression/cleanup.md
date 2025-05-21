# cleanup

Match all periods (.) at the end of a line, excluding cases where the period is part of "etc."

- `(?<!etc)\.$`

Match all colons (:) at the end of a line

- `:$`
