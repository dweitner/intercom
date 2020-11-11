// const fetch = require("node-fetch");
// const API_ENDPOINT = "http://74.71.87.249/";

exports.handler = async (event, context) => {
    return fetch("http://74.71.87.249/")
      .then((data) => ({
        statusCode: 200,
        body: data,
      }))
      .catch((error) => ({ statusCode: 500, body: String(error) }));
};
