import { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Load theme from localStorage or default to system preference
        const storedPreference = localStorage.getItem("darkMode");
        if (storedPreference !== null) {
            return storedPreference === "true";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches; // Default to system preference
    });

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

