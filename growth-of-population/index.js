// generally given parameters:
// p0 (population at begining of year), percent (population % increase), inhab (inhabitants coming or leaving
// each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// Ex. In a small town the population is p0 = 1000 at the beginning of a year. The population regulary
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants? (answer would be 3)

function nbYear(p0, percent, inhab, p){
  const percentNum = (percent / 100);
  let years = 0;

  while (p0 <= p) {
    let newPop = p0 + (p0 * percentNum) + inhab;
    p0 = Math.floor(newPop);
    years++;
  }

  return years;
}
