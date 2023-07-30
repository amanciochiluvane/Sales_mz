import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home/index.jsx'
import MarcasCell from './Pages/MarcasCell/index.jsx'
import Samsung from './Pages/Celulares/Samsung/index.jsx'
import Tecno from './Pages/Celulares/Tecno/index.jsx'
import Tablets from './Pages/Tablets/Index.jsx'
import JBL from './Pages/JBL/index.jsx'
import Watch from './Pages/Watch/index.jsx'
import AC from './Pages/AC/index.jsx'
import Apple from './Pages/Celulares/Apple/index.jsx'
import Promotions from './Pages/Promotions/index.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
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
          },
          {
            path:"/Sales_mz/JBL",
            element:<JBL/>
          },
          {
            path:"/Sales_mz/Watch",
            element:<Watch/>
          },
          {
            path:"/Sales_mz/AC",
            element:<AC/>
          },
          {
            path:"/Sales_mz/marcascell/apple",
            element:<Apple/>

          },
          {
            path:"/Sales_mz/Promotions",
            element:<Promotions/>
          }
       
    
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
