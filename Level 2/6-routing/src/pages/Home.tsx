import { Link } from "react-router-dom";

export const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post. React Router is amazing for handling routes in React apps. You can create nested routes, dynamic routes, and protected routes."
  },
  {
    id: 2,
    title: "React Router Guide",
    content: "A detailed guide on React Router v6 features. Learn how to use <Routes>, <Route>, useNavigate, useParams, and implement protected routes easily."
  },
  {
    id: 3,
    title: "Leveling Up React",
    content: "In this post, we explore ways to level up your React skills, including advanced state management, custom hooks, and best practices for scalable apps."
  }
];

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}
            className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-1">Post ID: {post.id}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}