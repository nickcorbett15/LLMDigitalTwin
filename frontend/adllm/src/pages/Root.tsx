
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RootLayout() {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('Home');

    const navigate = useNavigate()

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside
                className={`bg-white text-gray-800 shadow-lg transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-16'} overflow-hidden flex flex-col`} // Changed width for collapsed state to w-16
            >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    {/* Conditionally render App Name */}
                    {isSidebarOpen && <h1 className="text-xl font-bold text-indigo-600 truncate">LLM Digital Twins</h1>}
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
                        aria-label="Toggle sidebar"
                    >
                        {/* Hamburger/Close Icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isSidebarOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
                {/* Conditionally render navigation */}
                {isSidebarOpen && (
                    <nav className="mt-4 flex-1">
                        <ul>
                            {['Home', 'ChatGPT', 'Gemini', 'Llama', 'Analysis', 'RAG-Data'].map((tab) => (
                                <li key={tab}>
                                    <button
                                        onClick={() => {
                                            setActiveTab(tab)
                                            navigate("/"+tab)
                                        }}
                                        className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200
                                        ${activeTab === tab
                                                ? 'bg-indigo-500 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                                            }`}
                                    >
                                       {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-md p-4 flex items-center justify-between z-10">
                    {/* This button is now always visible in the header when the sidebar is closed */}
                    {!isSidebarOpen && (
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
                            aria-label="Open sidebar"
                        >
                            
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            
                        </button>
                    )}
                    <h1 className="text-2xl font-bold text-gray-800 flex-grow text-center md:text-left">
                        {activeTab === 'Home' ? 'Dashboard' : activeTab}
                    </h1>
                    <div className="flex items-center space-x-4">
                        {/* User Avatar/Info Placeholder */}
                        <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-medium">
                            JD
                        </div>
                    </div>
                </header>

                <Outlet/>
            </div>
        </div>

        
    )
}