// Code added in Week 4

import {Router} from "express"; // Import the router modeule from express middleware

import { DisplayMovieList } from "../controllers/movies.controller.server.js"; // importing the movie list function from respective file

const router = Router();

router.get('/movies-list', DisplayMovieList);

export default router;