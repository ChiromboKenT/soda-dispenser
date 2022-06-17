import { useState } from 'react';

import './App.css';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="h-screen flex flex-col items-center px-6 bg-gray-900">
      <Navigation />
    </div>
  );
}

export default App;
