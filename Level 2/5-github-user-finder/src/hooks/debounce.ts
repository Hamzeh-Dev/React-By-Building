import { useState, useEffect } from "react";

// For debouncing explanations, head back to Level 2/2-debouncing.

export function useDebounce<T>(value: T, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
