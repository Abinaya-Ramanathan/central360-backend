import dotenv from 'dotenv';
dotenv.config();

import app from './server.js';

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Central360 API listening on http://${host}:${port}`);
});


