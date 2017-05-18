const DISTURBANCES = require('./sounds/strange_noises');

const getrandy = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const UTTERANCE = (say, hardness = 25) => {

  let response = []
  say.split('').forEach(c => {
    response.push(c);
    // let n = Math.floor(Math.random() * hardness) + 1;
    [...Array(hardness).keys()].forEach(i => {
      response.push(getrandy(DISTURBANCES));
    });
  });

  return response.join('');
}

module.exports = UTTERANCE;
