import React from 'react'
import axios from 'axios'
import Cookie from 'universal-cookie'
import './signin.css'

import Header from './header/header'

const cookies = new Cookie();

class SignIn extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		if (cookies.get('session')) {
			window.location.pathname = "/"
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<header className="Login">
					Learn Full-Stack Web development using the SERN Stack!
        		</header>
				<div className="Login">
					<a href="https://api.intra.42.fr/oauth/authorize?client_id=1f5986af685d4b462249978fdd32945c93618f3502137e52137c524045d2c8fa&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fredirect&response_type=code" >
						Login with Intra
          			</a>
				</div>
			</div>
		)
	}
}

export default SignIn