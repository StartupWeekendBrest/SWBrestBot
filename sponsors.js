//TODO use database
var sponsors = [
  {
    name: 'Crédit Mutuel Arkéa'
  },
  {
    name: 'Brest Open Campus'
  },
  {
    name: 'Enedis'
  },
  {
    name: 'Finistère 2.9'
  },
  {
    name: 'Investir en finistère'
  },
  {
    name: 'French Tech B+'
  },
  {
    name: 'Technopole Brest-Iroise'
  },
  {
    name: 'B. digitale globale'
  },
  {
    name: 'Freeletics'
  },
  {
    name: 'C for com'
  }
];
var getSponsors = function (callback){
  //return all mentors
  callback(sponsors);
  return;
}

module.exports = {
  getSponsors : getSponsors,
};
