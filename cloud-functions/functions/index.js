const functions = require("firebase-functions");

const firedb = functions.database.ref("/scores/");

exports.getData = functions.https.onRequest((request, response) => {
  response.json(firedb);
});
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
