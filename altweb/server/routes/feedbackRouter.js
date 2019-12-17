const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()

router.post('/', (req, res) =>{
	pool.query('INSERT INTO "feedback" (course_name, "user", feedback) VALUES ($1, $2, $3);', [req.body.courseName, req.body.user, req.body.feedback])
	.catch((err) =>{
		console.log(err);
		
	})
	res.sendStatus(200)
})

module.exports = router