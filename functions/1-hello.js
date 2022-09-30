// domain/.netlify/functions/1-hello
// ES6 => export / node => exports

// also we can use call back functions
// exports.handler = (event,context,cb)=>{
// cb(null,{statusCode:200,body:"Hello World!"})
// but async is a better way to use

// event => info about incoming req
// context => use with authincations

const person = {
  name: "Saeed",
  age: 30,
  job: "fron-end developer",
  sons: 2,
  sons_name: "taha & mohammad",
};

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    // body: JSON.stringify(person),
    body: "Our First Netlify Function Example",
  };
};
