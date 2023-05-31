require('dotenv').config();
require('express-async-errors');

const express = require('express');

// FOR EXTRA SECURITY
const helmet = require('helmet');
const cors=require("cors");
const xss=require("xss-clean");
const rateLimiter=require('express-rate-limit');

// DATABASE CONNECTION
const connectDB=require("./db/connect");
const connectDBMain=require("./db/connect-main");

// ROUTES

const registerRoute=require('./routes/main')
const authRoute=require('./routes/authr')
const mvarifyRoute=require("./routes/mail-verification")
const savegame=require("./routes/game")
// MIDDLE
const app = express();

// ERROR HANDLER
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


// middleware
app.use(express.static('./public'));
app.use(express.json());

// ROUTE USe
app.use("/api/v1",registerRoute);
app.use("/api/v1/login",authRoute);
app.use("/api/v1/verify",mvarifyRoute)
app.use("/api/v1/savegame",savegame)

// app.use('/api/v1', mainRouter)

// MIDDLEWARES USE
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await connectDBMain(process.env.MONGO_URI2);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
