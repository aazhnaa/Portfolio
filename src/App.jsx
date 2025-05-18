import React from 'react'
import MainNavigation from './components/MainNavigation'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

  //creating router :
 const router = createBrowserRouter(
  [
    {
      path: "/", element: <MainNavigation />, children: [
        { path: "/", element: <Home /> },
        { path: "aboutMe", element: <AboutMe /> },
        { path: "resume", element: <Resume /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ],
  {
    basename: "/Portfolio"
  }
);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App
