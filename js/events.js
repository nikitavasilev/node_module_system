// Emit = Making a noise, produce - signalling

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', arg => {
  console.log('Listener called', arg);
});

logger.log('message');
