import { LayoutDashboard, FileText, Users, Wrench, Calendar, Package, DollarSign, BarChart3, Bell, Settings, Moon, Sun, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Sidebar({ currentPage, onPageChange, isDarkMode, onThemeToggle }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Ordens de Serviço', icon: FileText },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'technicians', label: 'Técnicos', icon: Wrench },
    { id: 'schedule', label: 'Agenda', icon: Calendar },
    { id: 'inventory', label: 'Estoque', icon: Package },
    { id: 'financial', label: 'Financeiro', icon: DollarSign },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-0 lg:w-64'
        } overflow-hidden lg:relative lg:w-64`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-700 font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">FluxOS</h1>
              <p className="text-xs text-purple-200">Gestão de OS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white bg-opacity-20 font-semibold'
                      : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="border-t border-white border-opacity-20 pt-4 space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-700 font-bold">JS</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">João Silva</p>
                <p className="text-xs text-purple-200">Administrador</p>
              </div>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className="w-full justify-start text-white hover:bg-white hover:bg-opacity-10"
              title="Alternar para modo escuro"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 mr-2" />
              ) : (
                <Moon className="w-4 h-4 mr-2" />
              )}
              <span className="text-xs">{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
            </Button>

            {/* Logout */}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-white hover:bg-white hover:bg-opacity-10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span className="text-xs">Sair</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
