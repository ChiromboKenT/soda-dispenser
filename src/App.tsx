import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import Auto from './components/auto';
import Manual from './components/manual';
import Navigation from './components/navigation';
import NotFound from './utils/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Manual />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="h-screen flex flex-col items-center px-10 py-10 bg-gray-900">
      <Navigation
        active={active}
        setActive={(newValue) => setActive(newValue)}
      />
      <main className="flex-1 rounded-b-md w-full bg-gray-200 ">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
