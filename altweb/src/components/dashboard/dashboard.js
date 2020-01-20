import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import './dashboard.css'

import SideBar from './sidebar/sidebar'
import Header from './header/header'
import ChatWindow from './chatWindow/chatWindow'

const mapStateToProps = state => ({
	content: state.content,
});

class Dashboard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedCourse: 'the selected course'
		}
	}

	componentDidMount() {
		axios.get('/content')
			.then((res) => {
				this.props.dispatch({ type: 'GET_CONTENT', payload: res.data })
			})
	}


	render() {

		return (
			<div className="dashboard">
				<Header /> 
				{/* <ChatWindow /> */}
				<div >
					{this.state.selectedCourse}
				</div>
			
			</div>
		)// fix bug with the header where input fields don't work
	}
}

export default connect(mapStateToProps)(Dashboard)