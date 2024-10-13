import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const CustomCommands = () => {
  const [commands, setCommands] = useState([
    { id: 1, name: '!welcome', response: 'Welcome to the server!' },
    { id: 2, name: '!rules', response: 'Please read our server rules in the #rules channel.' },
    { id: 3, name: '!help', response: 'Need help? Ask in the #support channel.' },
  ]);

  const [newCommand, setNewCommand] = useState({ name: '', response: '' });

  const handleAddCommand = () => {
    if (newCommand.name && newCommand.response) {
      setCommands([...commands, { id: Date.now(), ...newCommand }]);
      setNewCommand({ name: '', response: '' });
    }
  };

  const handleDeleteCommand = (id) => {
    setCommands(commands.filter(command => command.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Custom Commands</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Command</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Command Name (e.g., !welcome)"
            className="border rounded-md p-2"
            value={newCommand.name}
            onChange={(e) => setNewCommand({ ...newCommand, name: e.target.value })}
          />
          <textarea
            placeholder="Command Response"
            className="border rounded-md p-2"
            rows={3}
            value={newCommand.response}
            onChange={(e) => setNewCommand({ ...newCommand, response: e.target.value })}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
            onClick={handleAddCommand}
          >
            <Plus className="w-5 h-5 mr-2" /> Add Command
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {commands.map((command) => (
              <tr key={command.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{command.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{command.response}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteCommand(command.id)}>
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

export default CustomCommands;