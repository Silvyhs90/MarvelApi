import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from "../pages/HomePage/index"

export const Router = () => {
    return (
     <BrowserRouter>
          <div>
          <div className='imagen'>
                </div>
                <nav>
                <div>
                <ul>
                <li>
                <a href="/">Home Page</a>
                </li>
             </ul>
          </div>
          </nav>
          </div>   
          <Routes>
             <Route exact path="/" element={<Home />} />
           </Routes>
     </BrowserRouter>
     );
 };
 