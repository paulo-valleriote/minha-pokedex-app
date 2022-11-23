const { Router } = require('express')

const { validateId } = require('../middlewares/middleware')
const { listPokemons, detailPokemon } = require('../controllers/controllers')

const router = Router()

router.get('/pokemons', listPokemons)

router.get('/pokemon/:id', validateId, detailPokemon)

module.exports = router