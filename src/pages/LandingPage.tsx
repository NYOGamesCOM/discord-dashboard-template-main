import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Shield, MessageSquare, TrendingUp, Music, Command } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-indigo-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Ultimate Discord Bot</h1>
            <p className="text-xl mb-8">Enhance your Discord server with powerful features and easy management</p>
            <Link
              to="/dashboard"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={Shield}
            title="Advanced Moderation"
            description="Powerful tools to keep your server safe and clean, including auto-mod and custom filters."
          />
          <Feature
            icon={Command}
            title="Custom Commands"
            description="Create and manage custom commands to fit your server's unique needs."
          />
          <Feature
            icon={MessageSquare}
            title="Auto Responder"
            description="Set up automatic responses to common questions and phrases."
          />
          <Feature
            icon={TrendingUp}
            title="Leveling System"
            description="Engage your community with a customizable leveling system and rewards."
          />
          <Feature
            icon={Music}
            title="Music Player"
            description="High-quality music playback with playlist support and audio controls."
          />
          <Feature
            icon={Bot}
            title="Easy Management"
            description="Intuitive dashboard for effortless bot and server management."
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Ultimate Discord Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;