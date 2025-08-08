import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Set page title for SEO
		document.title = '404 - Page Not Found | Amna Auditing';
		
		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', 'Page not found. Return to Amna Auditing homepage for professional audit and assurance services in Qatar.');
		}

		// Redirect to home page after 5 seconds (increased for better UX)
		const timeout = setTimeout(() => {
			navigate('/');
		}, 5000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
			<h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
			<p className="text-lg text-gray-600 text-center mb-4">
				The page you are looking for doesn't exist or has been moved.
			</p>
			<p className="text-gray-500 mb-6">
				Redirecting to homepage in a few seconds...
			</p>
			
			{/* SEO-friendly navigation links */}
			<nav className="flex flex-wrap gap-4 justify-center">
				<Link to="/" className="text-[#5616b3] hover:underline font-medium">
					Home
				</Link>
				<Link to="/about" className="text-[#5616b3] hover:underline font-medium">
					About Us
				</Link>
				<Link to="/contact" className="text-[#5616b3] hover:underline font-medium">
					Contact
				</Link>
				<Link to="/useful-links" className="text-[#5616b3] hover:underline font-medium">
					Useful Links
				</Link>
			</nav>
		</div>
	);
};

export default NotFound;