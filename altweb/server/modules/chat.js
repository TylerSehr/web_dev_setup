const Socket = require('socket.io')

class ChatMessage {
	constructor(type, sender, project, message){
		this.type = type;
		this.sender = sender;
		this.project = project;
		this.message = message;
	}
}

class ChatServer {
	constructor(server){
		this.io = Socket(server)
		this.chatStream = []
		this.clients = []

		this.io.on('connection', client => {
			console.log('user connected');

			// let joinedMessage = new ChatMessage('joined', 'zog', 'zog', 'zog')
			// this.chatStream.push(joinedMessage)
			// client.broadcast.emit(joinedMessage)

			client.on('chat-message', data => {
				console.log(this.chatStream);
				
				let chatMessage = new ChatMessage('message', client.request.headers.intra, data.project, data.message)
				this.chatStream.push(chatMessage)
				client.broadcast.emit(chatMessage)
				if (this.chatStream.length > 200) {
					while (this.chatStream.length > 200) {
						this.chatStream.pop()
					}
				}
			});
	
			client.on('disconnect', () => {
				console.log('user disconnected');
				
				// this.chatStream.push(new ChatMessage('left', 'zog', 'zog', 'zog'))
			});
	
		});
	}



}

module.exports = ChatServer