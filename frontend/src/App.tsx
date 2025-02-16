import React from "react";
import NavBar from './components/NavBar'
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import Settings from "./components/Settings";
import { EntryProvider } from './utilities/globalContext'
import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <ThemeProvider> {/* Wrap with ThemeProvider */}
    <Router>
      <EntryProvider>
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
            <NavBar />
            <div className="p-4">
              <Settings /> {/* Add Settings component for Dark Mode toggle */}
            </div>
            <Routes>
              <Route path="/" element={<AllEntries/>}>
              </Route>
              <Route path="create" element={<NewEntry/>}>
              </Route>
              <Route path="edit/:id" element={<EditEntry/>}>
              </Route>
            </Routes>
        </div>
      </EntryProvider>
      </Router>
    </ThemeProvider>
    
  );
}
