import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsDetails from './pages/NewsPage/NewsDetails';
// import LoginPage from './pages/LoginPage';
// import RegPage from './pages/RegPage';

const PetRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>} >
                <Route index element={<Home />} />
                <Route path="/news" element={<NewsPage />} />
                    <Route path="/news/:newsId" element={<NewsDetails />} />
                <Route path="/notices" element={<div>notices!</div>} />
                <Route path="/friends" element={<div>friends!</div>} />
                {/* <Route path="/login" element={<LoginPage/>} />
                <Route path="/registration" element={<RegPage/>} />   */}
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
};


export default PetRoutes;