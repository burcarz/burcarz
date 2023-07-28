import React, { Route, Routes } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import Home from './pages/Home';

interface props {
    className?: string
}

const Router:FC <props> = ({ className }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    );
};

export default Router;