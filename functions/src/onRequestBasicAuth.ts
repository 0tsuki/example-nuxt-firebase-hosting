import * as functions from 'firebase-functions';
import * as express from 'express';
const auth = require('basic-auth-connect');

const app = express();
app.use(auth(functions.config().basic_auth.id, functions.config().basic_auth.password));
app.use(express.static(__dirname + '/../dist'));

export const onRequestBasicAuth = functions.https.onRequest(app);
