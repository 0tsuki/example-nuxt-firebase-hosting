import * as functions from 'firebase-functions';
import * as express from 'express';
const auth = require('basic-auth-connect');

const app = express();
app.use(auth(process.env.basicAuth.id, process.env.basicAuth.password));
app.use(express.static(__dirname + '/../../dist'));

export const onRequestBasicAuth = functions.https.onRequest(app);
