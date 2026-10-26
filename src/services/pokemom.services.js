import { knex } from "../database/knex.js"


class PokemonServices {

    async getAll() {
        const res = await knex("pokemons");
        return res;
    }

    async create(pokemon) {
        const res = await knex("pokemons").insert(pokemon);
        return res.raws[0];
    }
    

}

export const pokemonService = new PokemonServices();


router.put("/:id", async (req, res) => {
    try {
        const pokemon = await pokemonService.update(req.params.id, req.body);
        return res.json(pokemon);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.patch("/:id", async (req, res) => {
    try {
        const pokemon = await pokemonService.update(req.params.id, req.body);
        return res.json(pokemon);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});