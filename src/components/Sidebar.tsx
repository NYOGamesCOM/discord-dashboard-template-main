import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Server, Terminal, Shield, Settings, MessageSquare, TrendingUp, Music } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/servers', icon: Server, label: 'Servers' },
    { path: '/commands', icon: Terminal, label: 'Commands' },
    { path: '/moderation', icon: Shield, label: 'Moderation' },
    { path: '/auto-responder', icon: MessageSquare, label: 'Auto Responder' },
    { path: '/leveling', icon: TrendingUp, label: 'Leveling' },
    { path: '/music', icon: Music, label: 'Music Player' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">Discord Bot</h1>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === item.path
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="inline-block mr-2 w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;