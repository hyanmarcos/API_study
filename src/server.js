const express = require("express")

const app = express()

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
    Id da mensagem: ${id}.
    Para o usuário: ${user}.
    `)
})

app.get("/users", (request, response) => {
    const { page, limit, title } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}. Título: ${title}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is rinning on port ${PORT}`))