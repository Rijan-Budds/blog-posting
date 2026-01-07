import Logout from "./Logout"
import BlogForm from "./BlogForm"

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dashboard Header */}
            <div className="bg-gray-900 text-white py-8 shadow-lg">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                            <p className="text-primary-light">Create and manage your blog posts</p>
                        </div>
                        <Logout />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <BlogForm />
            </div>
        </div>
    )
}