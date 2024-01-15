const http = require('http');

const endpointUrl = 'http://webhook.site/0c295e94-783e-46d8-8ea3-70e86d0d620c';

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
