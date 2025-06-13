const {Schema,model} = require("mongoose")

const productSchema = Schema({
	title: {
		type: String,
		required: [true, "Product Title Is Required"],
	},
	price: {
		type: Number,
		required: [true, "Product Price Is Required"],
	},
	description: {
		type: String,
		required: [true, "Product Description Is Required"],
	},
	image: {
    type:String,
    required:[true,"Product Image Is Required"]
  },
	rating: {
    type:Number,
  },
});

const ProductModel = model("product",productSchema)

module.exports = ProductModel