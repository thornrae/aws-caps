'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/096217165370/packages',
  handleMessage: async (message) => {
    console.log(message.body);
  }
});

app.start();