"use client"

import { useState } from "react";
import InputBox from "./input-box";
import Preview from "./preview";

const Container = () => {

    // A state to store the input value, lives in the parent and control both children
    const [value, setValue] = useState<string>("");

    return (
        <div className="min-h-screen flex items-center justify-center text-gray-800">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
                <h1 className="text-xl font-semibold text-center">Live Input Preview</h1>

                <InputBox value={value} setValue={setValue} />
                <Preview value={value} />
            </div>
        </div>
    )
}

export default Container;