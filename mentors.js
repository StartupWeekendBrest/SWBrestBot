//TODO use database
var mentors = {
  technique : [
    {
      name: 'Stéphane Castrec',
      twitter: '@_stephane_'
    },
    {
      name: 'Julien Kermarec',
      twitter: '@JulienKermarec '
    },
    {
      name: 'Olivier Mansencal',
      twitter: '@mansencalo'
    },
    {
      name: 'Fabrice Dantec ',
      twitter: '@fdantec'
    },
    {
      name: 'Angelo Delefortrie',
      twitter: '@angelodlfrtr'
    },
    {
      name: 'Olivier Mansencal',
      twitter: '@mansencalo'
    },
  ],
  bp : [
      {
        name : 'Jennifer Ogor',
        twitter: '@mansencalo'
      },
      {
        name : 'Pierre Leroux',
        twitter: '@pilerou'
      },
      {
        name : 'Sabine Klein',
        twitter: '@Sabine_klein'
      },
      {
        name : 'Erwan Bescond ',
        twitter: ''
      },
      {
        name : 'Mickael Bleuse',
        twitter: '@bleuseMickael'
      }
    ],
  design : [
      {
        name : 'Yanna Fournier',
        twitter: '@pilde29'
      }
    ],
  juridique : [
      {
        name : 'Jean-Pierre Blin',
        twitter: ''
      },
      {
        name : 'Xavier Moal',
        twitter: ''
      }
    ],
  commerce : [
      {
        name : 'Jennifer Ogor',
        twitter: '@mansencalo'
      },
      {
        name : 'Erwan Bescond ',
        twitter: ''
      }
    ],
  };
var getMentors = function (type, callback){
  if(type){
    //search specific mentors
    console.log("returning " + JSON.stringify(mentors[type]));
    callback(mentors[type]);
    return;
  }
  //return all mentors
  callback(mentors);
  return;
}

module.exports = {
  getMentors : getMentors,
};
