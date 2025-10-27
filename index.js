const jsonServer = require('json-server')

const cors = require('cors')

const server = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

server.use(cors())
server.use(middleware)
server.use(route)

const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log(`server running in ${PORT}`);
    
})