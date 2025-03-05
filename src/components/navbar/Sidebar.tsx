import {
    Baby,
    Building,
    CalendarClock,
    DoorClosed,
    LayoutDashboard,
    LogOut,
    Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalConfirm from "../modal/ModalConfirm";
import { useLogout } from "../../hooks/useLogout";

const Sidebar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleLogout = useLogout();
    const location = useLocation();

    const menus = [
        { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
        { id: "employees", label: "Employee", icon: <Users /> },
        { id: "users", label: "User", icon: <Users /> },
        { id: "schedule", label: "Schedule", icon: <CalendarClock /> },
        { id: "rooms", label: "Room", icon: <DoorClosed /> },
        { id: "students", label: "Student", icon: <Baby /> },
    ];

    return (
        <nav className="flex flex-col w-60 h-lvh bg-white gap-4 p-4">
            <div className="flex gap-4 items-center text-blue-800">
                <Building />
                <h1 className="text-lg">Dashboard</h1>
            </div>
            <hr className="border-gray-300" />

            <ul className="flex flex-col gap-4 grow">
                {menus.map((menu) => {
                    const isActive = location.pathname.includes(menu.id);
                    return (
                        <Link
                            key={menu.id}
                            to={menu.id}
                            className={`flex gap-4 p-2 rounded-lg hover:border-1 hover:border-gray-300 ${
                                isActive && "bg-slate-100"
                            } `}
                        >
                            <span className="text-blue-900">{menu.icon}</span>
                            {menu.label}
                        </Link>
                    );
                })}

                <div className="flex flex-col mt-auto">
                    <hr className="border-gray-300 mb-4" />

                    {isOpenModal && (
                        <ModalConfirm
                            title="Are you sure ?"
                            description="Do you want to logout"
                            onConfirm={() => handleLogout()}
                            onCancel={() => setIsOpenModal(false)}
                            isOpen={isOpenModal}
                        />
                    )}

                    <button
                        className="flex gap-4 p-2 rounded-lg hover:hover:border-1 border-gray-300"
                        onClick={() => setIsOpenModal(true)}
                    >
                        <span className="text-blue-900">
                            <LogOut />
                        </span>
                        Logout
                    </button>
                </div>
            </ul>
        </nav>
    );
};
export default Sidebar;
