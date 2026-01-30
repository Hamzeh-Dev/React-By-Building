import { useTheme } from "../context/ThemeContext";

/**
 * This component READS and UPDATES global state.
*/

const ThemeToggle = () => {
    // Access theme and toggleTheme from context
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded"
        >
            Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
    );
    };

export default ThemeToggle;
