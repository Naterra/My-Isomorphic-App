import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopSlider from './TopSlider';
import { withRouter } from 'react-router-dom';

//const Header = ({ auth }) => {
class Header extends Component {
	render() {
		let auth = this.props.auth;
		console.log('My auth status is', auth);

		const authButton = auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>;


		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">
							React SSR ISO
						</Link>

						<ul className="right">
							<li>
								<Link to="/users">Users</Link>
							</li>
							<li>
								<Link to="/admins">Admins</Link>
							</li>
							<li>{authButton}</li>
						</ul>
					</div>
				</nav>
				{this.props.location.pathname=='/' && <TopSlider />}
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default withRouter(connect(mapStateToProps)(Header));
