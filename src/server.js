import http from "node:http" // Importo http nativo do node

import { jsonHandler } from "./middlewares/jsonHandler.js"

async function listener (request, response) { // Inicio função do servidor
    await jsonHandler(request, response)
}

http.createServer(listener).listen(3333) // Crio o servidor com createServer, passo a função para ele e configuro a porta que será executada