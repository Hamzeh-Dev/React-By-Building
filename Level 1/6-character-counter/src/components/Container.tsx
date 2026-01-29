"use client";

import { useState } from "react";
import Stats from "./stats";

const MAX_LENGTH = 100;

const Container = () => {
    // Single state to store text value
    const [text, setText] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-6">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow space-y-4">
                <h1 className="text-xl font-semibold text-center">Character Counter</h1>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something..."
                    className="w-full h-32 p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* State data passed to the child */}
                <Stats text={text} maxLength={MAX_LENGTH} />
            </div>
        </div>
    );
};

export default Container;
