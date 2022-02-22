const db = require("../db/dbConfig.js");


const getAllSneakers = async() => {
        try{
            
            const allSneakers = await db.any("SELECT * FROM sneakers")

            return allSneakers;
            
        } catch(err){
            
            return err;
    }
}

    const getSneaker = async(id) => {
        try{
            const oneSneaker = await db.one("SELECT * FROM sneakers WHERE id=$1", id);
            return oneSneaker;
        } catch(err){
            return err;
        }
}

 const createSneaker = async(sneaker) => {
        try{
            const newSneaker = await db.one(
                "INSERT INTO sneakers (name, description, size, price, rating, featured, image) VALUES($1, $2, $3, $4, $5, $6, $7 ) RETURNING *",
                [sneaker.name, sneaker.description, sneaker.size, sneaker.price, sneaker.rating, sneaker.featured, sneaker.image]
            )
            return newSneaker;
        } catch(err){
            return err;
        }
    }


const deleteSneaker = async(id) => {
        try{
            const deletedSneaker = await db.one(
                "DELETE FROM sneakers WHERE ID = $1 RETURNING *",
                id
            );
            return deletedSneaker;
        }catch(err){
            return err;
        }
    };


const updateSneaker = async(id, sneaker) => {
        try{
            const updatedSneaker = await db.one(
                "UPDATE sneakers SET name = $1, description = $2, size = $3, price = $4, rating = $5, featured = $6 image = $7 WHERE id = $8 RETURNING *",
                [sneaker.name, sneaker.description, sneaker.size, sneaker.price, sneaker.rating, sneaker.featured, sneaker.image, id]
            );
            return updatedSneaker;
        } catch(err){
            return err;
        }
    }

module.exports = {
    getAllSneakers,
    getSneaker,
    createSneaker,
    deleteSneaker,
    updateSneaker
};