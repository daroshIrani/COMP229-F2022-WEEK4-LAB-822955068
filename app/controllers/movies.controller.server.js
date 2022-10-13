// Week 4 code added here

import movieModel from '../models/movies.js'; // because the export is 'default' under the movies.js under models folder, we can name any name for the import statement - in this case
                                              // it is called movieModel

export function DisplayMovieList(req,res,next){                                                 // We check if we have a list of things or an error - the function .find asks if 
    movieModel.find(function(err, moviesCollection){                                            // the function has an error what to do and if it is successfull what to do
        if (err){                                                                               // we define what to do if there is an error - we do  error checking  
                                                                                                // because we are now making a db connection with a controller
            console.error(err);
            res.end(err)
        }
        res.render('index', {title:'Movie List', page:'movies/list', movies:moviesCollection} ) // if there is no error render the index page using the same header and footer as index,
                                                                                                // but, page we render is under content/movies/list - title is given as will be filled in
                                                                                                // the index.ejs page and the page it will be directed to is movies/list (follows 
                                                                                                // same pattern as index.controller.server.js) - only difference is that one more variable
                                                                                                // will be rendered which is the movies variable : as the movies collection list - this is 
                                                                                                // used in the /content/movies/list page to generate the rows <% - .....%>
    })
}

// If you need to manipulate the movie list before page is rendered - this is where you do it - The controller renders the page, and the ocnnection here as well