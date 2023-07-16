import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home/index.jsx'

const router = createBrowserRouter([
  {
    path:"/Sales_mz",
    element:<App/>,
    children:[
      {
        path:"/Sales_mz",
        element:<Home/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
