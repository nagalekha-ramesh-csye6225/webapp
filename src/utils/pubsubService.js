const PubSub = require('PubSub');
const logger = require('./logger.js');

const pubSubClient = new PubSub({});

const publishMessage = async (topicName, messageData) => {
  try {
    const dataBuffer = Buffer.from(JSON.stringify(messageData));
    logger.debug(`Publishing message data : ${dataBuffer} to topic ${topicName}`);
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    logger.info(`Message ${messageId} published to topic ${topicName}.`);
  } catch (error) {
    logger.error(`Error publishing message: ${error}`);
  }
}

module.exports = publishMessage;