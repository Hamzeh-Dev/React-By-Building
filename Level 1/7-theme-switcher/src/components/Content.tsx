import { useTheme } from "../context/ThemeContext";

/**
 * This component ONLY reads the global state.
 * It does not modify it.
*/

const Content = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`p-6 rounded ${
                theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
            }`}
        >
            <p>Text in <code>{`<Content />`}</code></p>
            <p>Both components read the global theme from Context.</p>
        </div>
    );
};

export default Content;
