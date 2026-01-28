"use client"

import { useState } from "react";

const Counter = () => {

    // State to store the counter value, initialized at 0
    const [counter, setCounter] = useState<number>(0);

    // The "prev" is the current state value before apply the update.
    // We use "prev" because state updates can be asynchronous, so using it guarantees updating based on the latest value.

    // const handleIncrease = () => setCounter(counter + 1);
    // This one is wrong because it uses the current value of the state at the time this line runs.
    // If u click the button multiple times quickly, the state may not have updated yet, so it can miss some increments.
    
    // Increase the counter by 1
    const handleIncrease = () => setCounter((prev) => prev + 1);
    // Decrease the counter by 1, if not 0
    const handleDecrease = () => setCounter((prev) => prev === 0 ? prev : prev - 1);
    // Reset the counter to 0
    const handleReset = () => setCounter(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-sans">
            <h1 className="text-2xl font-semibold mb-6">Counter</h1>

            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={handleIncrease}
                    className="w-10 h-10 text-2xl bg-green-400 text-white rounded hover:bg-green-500 transition cursor-pointer"
                >
                    +
                </button>
                <button
                    onClick={handleDecrease}
                    className="w-10 h-10 text-2xl bg-red-400 text-white rounded hover:bg-red-500 transition cursor-pointer"
                >
                    -
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition cursor-pointer"
                >
                    Reset
                </button>
            </div>

            <div className="text-4xl font-bold">{counter}</div>
        </div>
    )
}

export default Counter;