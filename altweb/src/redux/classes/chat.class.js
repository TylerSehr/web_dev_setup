import io from 'socket.io-client'
import axios from 'axios'
import { store } from '../../index'

export class ChatMessage {
	constructor(project, message){
		this.project = project;
		this.message = message;
	}
}

class ChatEngine {
	constructor(){
		this.loading = true;
		this.socket = io()
		this.chatHistory = []

		this.getMessageHistory()
		this.socket.on('chat-message', (message) => {
			this.chatHistory.push(message)
			store.dispatch({ type: 'GET_CHAT_HISTORY' })
		})
	}

	async getMessageHistory(){
		let history = await axios.get('/chat')
		console.log(history.data);
		this.chatHistory = history.data
		store.dispatch({ type: 'GET_CHAT_HISTORY' })
	}

	sendMessage(message){
		console.log(message);
		this.socket.emit('chat-message', message)
		this.chatHistory.push(message)
		store.dispatch({ type: 'GET_CHAT_HISTORY' })
	}

}

export const chatEngine = new ChatEngine()


