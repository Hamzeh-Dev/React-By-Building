"use client"
import { useEffect, useState } from "react";

const Stats = ({
    text: value,
    maxLength,
}: {
    text: string;
    maxLength: number;
}) => {
    // Derived values (NOT state)
    const text = value.trim();
    const charCount = text.length;
    const wordCount = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;
    const linesCount = text.trim()
        ? text.trim().split(/\r?\n/).length
        : 0;

    const remaining = maxLength - charCount;
    const isExceeded = charCount > maxLength;

    // * State Driven (Wront) 
    // Because these values are derived from the text value, NOT independent data.
    // And will cause additional unnecessary re-renders
    // And more places for bugs

    // const [charCount, setCharCount] = useState(0);
    // const [wordCount, setWordCount] = useState(0);
    // const [linesCount, setLinesCount] = useState(0);
    // const [remaining, setRemaining] = useState(maxLength);
    // const [isExceeded, setIsExceeded] = useState(false);

    // useEffect(() => {
    //     const text = value.trim();

    //     const chars = text.length;
    //     const words = text ? text.split(/\s+/).length : 0;
    //     const lines = text ? text.split(/\r?\n/).length : 0;

    //     setCharCount(chars);
    //     setWordCount(words);
    //     setLinesCount(lines);
    //     setRemaining(maxLength - chars);
    //     setIsExceeded(chars > maxLength);
    // }, [value, maxLength]);

    return (
        <div className="space-y-2 text-sm">
            <p>Characters:{" "}<span className="font-medium">{charCount}</span></p>

            <p>Words:{" "}<span className="font-medium">{wordCount}</span></p>

            <p>Lines:{" "}<span className="font-medium">{linesCount}</span></p>

            <p className={`font-medium ${isExceeded ? "text-red-500" : "text-green-600"}`}>
                {isExceeded
                ? "Character limit exceeded"
                : `${remaining} characters remaining`}
            </p>
        </div>
    );
};

export default Stats;
