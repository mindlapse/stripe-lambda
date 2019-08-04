'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports.createPaymentIntent = async event => {

  // stripe.paymentIntents.create({
  //   amount: 2000,
  //   currency: 'usd',
  //   payment_method_types: ['card'],
  // }, function(err, paymentIntent) {
  //   // asynchronously called
  // });


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
