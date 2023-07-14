const fastify = require ('fastify')({logger:true})
const PORT = 5000

const items = require("./Items")
// making routing
fastify.get('/items',(req,reply)=>{

   
    reply.send(items)
})

fastify.get('/items/:id',(req,reply)=>{

    const {id} = req.params
    const item = items.find((item) => item.id === id
    )
    reply.send(item)
})


// basic setup
const start = async()=>{
    try{
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)

    }
    }

    start()