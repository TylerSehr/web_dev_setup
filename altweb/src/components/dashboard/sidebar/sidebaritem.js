import React from 'react'
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar'
import TutorialItem from './tutorialitem'
import './sidebar.css'

const mapStateToProps = state => ({
	content: state.content
})

class SideBarItem extends React.Component {
	constructor(props) {
		super(props)

	}



	render() {
		let content = this.props.item.list.map((course, index) => {
			return (
				<TutorialItem key={index} course={course} />
			)
		})


		return (
			<div className="card-space">
				<div className="card">
					<div className="card-header">
						<h3>Level {this.props.item.level}</h3>
					</div>
					<div className="card-content">

					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(SideBarItem)