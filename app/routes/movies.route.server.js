// Code added in Week 4

import {Router} from "express"; // Import the router modeule from express middleware

import { DisplayMovieList } from "../controllers/movies.controller.server.js"; // importing the movie list function from respective file

const router = Router();

router.get('/movie-list', DisplayMovieList);

export default router; 

// Remember - when you export a variable using default, 
// you do not need curly brackets when importing them in anoher file
// Otherwise you always need {} - system modules like router are put in {} because
// no physical file actually exports them to be imported as of now in class studies 