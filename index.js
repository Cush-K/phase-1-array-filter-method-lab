const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, str) {

    return arr.filter(elem => elem.toLowerCase() === str.toLowerCase());

}

// console.log(findMatching(drivers, "Bobby"));

const drivers2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function fuzzyMatch(arr, str){
    return arr.filter(elem => elem.slice(0, 1).toLowerCase() === str.slice(0, 1).toLowerCase());
}
console.log(fuzzyMatch(drivers2, "b"));


const drivers3 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


  function matchName (arr, str){
    return arr.filter(elem => elem.name === "Bobby");
  }

//   console.log(matchName(drivers3, "Bobby"));