'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

const sns = new AWS.SNS();

// const topic = 'arn:aws:sns:us-west-2:096217165370:pickup.fifo';
const topic = 'arn:aws:sns:us-west-2:096217165370:pickup';

const payload = {
  Message: "HELLO",
  TopicArn: topic,
};

sns.publish(payload).promise()
.then(data => {
  console.log(data)
})
.catch(console.error);






