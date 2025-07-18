// Please don't change the pre-written code
// Import the necessary modules here
// Review and understand the provided folder structure carefully before writing code. 

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import {renderBlogForm,renderBlogs,addBlog} from './src/controllers/blog.controller.js'
const app = express();

// parse form data
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here

app.get('/createBlog',renderBlogForm)
app.get('/',renderBlogs)
app.post('/addBlog',addBlog)

export default app;
