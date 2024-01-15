const http = require('http');

const endpointUrl = '';

const req = http.request(endpointUrl, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response from the endpoint:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.end();
