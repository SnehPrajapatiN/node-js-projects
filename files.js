const { error } = require('console');
const fs = require('fs');


// for syncronous task perform
// fs.writeFileSync("./s1.py","print('hey there')");
// 

// for async task perform
fs.writeFile("./s2.py","print('hey there this is node')", (err) => {});