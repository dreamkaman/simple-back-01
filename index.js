const https = require('https');

fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/alpha.deadalice.xyz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/alpha.deadalice.xyz/fullchain.pem'),
};

const app = require('./app');

const mongoose = require('mongoose');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    https.createServer(options, app).listen(PORT,() => {
      console.log(`Database connection successful. Server run on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

//Bot EVeteran

// const { botLogic } = require('./bot');

// botLogic();
