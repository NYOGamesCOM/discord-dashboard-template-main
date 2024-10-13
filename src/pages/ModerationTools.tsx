import React, { useState } from 'react';
import { Shield, UserX, MessageSquareOff, Clock } from 'lucide-react';

const ModerationTools = () => {
  const [autoModSettings, setAutoModSettings] = useState({
    profanityFilter: true,
    linkFilter: true,
    spamProtection: true,
    mentionLimit: 5,
  });

  const [banDuration, setBanDuration] = useState('1h');

  const handleAutoModChange = (setting) => {
    setAutoModSettings({ ...autoModSettings, [setting]: !autoModSettings[setting] });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Moderation Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Auto-Moderation</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Profanity Filter</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={autoModSettings.profanityFilter}
                  onChange={() => handleAutoModChange('profanityFilter')}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Link Filter</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={autoModSettings.linkFilter}
                  onChange={() => handleAutoModChange('linkFilter')}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Spam Protection</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={autoModSettings.spamProtection}
                  onChange={() => handleAutoModChange('spamProtection')}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Mention Limit</span>
              <input
                type="number"
                min="1"
                max="10"
                value={autoModSettings.mentionLimit}
                onChange={(e) => setAutoModSettings({ ...autoModSettings, mentionLimit: parseInt(e.target.value) })}
                className="border rounded-md p-2 w-16 text-center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center">
              <UserX className="w-5 h-5 mr-2" /> Ban User
            </button>
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" /> Timeout User
            </button>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center">
              <MessageSquareOff className="w-5 h-5 mr-2" /> Mute User
            </button>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ban Duration</label>
            <select
              value={banDuration}
              onChange={(e) => setBanDuration(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="1h">1 Hour</option>
              <option value="6h">6 Hours</option>
              <option value="12h">12 Hours</option>
              <option value="1d">1 Day</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModerationTools;