import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Settings = () => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <div className="fixed top-4 right-4">
            <label className="flex items-center cursor-pointer bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full transition">
                <Sun className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-yellow-500"}`} />
                <div 
                    className={`w-10 h-5 mx-2 bg-gray-300 dark:bg-gray-600 rounded-full relative transition`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <div 
                        className={`absolute top-1 left-1 w-4 h-4 bg-white dark:bg-black rounded-full transition-transform transform ${darkMode ? "translate-x-5" : "translate-x-0"}`}
                    ></div>
                </div>
                <Moon className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-400"}`} />
            </label>
        </div>
    );
};

export default Settings;