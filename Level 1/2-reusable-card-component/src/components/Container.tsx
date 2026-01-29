"use client"

import { useState } from "react";
import Card from "./Card";

// User type
export type User = {
    name: string,
    role: string,
    age: number,
    status: "Active" | "Inactive",
}

const Container = () => {

    // A state to store users data as an array
    const [users, setUsers] = useState<User[]>([
        { name: "John Doe", role: "Developer", age: 22, status: "Active" },
        { name: "Jane Smith", role: "Designer", age: 25, status: "Inactive" },
    ]);

    // Update a specific user's data by index
    const updateUser = (index: number, newData: User) => {
        const updatedUsers: User[] = [...users];
        updatedUsers[index] = newData;
        setUsers(updatedUsers);
    };

    return (
        <div className="w-full h-full flex flex-wrap gap-6 p-4">
            {/* Map through the state to render all users into Card reusable component */}
            {users.map((user, index) => (
                <Card
                    key={index}
                    data={user}
                    onUpdate={(newData) => updateUser(index, newData)}
                />
            ))}
        </div>
    )
}

export default Container;