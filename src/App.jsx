import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './page/Home';

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
     <Route path='/' element={<Home/>}/>

      </Route>
    )
  );

  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
