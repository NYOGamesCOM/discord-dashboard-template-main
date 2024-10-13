import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, MessageCircle, Server, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', commands: 120, messages: 200 },
  { name: 'Tue', commands: 150, messages: 250 },
  { name: 'Wed', commands: 180, messages: 300 },
  { name: 'Thu', commands: 200, messages: 350 },
  { name: 'Fri', commands: 250, messages: 400 },
  { name: 'Sat', commands: 300, messages: 450 },
  { name: 'Sun', commands: 280, messages: 420 },
];

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 flex items-center ${color}`}>
    <Icon className="w-12 h-12 mr-4" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Users} title="Total Users" value="10,245" color="text-blue-600" />
        <StatCard icon={Server} title="Servers" value="87" color="text-green-600" />
        <StatCard icon={MessageCircle} title="Messages Today" value="5,678" color="text-yellow-600" />
        <StatCard icon={Activity} title="Commands Used" value="1,234" color="text-purple-600" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="commands" fill="#8884d8" />
            <Bar dataKey="messages" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;