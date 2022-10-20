// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.js
// Dated : October 2nd, 2022

// ************** Rememeber to run 'npm install mongoose' (library)

// Importing the needed modules
import express  from "express";

// Week 4 - db setup - modules added here
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Week4 - db setup - Import MOngoose module
import mongoose from "mongoose";
// Week 4 - Configuration module
import { MongoURI, Secret } from "../config/config.js";






//*************************Routes******************************************* */
// Importing the 'router' object created in the index.route.server.js file
import indexRouter from './routes/index.route.server.js';
// Week 4 - Added here
import movieRouter from './routes/movies.route.server.js'; // since the router object is exported as default
                                                        // within the movies.route.server.js, you can name the
                                                        // import object anything not just 'router' which is what its 
                                                        // name is in the movies.route.server.js file
 // ***************************************************************************


// Instantiating the express module to be used later as an object
const index = express();

// Week 4 - completing db configuration
mongoose.connect(MongoURI); // connection to mongo db opened using mongoose module
const db = mongoose.connection // 'db' constant stores the connection opened above within it (instantiating the mongoose connection to listen for events from mongoDB)


// Week 4 - We now use the 'db' onject to Listen for connection successes/errors
db.on('open', () => console.log("connected to MongoDB"));
db.on('error', () => console.log("Mongo connection error"));

// Setting up middlewares
// Setting up the view engine to be using EJS
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false}));
index.use(cookieParser());
// Code that tells the client browser that the public folder is static so that it can be rendered on the client end - Remember that the public being joined to the 
// url (our 'app/') only indicates that statically the public folder is to be used, you have to direct in 'href=' for stylesheets and content as '/'+ public + rest of folder hierarchy....
index.use(express.static(path.join(__dirname, '../public')));
// **********************************************************
index.use(session({           
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// telling this file to use routing logic for index.ejs file from router folder which contains the file above
// wiring up index router 
index.use('/', indexRouter);
// Week4 - Code added here
// Wiring up movies router
index.use('/', movieRouter);

export default index;
