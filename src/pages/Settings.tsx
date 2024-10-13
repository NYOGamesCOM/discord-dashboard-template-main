import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    botName: 'AwesomeBot',
    prefix: '!',
    language: 'en',
    timezone: 'UTC',
    logChannel: 'bot-logs',
    welcomeMessage: 'Welcome to the server, {user}!',
  });

  const handleSettingChange = (setting, value) => {
    setSettings({ ...settings, [setting]: value });
  };

  const handleSaveSettings = () => {
    // Here you would typically send the settings to your backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bot Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bot Name</label>
            <input
              type="text"
              value={settings.botName}
              onChange={(e) => handleSettingChange('botName', e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Command Prefix</label>
            <input
              type="text"
              value={settings.prefix}
              onChange={(e) => handleSettingChange('prefix', e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleSettingChange('timezone', e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
              <option value="CET">CET</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Log Channel</label>
            <input
              type="text"
              value={settings.logChannel}
              onChange={(e) => handleSettingChange('logChannel', e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Welcome Message</label>
            <textarea
              value={settings.welcomeMessage}
              onChange={(e) => handleSettingChange('welcomeMessage', e.target.value)}
              className="w-full border rounded-md p-2"
              rows={3}
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center"
            onClick={handleSaveSettings}
          >
            <Save className="w-5 h-5 mr-2" /> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;