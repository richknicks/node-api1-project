const express = require('express');
const server = express();
const shortid = require('shortid');

server.use(express.json());
let users = [];

server.post('/api/users', (req, res)=>{
    req.body.id = shortid.generate();
    users.push(req.body);
    (users.name && users.bio)? res.status(201).json(req.body)
    :(!users.name || !users.bio)? res.status(400).json({errorMessage: "Please provide name and bio for the user."})
    :res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
});

server.get('/api/users', (req, res)=>{
 
       req.body? res.status(200).json(req.body):
       res.status(500).json({errorMessage: "The users information could not be retrieved."})
    
})

const PORT=5003;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));