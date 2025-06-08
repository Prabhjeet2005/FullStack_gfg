const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {});

router.post("/signup", (req, res) => {
	const { username } = req.body;
	res
		.status(201)
		.send({
			success: true,
			message: `User ${username} Created Successfully`,
			data: { id: 101, ...payload },
		});
});

//Handling Wrong Path
router.all("/*splat",(req,res)=>{
  res.status(404).send({success:false,message:"Wrong Path"})
})

module.exports = router;
