const express = require("express");
const sneakers = express.Router();

const { getAllSneakers, getSneaker, createSneaker, deleteSneaker, updateSneaker } = require("../queries/sneakers.js");


sneakers.get("/", async (req, res) => {
    try{
        const allSneakers = await getAllSneakers()
        // console.log(allSneakers)
        if (allSneakers[0]) {
          res.status(200).json(allSneakers)
          } else {
          res.status(500).json({ error: "server error" });
        }
    }catch(err){
        console.log(err)
    }
});

sneakers.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const sneaker = await getSneaker(id);
        if(sneaker.id){
            res.status(200).json(sneaker);
        } else {
            res.status(404).json({ error: "server error" });
        }
    } catch(err){
        console.log(err);
    }
})

sneakers.post("/", async (req, res)=>{
    const { body } = req;
    // body.is_healthy = confirmHealth(body);
    // body.name = snackValidation(body);

    try{
        const createdSneaker = await createSneaker(body)
        if(createdSneaker.id){
            res.status(200).json(createdSneaker)
        }else{
            res.status(422).json({ error : "server error" })
        }
    }catch(err){
        console.log(err)
    }
})

sneakers.delete("/:id", async(req, res)=>{
    const { id } = req.params;
    const deletedSneaker = await deleteSneaker(id);
    if(deletedSneaker.id){
        res.status(200).json({ error : deletedSneaker });
    } else {
        res.status(404).json({ error : "not found"});
    }
})

 sneakers.put("/:id", async(req, res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedSneaker = await updateSneaker(id, body);
    if(updatedSneaker.id){
        res.status(200).json(updatedSneaker);
    } else {
        res.status(404).json({ error : "Sneaker not found" });
    }
})



 


module.exports = sneakers;