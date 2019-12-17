import React from 'react'
import { connect } from 'react-redux'

import ChatMessage from './chatMessage'
import './chat.css'


const mapStateToProps = state => ({
	chat: state.chat
})


class ChatWindow extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			message: ''
		}
	}

	componentDidMount(){
	}

	messageChange = (event) => {
		this.setState({
			message: event.target.value
		})
	}

	submitMessage = (event) => {
		event.preventDefault();
		this.props.dispatch({ type: 'SEND_CHAT', payload: this.state.message})
	}

	render(){
		let content;

		content = this.props.chat.chatHistory.map((chat, index) => {
			return(<ChatMessage key={index} chat={chat}/>)
		})

		return (
			<div className="chat-window">
				<div className="chat-display">
					{content}
				</div>
				<form onSubmit={this.submitMessage}>
					<input type="text" onChange={this.messageChange}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}
}

export default connect(mapStateToProps)(ChatWindow)