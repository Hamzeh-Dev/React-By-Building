import { createContext, useContext, useState } from "react";

// Theme type
type Theme = "light" | "dark";

/**
    * This describes what data the context will provide
    * Think of it like the "API" of the global state.
*/
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

/**
    * Create the context.
    * ThemeContext is the shared container for our global state.
    * It does NOT hold data by itself.
    * It only defines WHAT data can be shared and accessed
    * (theme + toggleTheme) between components.
    * We start with `null` because we haven't provided it yet.
*/
const ThemeContext = createContext<ThemeContextType | null>(null);

/**
    * ThemeProvider
    * This component HOLDS the global state.
    * Any component wrapped inside it can access the theme.
*/
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    // This is the actual global state
    const [theme, setTheme] = useState<Theme>("light");

    /**
        * This function updates the global state.
        * When theme changes, ALL components using the context re-render.
    */
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    /**
        * The Provider is what actually shares the global state.
        * It makes the value available
        * to all children components.
        * Any component rendered inside ThemeContext.Provider
        * can read and update the theme using useTheme().
    */
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
    * Custom hook to consume the context.
    * This avoids repeating useContext everywhere.
*/
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Safety check: ensures we are inside ThemeProvider
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
};
