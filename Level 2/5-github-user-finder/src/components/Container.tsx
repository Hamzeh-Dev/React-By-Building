"use client";

import { useDebounce } from "@/hooks/debounce";
import { useState, useEffect } from "react";

type GitHubUser = {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string;
};

type Repo = {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
};

const Container = () => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const debouncedQuery = useDebounce(query, 500);

  // Fetch user data and repos from GitHub API
    useEffect(() => {
        if (!debouncedQuery) {
            setUser(null);
            setRepos([]);
            setError("");
            return;
        }

        const fetchUser = async () => {
            try {
                setLoading(true);
                setError("");

                // Fetch user info
                const resUser = await fetch(`https://api.github.com/users/${debouncedQuery}`);
                if (!resUser.ok) throw new Error("User not found");
                const userData: GitHubUser = await resUser.json();
                setUser(userData);

                // Fetch user's repositories
                const resRepos = await fetch(`https://api.github.com/users/${debouncedQuery}/repos`);
                const reposData: Repo[] = await resRepos.json();
                setRepos(reposData);
            } catch (err: any) {
                setError(err.message);
                setUser(null);
                setRepos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [debouncedQuery]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16 px-4 text-gray-800">
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 space-y-6">

                <h1 className="text-2xl font-semibold text-center">GitHub User Finder</h1>

                <input type="text" placeholder="Search GitHub username..." value={query} onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                {loading && (
                    <p className="text-center text-gray-500">Loading...</p>
                )}

                {error && (
                    <p className="text-center text-red-500">{error}</p>
                )}

                {user && (
                    <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                        <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full object-cover" />
                        <div className="flex-1 space-y-1">
                            <a href={user.html_url} target="_blank" className="text-lg font-semibold hover:underline">{user.name || user.login}</a>
                            {user.bio && <p className="text-gray-600">{user.bio}</p>}
                            {user.location && <p className="text-gray-500 text-sm">Location: {user.location}</p>}
                            <p className="text-gray-500 text-sm">Followers: {user.followers} | Following: {user.following} | Public Repos: {user.public_repos}</p>
                        </div>
                    </div>
                )}

                {repos.length > 0 && (
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                        <h2 className="font-semibold text-lg">Repositories:</h2>
                        {repos.map((repo) => (
                            <a key={repo.id} href={repo.html_url} target="_blank"
                                className="block p-3 border rounded hover:bg-gray-100 transition"
                            >
                                <p className="font-medium">{repo.name}</p>
                                <p className="text-gray-500 text-sm">
                                Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
                                </p>
                            </a>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Container;
