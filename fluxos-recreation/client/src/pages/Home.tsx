import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [currentPage, setCurrentPage] = useState('dashboard');
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleThemeToggle = () => {
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {currentPage === 'dashboard' && <Dashboard />}
          {/* Other pages will be added here */}
        </div>

        {/* Footer */}
        <div className="text-center py-8 text-sm text-gray-500">
          Made with Manus
        </div>
      </main>
    </div>
  );
}
