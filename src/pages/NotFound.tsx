// Routing
import { Link } from 'react-router-dom';

// Icons
import { FaHome } from 'react-icons/fa';

function NotFound() {
    return (
        <>
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-bold mb-8">You're Lost!</h1>
                    <p className="text-4xl mb-8">404 - Page not found.</p>
                    <Link className="btn btn-primary btn-lg" to="/">
                        <FaHome className="mr-3" />
                        Go Home
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;
