import {
    Building,
    CircleSlash,
    CreditCard,
    House,
    Package,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [selectMenu, setSelectMenu] = useState("");

    const menus = [
        { id: "/", label: "Dashboard", icon: <House /> },
        { id: "employees", label: "Employee", icon: <CircleSlash /> },
        { id: "schedule", label: "Schedule", icon: <CircleSlash /> },
        { id: "rooms", label: "Room", icon: <CreditCard /> },
        { id: "students", label: "Student", icon: <Package /> },
    ];

    return (
        <nav className="flex flex-col w-60 h-lvh bg-white gap-4 p-4">
            <div className="flex gap-4 items-center text-blue-800">
                <Building />
                <h1 className="text-lg">Dashboard</h1>
            </div>
            <hr className="border-gray-300" />

            <ul className="flex flex-col gap-4 grow">
                {menus.map((menu) => (
                    <Link
                        key={menu.id}
                        to={menu.id}
                        onClick={() => setSelectMenu(menu.id)}
                        className={`flex gap-4 p-2 rounded-lg hover:border-1 hover:border-gray-300 ${
                            menu.id === selectMenu && "bg-slate-100"
                        } `}
                    >
                        <span className="text-blue-900">{menu.icon}</span>
                        {menu.label}
                    </Link>
                ))}

                <div className="flex flex-col mt-auto">
                    <hr className="border-gray-300 mb-4" />
                    <Link
                        to={"logout"}
                        className="p-2 rounded-lg hover:hover:border-1 border-gray-300"
                    >
                        Logout
                    </Link>
                </div>
            </ul>
        </nav>
    );
};
export default Sidebar;
