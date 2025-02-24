import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/page/auth/Login";
import PrivateRoute from "./PrivateRoute";
import Layout from "../laout/Layout";
import Dashboard from "../components/page/dashboard/Dashboard";
import Logout from "../components/page/auth/Logout";
import Notfound from "../components/page/notfound/Notfound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="logout" element={<Logout />} />
                    </Route>
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRoutes;
