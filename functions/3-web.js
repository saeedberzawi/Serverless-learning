// http://localhost:8888/.netlify/functions/3-web

const data = require("../utils/data");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
