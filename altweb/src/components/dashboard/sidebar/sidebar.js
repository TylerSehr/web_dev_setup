import React from 'react'
import { connect } from 'react-redux'
import SideBarItem from './sidebaritem'
import Sidebar from "react-sidebar";


const mapStateToProps = state => ({
	content: state.content,
});

class SideBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sideBarOpen: true
		}
	}

	onSetSidebarOpen = (open) => {
		this.setState({ sidebarOpen: open });
	}

	render() {		
		// console.log(this.props.content);
		

		let content = this.props.content.map((item, index) => {
			return (
				<SideBarItem key={index} item={item} />
			)
		})

		return (
			<Sidebar
				sidebar={<b>{content}</b>}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={{ sidebar: { background: 'rgba(255,255,255,0.5)', "backdropFilter": 'blur(1.5px)'} }}
			>
				<button className="sidebar-button" onClick={() => this.onSetSidebarOpen(true)}>
					=
       			 </button>
			</Sidebar>
		)
	}
}

export default connect(mapStateToProps)(SideBar)