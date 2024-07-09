import Home from './components/home';
import User from './components/user';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Sport_See" element={<Home />} />
            <Route path="Sport_See/user/:id" element={<User />} />
        </Routes>
    );
}

export default AppRoutes;  
