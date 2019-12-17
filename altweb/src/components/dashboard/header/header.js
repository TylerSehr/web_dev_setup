import React from 'react'
import './header.css'
import SideBar from '../sidebar/sidebar'

class Header extends React.Component {


	render() {
		return (
			<div className="header">
				<div className="logo">
					∆∫∑
				</div>
				<div className="side-options">
					
				</div>
				<SideBar />
			</div>
		)
	}
}

export default Header