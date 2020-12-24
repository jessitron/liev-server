#!/usr/bin/env node

var figlet = require('figlet');

console.log("liev-server running from " + __filename);

figlet('Boo!', function (err, data) {
  if (err) {
    console.log('dammit');
    console.dir(err);
    return;
  }
  console.log(data)
});

