const express = require('express');
const server = express();
// const shortid = require('shortid');
const PORT=5000;

let users = [];
server.use(express.json());

server.post('/api/users', (req, res)=>{
    const bodyinfo= req.body
    // bodyinfo.id=shortid.generate()
    if(!bodyinfo.name || !bodyinfo.bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        res.status(201).json(users)
    }
    
    // users.push(bodyinfo)
    
});

server.get('/api/users', (req, res)=>{
    res.status(200).json({users, message: "Success"})
    res.status(500).json({ errorMessage: "The users information could not be retrieved." });
    
})

server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));