import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, List } from 'lucide-react';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Awesome Song',
    artist: 'Cool Artist',
    duration: '3:45',
    currentTime: '1:30',
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
    { id: 3, title: 'Song 3', artist: 'Artist 3' },
  ]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Music Player</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-48 h-48 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-2xl font-semibold">{currentTrack.title}</h2>
          <p className="text-gray-600">{currentTrack.artist}</p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <SkipBack className="w-6 h-6" />
          </button>
          <button className="p-4 rounded-full bg-indigo-500 text-white hover:bg-indigo-600" onClick={togglePlay}>
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-6">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                  {currentTrack.currentTime}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-indigo-600">
                  {currentTrack.duration}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
              <div style={{ width: '45%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Volume2 className="w-6 h-6 mr-2" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <List className="w-5 h-5 mr-2" /> Playlist
          </h3>
          <ul className="space-y-2">
            {playlist.map((song) => (
              <li key={song.id} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                <div>
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <Play className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;