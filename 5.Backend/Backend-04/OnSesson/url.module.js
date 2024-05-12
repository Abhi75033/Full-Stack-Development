const url = require('url')

const link = 'http://localhost:5000/products/index.html?user=abhishek&password=1234'

const myurl = url.parse(link,true)

console.log(`Protocol: ${myurl.protocol}`);
console.log(`Host: ${myurl.host}`);
console.log(`Host Name: ${myurl.hostname}`);
console.log(`Path: ${myurl.path}`);
console.log(`path Name: ${myurl.pathname}`);
console.log(`port no: ${myurl.port}`);
console.log(`Query: ${myurl.search}`);
console.log(myurl.slashes);

const Query = myurl.query;
console.log(Query.user);
console.log(Query.password);
