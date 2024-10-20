import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import Router
import './App.css';
import Bridage from './Component/Bridage/Bridage';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Work from './Component/Work/Work';
import Experience from './Component/Experience/Experience';
import Notfound from './Component/Notfound/Notfound';
import Project from './Component/Project/Project';
import Task from './Component/Task/Task';


function App() {
  // Correcting the routing structure
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Bridage />,
      children: [
        { index: true, element: <Home />, errorElement: <Notfound /> },
        { path: 'About', element: <About />, errorElement: <Notfound /> },
        { path: 'Skills', element: <Skills />, errorElement: <Notfound /> },
        { path: 'Work', element: <Work />, errorElement: <Notfound /> },
        { path: 'Project', element: <Project />, errorElement: <Notfound /> },
        { path: 'Task', element: <Task />, errorElement: <Notfound /> },
        { path: 'Experience', element: <Experience />, errorElement: <Notfound /> },
      ],
    },
    { path: '*', element: <Notfound /> } // Catch-all for 404
  ]);

  return (
    // Correct the prop name for RouterProvider
    <RouterProvider router={routes} />
  );
}

export default App;
