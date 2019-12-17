import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	content: state.content,
});

class ChatMessage extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				yo
			</div>
		)
	}
}

export default connect(mapStateToProps)(ChatMessage)