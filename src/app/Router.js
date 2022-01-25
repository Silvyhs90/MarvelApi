import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from "../pages/HomePage/index"
import {ComicsPage} from "../pages/Comics/index"

export const Router = () => {
    return (
     <BrowserRouter>
          <div>
          <div className='imagen'>
                </div>
                <nav>
                <div>
                <ul className='mt-3'>
                <li className='mt-5'>
                <a href="/">Home Page</a>
                </li>
                <li className='mt-5'>
                <a href="/ComicsPage">Comics</a>
                </li>
             </ul>
          </div>
          </nav>
          </div>   
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/ComicsPage" element={<ComicsPage />} />
           </Routes>
     </BrowserRouter>
     );
 };
 