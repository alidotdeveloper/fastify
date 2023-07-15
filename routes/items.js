const items = require("../Items")
const {getItem,getItems,addItem} = require('../controllers/items-controller') 
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

const postItemOpts = {
    schema:{
        body:{
            type:'object',
            requires:['name'],
            properties:{
                name:{type:'string'},
            },
        },

        response:{
            201:Item
        }
    },
    handler:addItem
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
   
// get the single item    

    fastify.get('/items/:id',getItemOpts)


// Add item

fastify.post('/items', postItemOpts)


    done()

}



module.exports = itemRoutes