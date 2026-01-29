"use client"

import { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./skeleton";

export type User = {
    id: number;
    name: string;
    role: string;
    age: number;
};

const Container = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // tracks if data is loading
    const [users, setUsers] = useState<User[] | null>(null); // stores fetched users
    const [rerender, setRerender] = useState<boolean>(false); // toggled to re-fetch data

    // useEffect runs when the component mounts OR when 'rerender' state changes
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true); // show loading skeleton
                setUsers(null);      // clear previous data

                // Fetch data from API
                const res = await fetch("/api/data");
                
                // Parse JSON response
                const data: User[] = await res.json();

                // save fetched users to state
                setUsers(data);
                
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, [rerender]); // dependency array: re-run fetch when 'rerender' state changes

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md space-y-4">

                <h1 className="text-xl font-semibold text-gray-800 text-center">
                    Users List
                </h1>

                {/* Loading skeletons */}
                <div className="space-y-3">
                    {isLoading && [1, 2, 3].map((i) => <Skeleton key={i} />)}
                </div>

                {/* Render users after data is loaded */}
                {users && (
                    <div className="space-y-2">
                        {users.map((user, index) => (
                            <Card key={index} data={user} />
                        ))}
                    </div>
                )}

                {/* Button to re-fetch users */}
                <button
                    onClick={() => setRerender(prev => !prev)} // toggle rerender to fetch again
                    className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition-colors duration-200 cursor-pointer"
                    disabled={isLoading}
                >
                    Re-Fetch Users Data
                </button>

            </div>
        </div>
    );
};

export default Container;
