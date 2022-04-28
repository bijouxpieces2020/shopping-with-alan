const moongoose = require ("mongoose")
const {schema, model} = require ("moongoose")


const menuItemsSchema = new schema({
name:String,
price:String,
catergory:String

},{
    timestamps:true
})

const MenuItem = model("MenuItem",menuItemsSchema )

module.exports = MenuItem;