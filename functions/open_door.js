import fetch from "node-fetch";

const API_ENDPOINT = "http://http://74.71.87.249//";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 500, body: String(error) }));
};
