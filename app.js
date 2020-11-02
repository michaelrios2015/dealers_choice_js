//so I think you always need a package.json which creates the package-lock.json and the node_modules
//is there a generic package.json??

//pulling in express
const express = require("express");

//pulling in morgan
const morgan = require("morgan");

//why doe it need ./ to find it?? seems to say check current dir
//not sure where it looks without it I guess wherever it looks for
//express and morgan?? maybe in the json??
const database = require("./database.js");

//putting express into a varible 
const app = express();

//some magic that lets app use morgan
app.use(morgan('dev'));

//not actually using at the moment but should eventully move files into a public folder
app.use(express.static('public'))


//WHere most of the magic happens
//"/" indicates that it goes to our homepage 
app.get("/", (req, res) => {

    const posts = database.list();

    const html = `<!DOCTYPE html>
    <html>
    <head>
    <style>
    *{
        max-width: 1200px;
        margin: auto;
    }
    h1{
        text-align: center;
        padding-bottom: 2rem;
    }
    li{
        list-style-type: none;
    }
    div{
     
    }
    ul{
       width: 80%; 
       margin: auto;
       padding: 0;
    }
    li{
        padding-bottom: .2rem;
        font-size: 1.5rem;
    }
    </style>
    </head>
    <body>
        <h1>Le database</h1>
        <div>
         <ul>
         <!--because map returns an array so this is run be by node before being sent--> 
            ${posts.map(item => `<li><a href=posts/${item.id}>${item.title}</a> By ${item.name}</li>`).join('')}
            </ul>
        </div>
        
    </body>
    </html>
    `





res.send(html)});


// so this allows us to make individual pages for posts 
app.get( '/posts/:id', (req, res) => {
    //console.log( req.params.id ); // --> '7'
    //just get the number we need
    const id = req.params.id;
    //looks for that post 
    const post = database.find(id);
    //sends the post to the computer requesting it 
    
    const html = `<!DOCTYPE html>
    <html>
    <head>
    <style>
    *{
        text-align: center;
    }
    </style>
    </head>
    <body>
      <h1>${post.title} by ${post.name}</h1>
      <div>
        <p>${post.content}</p>
        <p><a href="/">back to the main page</a></p>
        </div>  
    </body>
    </html>`
    
    
    res.send(html);

  });

//does this make it go to port 1337
//what exactly is a port??  
const PORT = 1337;

//presumably simply for debugging but should double check 
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});