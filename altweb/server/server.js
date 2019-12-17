const express = require('express')
const app = express()
const server = require('http').createServer(app)

const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter')
const feedbackRouter = require('./routes/feedbackRouter')
const contentRouter = require('./routes/contentRouter')

let ChatServer = require('./modules/chat')

let chatServer = new ChatServer(server)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter)
app.use('/feedback', feedbackRouter) // verify authentication on evertything
app.use('/content', contentRouter)

app.get('/chat', (req, res) => {
	console.log(chatServer.chatStream);
	
	res.send(chatServer.chatStream)
})


app.use(express.static('build'))



const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
	
})