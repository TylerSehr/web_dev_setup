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

const mapStateToProps = state => ({
	content: state.content
})


class SwipeableTemporaryDrawer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			left: false,
			classes: makeStyles({
				list: {
					width: 250,
				},
				fullList: {
					width: 'auto',
				},
			})
		}
	}




	toggleDrawer = (side, open) => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		this.setState({ ...this.state, [side]: open });
	};



	render() {

		const sideList = side => (
			<div
				className={this.state.classes.list}
				role="presentation"
				onClick={this.toggleDrawer(side, false)}
				onKeyDown={this.toggleDrawer(side, false)}
			>
				<List>
					{this.props.content.map((text, index) => (
						<ListItem button key={index}  >
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text.level} />
						</ListItem>
					))}
				</List>
			</div>
		)		

		return (
			<div>
				<Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
				<SwipeableDrawer
					open={this.state.left}
					onClose={this.toggleDrawer('left', false)}
					onOpen={this.toggleDrawer('left', true)}
				>
					{sideList('left')}
				</SwipeableDrawer>
			</div>
		);
	}

}

export default connect(mapStateToProps)(SwipeableTemporaryDrawer)