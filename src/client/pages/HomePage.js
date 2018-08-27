import React from 'react';
import Header from '../components/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<div className="center-align" style={{ marginTop: '200px' }}>
				<h3>Welcome home</h3>
				<p>Check out these awesome feautures</p>
			</div>
		</div>
	);
};

export default {
	component: Home
};
