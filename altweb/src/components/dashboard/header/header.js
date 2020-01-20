import React from 'react'
import './header.css'
import SideBar from '../sidebar/sidebar'
// import AltSideBar from '../sidebar/alt-sidebar'
// import BootstrapSidebar from '../sidebar/bootstrap-sidebar'

class Header extends React.Component {


	render() {
		return (
			<div className="header">
				<div className="logo">
					∆∫∑
					
				</div>
				<div className="side-options">
					<SideBar />
				</div>
				{/* <BootstrapSidebar /> */}
				
			</div>
		)
	}
}

export default Header