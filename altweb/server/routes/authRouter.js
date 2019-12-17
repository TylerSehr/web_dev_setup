const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()
const axios = require('axios')
const SHA256 = require("sha256");

router.get('/redirect', (req, res) => {
	// console.log(req.query.code);
	axios.post('https://api.intra.42.fr/oauth/token', {
		grant_type: 'authorization_code',
		client_id: '1f5986af685d4b462249978fdd32945c93618f3502137e52137c524045d2c8fa',
		client_secret: '78b34b456aba780e48cfa1917b6c10fe6de80ee24e7fcb8ea3ab3e71f52e60b9',
		code: req.query.code,
		redirect_uri: 'http://localhost:5000/auth/redirect',
	})
		.then(result => {
			axios({
				method: 'get',
				url: 'https://api.intra.42.fr/v2/me',
				headers: {
					Authorization: `Bearer ${result.data.access_token}`
				}
			})
				.then((reply) => {
					console.log(reply.data.login);
					let intra = reply.data.login
					let accessToken = result.data.access_token
					const sessionHash = SHA256(`${intra}${accessToken}`)
					pool.query('SELECT "session" FROM "users" WHERE "intra" = $1;', [intra])
						.then(result => {
							if (result.rows.length === 0) {
								pool.query('INSERT INTO "users" (intra, session) VALUES ($1, $2)', [intra, sessionHash])
									.then(response => {
										res.cookie('session', sessionHash)
										res.cookie('intra', intra)
										res.redirect(`http://localhost:3000/`)
									})
									.catch(err => {
										console.log(err);
										res.sendStatus(500)
									})
							}
							else {
								console.log(result.rows[0].session);
								res.cookie('session', result.rows[0].session)
								res.cookie('intra', intra)
								res.redirect(`http://localhost:3000/`)
							}
						})
				})
				.catch(err => {
					console.log(err);
					res.sendStatus(500)
				})
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500)
		})
})




module.exports = router;