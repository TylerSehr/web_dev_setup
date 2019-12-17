import React from 'react'
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar'

const mapStateToProps = state => ({
	content: state.content
})

class TutorialItem extends React.Component {
	constructor(props) {
		super(props)

	}


	render() {
		console.log(this.props.course.name);
		
		// let content = this.props.


		return (
			<div>
				{this.props.course.name}
			</div>
		)
	}
}

export default connect(mapStateToProps)(TutorialItem)