const express = require('express');
const pokemonRouter = express.Router();
const pokemonService = require('.../pokemon.service.js');

pokemonRouter.get("/", async(req,res) =>{
    const pokemon =await pokemonService.getALL();
    return res.json(pokemon);
});

pokemonRouter.post("/", async(req, res)=> {
    const pokemons = await pokemonService.create(req.body);
    return res.status(208).json(pokemons);
});
