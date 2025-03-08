import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col mt-4 mx-3 gap-2 flex-1">
                <Header />
                <main className="grow p-4 bg-white rounded-xs">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
export default Layout;
