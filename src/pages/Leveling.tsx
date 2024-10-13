import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Leveling = () => {
  const [levelingSettings, setLevelingSettings] = useState({
    xpPerMessage: 10,
    xpCooldown: 60,
    announceLevelUp: true,
    levelUpMessage: 'Congratulations {user}, you`ve reached level {level}!',
  });

  const [topUsers, setTopUsers] = useState([
    { name: 'User1', level: 30, xp: 9000 },
    { name: 'User2', level: 25, xp: 7500 },
    { name: 'User3', level: 20, xp: 6000 },
    { name: 'User4', level: 18, xp: 5400 },
    { name: 'User5', level: 15, xp: 4500 },
  ]);

  const handleSettingChange = (setting, value) => {
    setLevelingSettings({ ...levelingSettings, [setting]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Leveling System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Leveling Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">XP per Message</label>
              <input
                type="number"
                value={levelingSettings.xpPerMessage}
                onChange={(e) => handleSettingChange('xpPerMessage', parseInt(e.target.value))}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">XP Cooldown (seconds)</label>
              <input
                type="number"
                value={levelingSettings.xpCooldown}
                onChange={(e) => handleSettingChange('xpCooldown', parseInt(e.target.value))}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={levelingSettings.announceLevelUp}
                onChange={(e) => handleSettingChange('announceLevelUp', e.target.checked)}
                className="mr-2"
              />
              <label className="text-sm font-medium text-gray-700">Announce Level Up</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level Up Message</label>
              <textarea
                value={levelingSettings.levelUpMessage}
                onChange={(e) => handleSettingChange('levelUpMessage', e.target.value)}
                className="w-full border rounded-md p-2"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topUsers}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="level" fill="#8884d8" name="Level" />
              <Bar yAxisId="right" dataKey="xp" fill="#82ca9d" name="XP" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Leveling;