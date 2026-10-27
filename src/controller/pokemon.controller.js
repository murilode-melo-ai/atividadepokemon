import pokemonService from "../services/pokemon.service.js";

class PokemonController {
    async getAll(req, res) {
        const pokemon = await pokemonService.getAll();
        return res.json(pokemon);
    }

    async getById(req, res) {
        const pokemon = await pokemonService.getById(req.params.id);
        return res.json(pokemon);
    }

    async create(req, res) {
        const pokemon = await pokemonService.create(req.body);
        return res.status(201).json(pokemon);
    }

    async update(req, res) {
        const pokemon = await pokemonService.update(req.body, req.params.id);
        return res.json(pokemon);
    }

    async delete(req, res) {
        await pokemonService.delete(req.params.id);
        return res.status(204).send();
    }
}

export const pokemonController = new PokemonController();