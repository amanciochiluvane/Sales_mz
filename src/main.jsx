import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home/index.jsx'
import MarcasCell from './Pages/MarcasCell/index.jsx'
import Samsung from './Pages/Celulares/Samsung/index.jsx'
import Tecno from './Pages/Celulares/Tecno/index.jsx'
import Tablets from './Pages/Tablets/Index.jsx'

const router = createBrowserRouter([
  {
    path:"/Sales_mz",
    element:<App/>,
    children:[
      {
        path:"/Sales_mz",
        element:<Home/>,
       } ,
       {
        path:"/Sales_mz/marcascell",
        element:<MarcasCell/>
       },
          {
            path:"/Sales_mz/marcascell/samsung",
            element:<Samsung/>
          },
          {
            path:"/Sales_mz/marcascell/tecno",
            element:<Tecno/>
          },
          {
            path:"/Sales_mz/tablets",
            element:<Tablets/>
          }
       
    
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
