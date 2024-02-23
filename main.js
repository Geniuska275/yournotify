const MySDK = require('./sdk');
const sdk = new MySDK();
const iframe = sdk.createIframe('https://www.example.com', 800, 600);
console.log(iframe)
// Append the iframe to the document body
document.body.appendChild(iframe);
