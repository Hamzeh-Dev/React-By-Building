import { useEffect, useState } from "react";

/**
    * useDebounce delays updating the returned value
    * until the user stops changing it for a given delay.
    *
    * Example:
    * User types "phone"
    * Instead of firing API calls for:
    * p -> ph -> pho -> phon -> phone
    *
    * It waits until typing stops,
    * then updates only once with "phone".
*/

export function useDebounce<T>(value: T, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Start a timer whenever value changes
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cancel previous timer if value changes again
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}