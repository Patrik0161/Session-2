function football()
{

  championsLeague = "this is the league of champions who won their league in their country"
  premierLeague = "This is the league of England"
  ligaBbva = "This is the league of Spain"
  bundesliga = "This is the league of Germany"
  europeLeague = "This is the league who came 5th or 4th in their own league"
  franceLeague1 = "This is the league of France"
  serieA = "This is the league of Italy"

  operator = promt ("Please choose one of the following leagues: chamipionsLeague, premierLeague, ligaBbva or bundesliga.")

  if (operator == "championsLeague") {
    op1 = "You have selected championsLeague, "
    document.getElementById("football").innerHTML = op2 + chamipionsLeague
  }

  else
  if (operator == "premierLeague") {
    op2 = "You have selected premierLeague, "
    document.getElementById("football").innerHTML = op2 + premierLeague
  }

else
if (operator == "ligaBbva") {
  op3 = "You have selected ligaBbva, "
  document.getElementById("football").innerHTML = op3 + ligaBbva
}

else
if (operator == "bundesliga") {
  op4 = "You have selected bundesliga, "
  document.getElementById ("football").innerHTML = op4 + bundesliga
}

else
if (operator == "europeLeague") {
  op5 = "You have selected europeLeague, "
  document.getElementById("football").innerHTML = op5 + europeLeague
}

else
if (operator == "franceLeague1") {
  op6 = "You have selected franceLeague1, "
  document.getElementById ("football").innerHTML = op6 + franceLeague1
}

else
if (operator == "serieA") {
  op7 = "You have selected serieA, "
  document.getElementById ("football").innerHTML = op7 + serieA
}
