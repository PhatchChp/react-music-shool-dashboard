import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./laout/Layout";
import Dashboard from "./components/page/dashboard/Dashboard";
import Notfound from "./components/page/notfound/Notfound";
import Login from "./components/page/auth/Login";
import Logout from "./components/page/auth/Logout";
import { AuthProvider } from "./context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="login" element={<Login />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="*" element={<Notfound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
