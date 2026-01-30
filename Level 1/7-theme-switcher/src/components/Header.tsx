import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

/**
 * This component ONLY reads the global state.
 * It does not modify it.
*/

const Header = () => {
    const { theme } = useTheme();
    return (
        <header className="flex flex-col justify-between items-center gap-4">
            <ThemeToggle />
            <h1 className={`font-semibold p-6 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}>Text in <code>{`<Header />`}</code></h1>
        </header>
    );
};

export default Header;
