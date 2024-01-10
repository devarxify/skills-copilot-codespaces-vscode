const express = require('');

const app = express();

const PORT = 3000;


// Handle HTTP route GET requests to the root URL

app.get('/', (req, res) => {

  res.send('Hello, world!');

});


// Start the server

app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`);

});