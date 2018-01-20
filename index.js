exports.subscribe = (event, callback) => {
  const pubsubMessage = event.data;
  const name = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';
  const age = pubSubMessage.attributes.age ? pubsubMessage.attributes.age : -1;

  console.log(`Hello, ${name}! You are ${age} old`);

  callback();
};
