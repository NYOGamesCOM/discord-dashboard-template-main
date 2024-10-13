import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const AutoResponder = () => {
  const [responses, setResponses] = useState([
    { id: 1, trigger: 'hello', response: 'Hello! How can I assist you today?' },
    { id: 2, trigger: 'help', response: 'Sure, I can help. What do you need assistance with?' },
  ]);

  const [newResponse, setNewResponse] = useState({ trigger: '', response: '' });

  const handleAddResponse = () => {
    if (newResponse.trigger && newResponse.response) {
      setResponses([...responses, { id: Date.now(), ...newResponse }]);
      setNewResponse({ trigger: '', response: '' });
    }
  };

  const handleDeleteResponse = (id) => {
    setResponses(responses.filter(response => response.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Auto Responder</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Auto Response</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Trigger (e.g., hello)"
            className="border rounded-md p-2"
            value={newResponse.trigger}
            onChange={(e) => setNewResponse({ ...newResponse, trigger: e.target.value })}
          />
          <textarea
            placeholder="Response"
            className="border rounded-md p-2"
            rows={3}
            value={newResponse.response}
            onChange={(e) => setNewResponse({ ...newResponse, response: e.target.value })}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
            onClick={handleAddResponse}
          >
            <Plus className="w-5 h-5 mr-2" /> Add Response
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trigger</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {responses.map((response) => (
              <tr key={response.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{response.trigger}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{response.response}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteResponse(response.id)}>
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

export default AutoResponder;