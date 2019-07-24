// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str){
  return str.split(' ').map(word => {
    return word.length
  })
  .sort((a,b) => {return a - b})[0];
}
