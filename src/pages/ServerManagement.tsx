import React, { useState } from 'react';
import { Server, Settings, Trash2 } from 'lucide-react';

const ServerManagement = () => {
  const [servers, setServers] = useState([
    { id: 1, name: 'Gaming Community', members: 1500, channels: 20 },
    { id: 2, name: 'Study Group', members: 500, channels: 10 },
    { id: 3, name: 'Music Lovers', members: 2000, channels: 25 },
  ]);

  const handleDeleteServer = (id) => {
    setServers(servers.filter(server => server.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Server Management</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Server</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channels</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {servers.map((server) => (
              <tr key={server.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Server className="h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{server.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{server.members}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{server.channels}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Settings className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteServer(server.id)}>
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServerManagement;