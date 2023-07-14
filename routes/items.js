const items = require("../Items")


// get all the items 
function itemRoutes(fastify,options,done){
    fastify.get('/items',(req,reply)=>{

   
        reply.send(items)
    })
   
// get the signle item    

    fastify.get('/items/:id',(req,reply)=>{
    
        const {id} = req.params
        const item = items.find((item) => item.id === id
        )
        reply.send(item)
    })
    done()
}


module.exports = itemRoutes