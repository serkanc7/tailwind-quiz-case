import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/Home';
import Quiz from './views/Quiz';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />
    }
  ]);

  return (
     <div className='app'>
        <RouterProvider router={router} />
     </div>
  );
}

export default App;
