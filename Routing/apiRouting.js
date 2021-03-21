// fs is a Node standard library package for reading and writing files
const path = require('path');
const fs = require('fs');





// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

module.exports = (app) => {
    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
  
    app.get('/api/notes', (req, res) => {
      console.log("<get----------------->")
      res.json(noteData)
     
      app.post('/api/notes', (req, res) => {
        console.log("<post----------------->")
        noteData.push(req.body)
  
         
      })

       
    });

    

    // If no matching route is found default to home PAY attention to .. for navigating folders
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
};