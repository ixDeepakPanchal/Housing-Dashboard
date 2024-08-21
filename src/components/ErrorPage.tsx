
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Go back home
      </Link>
    </div>
  )
}

export default ErrorPage