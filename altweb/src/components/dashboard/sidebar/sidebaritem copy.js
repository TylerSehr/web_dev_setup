import React from 'react'
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar'
import TutorialItem from './tutorialitem'

const mapStateToProps = state => ({
	content: state.content
})

class SideBarItem extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sideBarOpen: true
		}
	}

	onSetSidebarOpen = (open) => {
		console.log('level '+ this.props.item.level+ 'opened');
		
		
		this.setState({ sidebarOpen: open });
	}


	render() {
		let content = this.props.item.list.map((course, index) =>{
			return (
				<TutorialItem key={index} course={course} />
			)
		})


		return (
			<div onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}>
				level {this.props.item.level}
				<Sidebar
					children={<b></b>}
					sidebar={<b>{content}</b>}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
					styles={{ sidebar: { background: "white" } }}
				>
				</Sidebar>
			</div>
		)
	}
}

export default connect(mapStateToProps)(SideBarItem)