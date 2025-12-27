import { Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Header = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false);

	const handleLogin = () => {
		setIsLogin(true);
	};

	const handleLogout = () => {
		setIsLogin(false);
	};

	return (
		<header>
			<h1>DevFeed</h1>

			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
					{isLogin && (
						<li>
							<Link to="/profile">Profile</Link>
						</li>
					)}
				</ul>
			</nav>

			{!isLogin && (
				<>
					<button onClick={handleLogin}>Login</button>
				</>
			)}
			{isLogin && <button onClick={handleLogout}>Logout</button>}
		</header>
	);
};
