import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const PetRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/news" element={<div>news!</div>} />
            <Route path="/notices" element={<div>notices!</div>} />
            <Route path="/friends" element={<div>friends!</div>} />
            <Route path="*" element={<div>Home!</div>} />
        </Routes>
    )
};


export default PetRoutes;