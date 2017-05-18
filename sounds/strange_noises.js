let DISTURBANCES = [];

const STRANGE_NOISE_LOW = 0x0300;
const STRANGE_NOISE_HIGH = 0x036F + 1;

for(let i = STRANGE_NOISE_LOW; i < STRANGE_NOISE_HIGH; i++) DISTURBANCES.push(String.fromCharCode(i));

DISTURBANCES.push('\u0488')
DISTURBANCES.push('\u0489');

module.exports = DISTURBANCES;
