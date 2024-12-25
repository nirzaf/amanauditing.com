import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to home page after 3 seconds
		const timeout = setTimeout(() => {
			navigate('/');
		}, 3000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
			<h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
			<p className="text-lg text-gray-600 text-center mb-4">
				The page you are looking for doesn't exist or has been moved.
			</p>
			<p className="text-gray-500">
				Redirecting to homepage in a few seconds...
			</p>
		</div>
	);
};

export default NotFound;