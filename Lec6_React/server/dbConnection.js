const mongoose = require("mongoose");
const DB_URL =
	"mongodb+srv://prabhjeetsandhu010:qwertyuiop@ecommerce-gfg.8q8qzmc.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-gfg";
mongoose.connect(DB_URL).then(() => {
	console.log("DB Connected");
}).catch((err)=>{console.log("Error Connecting To DataBase")})
