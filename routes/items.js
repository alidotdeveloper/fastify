const items = require("../Items")

//Item schema

const Item = {
    type:'object',
                    properties:{
                        id:{type:'string'},
                        name:{type:'string'},
                    }
}


//option for get all items

const getItemsOpts = {
    schema:{
        response:{
            200:{
                type:'array',
                items:{Item}
            }
        }
    }
}


const getItemOpts = {
schema : {
    response:{
        200:Item

    }
}
}

// get all the items 
function itemRoutes(fastify,options,done){
    fastify.get('/items',getItemsOpts,(req,reply)=>{

   
        reply.send(items)
    })
   
// get the signle item    

    fastify.get('/items/:id',getItemOpts,(req,reply)=>{
    
        const {id} = req.params
        const item = items.find((item) => item.id === id
        )
        reply.send(item)
    })
    done()
}


module.exports = itemRoutes