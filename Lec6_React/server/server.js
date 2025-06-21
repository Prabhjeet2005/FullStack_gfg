const express = require("express");
const cookieParser = require("cookie-parser")
require("./dbConnection.js")	// Connection to DataBase
const router = require("./routes/router");
const cartRouter = require("./routes/cartRouter");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./utils/errorHandler.js");
require("./dbConnection.js")
const app = express();

// app.use() -> configure Middleware
app.use(express.json()); // Parses the incoming body [Middleware Enabled]
app.use(cookieParser())	 // Cookies Sent by browser by default


// app.get("/checkserver/:id/:type", (req, res) => {
// 	console.log(req.path);
// 	console.log(req.params);
// 	console.log(req.params.id);
// 	console.log(req.query);
// 	console.log(req.body);

// 	res.status(200);
// 	res.send({ success: true, message: "Server is running" });
// });

app.use("/user",userRouter)
app.use("/cart",cartRouter)
app.use("/test",router)

app.use(errorHandler);	// Always at last As after any route here go

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server Running on ${PORT}`);
});
