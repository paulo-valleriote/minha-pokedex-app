getPokeList.addEventListener('click', async () => {
    try {
        const pokeList = await api.get('/pokemons') // Faz a requisição do lista de pokemons na api
        const data = pokeList.data
        data.pop() // Remove um pokemon indesejado

        data.forEach(poke => {
            const { name } = poke // Desestraturação
            const newItem = document.createElement('li')

            newItem.appendChild(document.createTextNode(convertToUpperCase(name)))

            pokeListContent.appendChild(newItem)
        })
    } catch (err) {
        return console.log(err.message)
    }
})

getPokeId.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const requestedId = document.querySelector('#pokeIdValue')

    try {
        const poke = await api.get(`/pokemon/${requestedId.value.toLowerCase()}`) // Requisição para api com o valor passo pelo usuario

        const { name, id, height, weight, base_experience, abilities } = await poke.data // Destruturação das informações recebidas na requisição da api

        clearInfos() // Remove a lista

        pokeInfos.hidden = false
        pokeName.textContent = convertToUpperCase(name)
        pokeId.textContent = id
        pokeSize.textContent = `Tamanho:  ${height}`
        pokeWeigth.textContent = `Peso:  ${weight}`
        pokeXp.textContent = `Xp padrão:  ${base_experience}`
        pokeAbility.appendChild(createList(abilities))
    } catch (err) {
        return console.log(err)
    }
})

const convertToUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

const clearInfos = () => { // Remove a lista, excluindo as tags filhas do form
    for (const child of pokeAbility.children) {
        pokeAbility.removeChild(child)
    }
}

const createList = (target) => { // Cria uma nova lista contendo as informações requeridas
    const newList = document.createElement('ul') // Cria nova tag <ul></ul>

    target.forEach((data) => { // Laço de repetição para cada habilidade

        const newItem = document.createElement('li') // cria nova tag <li></li>
        newItem.appendChild(document.createTextNode(`Nome: ${convertToUpperCase(data.ability.name)}`)) // Inclui o nome da habilidade na tag criada anteriormente

        return newList.appendChild(newItem) // adiciona o item na lista
    })
    return newList
}