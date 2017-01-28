//TODO use database
var orga = [
  {
    name: 'Jessica',
    twitter: '@AnDaolVras'
  },
  {
    name: 'Horacio',
    twitter: '@LostInBrittany'
  },
  {
    name: 'Katell',
    twitter: '@Kaligrame'
  },
  {
    name: 'Glen',
  },
  {
    name: 'Céline',
    twitter: '@celinegodec'
  },
  {
    name: 'Kévin',
    twitter: '@NotD33d33'
  },
  {
    name: 'Maxime Gourmelen',
    twitter: '@MaximeGourmelen'
  },
  {
    name: 'Steven Le Roux',
    twitter: '@StevenLeRoux'
  },
  {
    name: 'Brendan Abolivier',
    twitter: '@BrenAbolivier'
  }
];
var getOrgas = function (callback){
  //return all mentors
  callback(orga);
  return;
}

module.exports = {
  getOrgas : getOrgas,
};
