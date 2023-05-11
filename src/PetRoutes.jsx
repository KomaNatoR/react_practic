import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';

const PetRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
                <Route path="/news" element={<div>news!</div>} />
                <Route path="/notices" element={<div>notices!</div>} />
                <Route path="/friends" element={<div>friends!</div>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/registration" element={<RegPage/>} />
                <Route path="*" element={<Home/>} />
        </Routes>
    )
};


export default PetRoutes;