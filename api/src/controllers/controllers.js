const { listarPokemons, detalharPokemon } = require('utils-playground')

const listPokemons = async (req, res) => {
    const pokemons = await listarPokemons()

    res.send(pokemons.results)
}

const detailPokemon = async (req, res) => {
    const { id } = req

    const pokemon = await detalharPokemon(id)

    if (!pokemon) return response.status(404).send({ message: 'not found' })

    res.send({
        "id": pokemon.id,
        "name": pokemon.name,
        "height": pokemon.height,
        "weight": pokemon.weight,
        "base_experience": pokemon.base_experience,
        "forms": pokemon.forms,
        "abilities": pokemon.abilities,
        "species": pokemon.species
    })
}

module.exports = { listPokemons, detailPokemon }