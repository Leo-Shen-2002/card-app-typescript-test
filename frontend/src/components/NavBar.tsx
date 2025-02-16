import { NavLink } from "react-router-dom";
import Settings from "./Settings";

export default function NavBar() {
    return (
        <nav className="relative flex justify-center gap-5 p-4 bg-blue-500 dark:bg-blue-700 shadow-md">
            <NavLink 
                className="px-4 py-2 text-xl bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md font-medium text-white transition"
                to={'/'}
            >
                All Entries
            </NavLink>
            <NavLink 
                className="px-4 py-2 text-xl bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md font-medium text-white transition"
                to={'/create'}
            >
                New Entry
            </NavLink>
            <Settings />
        </nav>
    );
}