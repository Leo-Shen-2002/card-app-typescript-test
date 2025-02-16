import { useTheme } from "../context/ThemeContext";

const Settings = () => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <div className="p-4">
            <label className="flex items-center space-x-2 cursor-pointer">
                <span className="text-lg">Dark Mode</span>
                <input 
                    type="checkbox" 
                    checked={darkMode} 
                    onChange={() => setDarkMode(!darkMode)}
                />
            </label>
        </div>
    );
};

export default Settings;