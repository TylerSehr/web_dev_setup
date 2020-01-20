import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux'

import SideBarItem from './sidebaritem'

const mapStateToProps = state => ({
	content: state.content,
});

class SideBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sideBarOpen: false
		}
	}

	onSetSidebarOpen = (open) => {
		console.log('est');
		
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	}

	render() {
		// console.log(this.props.content);


		let content = this.props.content.map((item, index) => {
			return (
				<SideBarItem key={index} item={item} />
			)
		})

		return (
			<div>
				<Button onClick={this.onSetSidebarOpen}>Open Left</Button>
				<SwipeableDrawer
					open={this.state.sideBarOpen}
					onClose={this.onSetSidebarOpen}
					onOpen={this.onSetSidebarOpen}
				>
					<List>
						<ListItem >
							yeah
						</ListItem>
					</List>
				</SwipeableDrawer>
			</div>
		)
	}
}

export default connect(mapStateToProps)(SideBar)