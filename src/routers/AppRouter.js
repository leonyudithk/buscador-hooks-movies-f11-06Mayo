import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HobbitCategory from '../component/HobbitCategory';
import Home from '../component/Home';
import NavBars from '../component/NavBars';
import SeniorCategory from '../component/SeniorCategory';


const AppRouter = () => {
    return (
     <BrowserRouter>
     <NavBars/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/senior" element={<SeniorCategory/>}/>
            <Route path="/hobbit" element={<HobbitCategory/>}/>
         </Routes>
     </BrowserRouter>
    );
};

export default AppRouter;