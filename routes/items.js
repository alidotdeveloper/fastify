const items = require("../Items")
const {getItem,getItems} = require('../controllers/items-controller') 
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
    },
    handler:getItems
}


const getItemOpts = {
schema : {
    response:{
        200:Item

    }
},handler:getItem
}

// get all the items 
function itemRoutes(fastify,options,done){
    fastify.get('/items',getItemsOpts)
   
// get the signle item    

    fastify.get('/items/:id',getItemOpts)
    done()
}


module.exports = itemRoutes