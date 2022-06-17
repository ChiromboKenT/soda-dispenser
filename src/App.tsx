import { useState } from 'react';

import './App.css';
import Navigation from './components/navigation';

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center px-6 bg-gray-900">
      <Navigation
        active={active}
        setActive={(newValue) => setActive(newValue)}
      />
    </div>
  );
}

export default App;
