const validateId = (req, res, next) => {
    const { id } = req.params

    if (!id) return response.status(400).send({ message: 'invalid id' })

    req.id = id

    next()
}

module.exports = { validateId }