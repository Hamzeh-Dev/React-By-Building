import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./Home";

const Post = () => {
    // useParams gives access to dynamic route params (e.g., /posts/:id)
    const { id } = useParams();

    // useNavigate allows us to programmatically navigate to another route
    const navigate = useNavigate();

    // Find the post that matches the id from the route
    // Convert id to Number because useParams returns a string
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <h1 className="text-4xl font-bold text-red-500">Post Not Found</h1>
                <p className="text-gray-600 text-lg">The post you are looking for does not exist.</p>
                {/* Button to navigate back */}
                <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
            <p className="text-gray-600 whitespace-pre-line">{post.content}</p>
            {/* Button to navigate back */}
            <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
                Go Back
            </button>
        </div>
    );
}

export default Post;