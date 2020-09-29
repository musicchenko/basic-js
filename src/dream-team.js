const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  members = members.filter(value => typeof value === 'string');
  members = members.map(value => {
    if(typeof value !== 'string') return false;
    return value.trim();
  });
  let team = "";
  for(let i = 0; i < members.length; i++) {
    team += members[i][0];
  }
  return team.toUpperCase().split("").sort().join("");
};
