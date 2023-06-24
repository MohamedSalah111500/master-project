const express = require("express");
const dotenv = require('dotenv');
const globalError = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config({ path: 'config.env' });

// Routes
const alertRoute = require('./routes/alerts');
const carRoute = require('./routes/cars');
const driverRoute = require('./routes/drivers')



const dbConnection = require("./config/database");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});
// Connect with db
dbConnection();


// Mount Routes
app.use('/api/v1/alert', alertRoute);
app.use('/api/v1/car', carRoute);
app.use('/api/v1/driver', driverRoute);


// app.use('/api/v1/subcategories', subCategoryRoute);
// app.use('/api/v1/brands', brandRoute);
// app.use('/api/v1/products', productRoute);



// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});

// Handle rejection outside express
process.on('unhandledRejection', (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});