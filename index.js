const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (arr,string) {
return arr.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
});
}
console.log(findMatching(drivers, "Susan"));


function fuzzyMatch (arr, char) {
    let lengthOfChar = char.length;
    return arr.filter(function (name) {
        return name.toLowerCase().slice(0, lengthOfChar) === char.toLowerCase();
    });
}
console.log(fuzzyMatch(drivers, "Sa"));

const driversObj = [
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

function matchName(arr,str) {
    return arr.filter(function (driver) {
        return driver.name.toLowerCase() === str.toLowerCase();
    });
}
console.log(matchName(driversObj, "Bobby"));


    



// Code your solution here
