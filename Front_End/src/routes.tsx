import Home from './components/home';
import User from './components/user';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {  // Change "Routes" to "AppRoutes"
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
        </Routes>
    );
}

export default AppRoutes;  // Export "AppRoutes"
