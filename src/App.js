
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import router from './Router/Router';

function App() {
  return (
    <div data-theme="light" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
