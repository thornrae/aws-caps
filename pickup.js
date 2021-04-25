'use strict';

const uuid = require('uuid').v4;

const {Producer} = require('sqs-producer');

const producer =  Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/096217165370/packages'
});

let counter = 0;

setInterval( async () => {

  try {
  const message = {
    id: uuid(),
    body: `this is message# ${counter++}`
  }

    const response = await producer.send(message);
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}, Math.floor(Math.random() * 500))


// setInterval( () => {
//   let address = (faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}  {{address.zipCode}}"));
//   let customerName = (faker.fake("{{name.lastName}}, {{name.firstName}}"));
//   let orderId = faker.datatype.number();

//   let payload = {
//     storeName: storeName,
//     address: address, 
//     customerName: customerName,
//     orderId: orderId,
//   }
//   console.log(payload);
//   //emit 'pick up' event and attach fake order as payload
//   capsConnection.emit('pickup', payload);
// }, 5000)