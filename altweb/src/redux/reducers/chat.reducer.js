import { ChatEngine, ChatMessage } from '../classes/chat.class'
import { combineReducers } from 'redux';

const chatEngine = new ChatEngine()

const chat = (state = '', action) => {
	switch (action.type) {
		case 'SEND_CHAT':
			chatEngine.sendMessage(new ChatMessage('zog', action.payload))
			return action.payload
		default:
			return state;
	}
};

const chatHistory = (state = [], action) => {
	switch (action.type) {
		case 'GET_CHAT_HISTORY':
			return chatEngine.chatHistory
		default:
			return state;
	}
}

const store = combineReducers({
	chat,
	chatHistory
});

export default store