// fs is a Node standard library package for reading and writing files
// const path = require('path');
//shortid needs to be short-id to run properly. it'll give you the error code of Error: Cannot find module 'shortid'
const shortid = require('short-id')
//this tests the connection to shortid by generating a random id in the console log 
console.log(shortid.generate());
const fs = require('fs');


// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

module.exports = (app) => {
    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // READS DB JSON file 
     app.get('/api/notes', (req, res) => {
      fs.readFile("./db/db.json", "utf8", ( err, data) => {
          if (err) throw err;
          var note = JSON.parse(data);
          console.log(data);
          res.json(note);
          console.log("<get----------------->")
        });
      })

  // //POST note data
      app.post('/api/notes', (req, res) => {
  //       // console.log("<post----------------->")
        let savedNote = req.body
        let note;
  //       noteData.push(req.body);
  // //       //assign an id to each note with generate before its read by the fs read file to make sure it can be  individually. we also used generate to test if shortid was connected
  //       req.body.id = shortid.generate()

        fs.readFile("./db/db.json", "utf8", ( err, data) => {
          note = JSON.parse(data);
          console.log(note);
          note.push(savedNote);

          fs.writeFile("./db/db.json",JSON.stringify(note),err =>{
            if (err) throw err;
            res.json(note)
          })
       
        
          // console.log("<post----------------->")
         
          

      })
      //now we need to write the data from json in a string using stringify 
      // fs.writeFile("/db/db.json", JSON.stringify(savedNote),(err) => {
      //   //do we need to req again? it looks like if we linked json stringify to linked note 
      //   res.json(req.body);
      //   if (err) throw err;
      //   console.log('ERROR!!!');

      // });
  
    }
  )
}