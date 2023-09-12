const express = require('express');
const path = require('path');
const app = express();

const searchController = require('./controllers/searchController');

// defining port
const PORT = 3000;
// parsing json data from req body
app.use(express.json());

// serving static assets
app.use(express.static('dist'));


// GET route
app.get('/a', searchController.aaa, (req, res) => {
  res.status(200).json({})
  // res.sendFile(path.join(__dirname, '../dist/index.html'));
});



// app.get('/', (req, res, next) => {
//   console.log('Initial GET request is working as intended in server.js');
//   res.status(200).send("hi");
// });



app.use((req, res) => res.status(404).send('Error page not found'))

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  console.error(err);
  return res.status(errObj.status).json(errObj.message);
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})














