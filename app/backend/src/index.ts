import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose  from 'mongoose'

// connect to mongoDB
try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("connected to mongoDB")

} catch (error) {

  console.log(error)
}

// create new express instance as app
const app = express();

// use cookie parser to add type cookie req body in the endpoint in middleware
app.use(cookieParser());

// convert body of API requests to json
app.use(express.json());

// parse url
app.use(express.urlencoded({ extended: true }));

// secure the app
app.use(cors());

// start the server
app.listen(7000, () => {
  console.log("server running on localhost:7000");
});
