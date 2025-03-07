import { useEffect, useState } from "react";
import { User, userService } from "../../../services/userService";
import { toDate } from "../../../utils/formatDate";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectRowIndex, setSelectRowIndex] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [totalItem, setTotalItem] = useState<number>(0);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleRowClick = (index: number) => {
        setSelectRowIndex((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((prevIndex) => prevIndex !== index)
                : [...prevSelected, index]
        );
    };

    const onSelect = (number: number) => {
        setItemsPerPage(number);
    };

    useEffect(() => {
        userService
            .getAll({ page: currentPage, itemsPerPage })
            .then((response) => {
                console.log(response);
                setUsers(response.data);
                setTotalPage(response.totalPage);
                setTotalItem(response.totalItem);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, [currentPage, itemsPerPage]);

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full border-spacing-2 text-sm text-left">
                <thead className="bg-blue-50 text-xs text-gray-700 uppercase">
                    <tr>
                        <th className="px-6 py-3">#</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Username</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">CreatedAt</th>
                        <th className="px-6 py-3">UpdatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            onClick={() => handleRowClick(index)}
                            className={`${
                                selectRowIndex.includes(index)
                                    ? "bg-gray-100 shadow-xs border-gray-200"
                                    : "bg-blue"
                            } border-b border-gray-100  hover:bg-blue-100 cursor-pointer`}
                        >
                            <td className="px-6 py-6 ">{user.id}</td>
                            <td className="px-6 py-6">{user.name}</td>
                            <td className="px-6 py-6">{user.username}</td>
                            <td className="px-6 py-6">{user.role}</td>
                            <td className="px-6 py-6">{toDate(user.createdAt)}</td>
                            <td className="px-6 py-3">{toDate(user.updatedAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between px-6 items-center text-sm">
                <p>Total {totalItem} items</p>
                <div className="flex justify-center py-4 space-x-2">
                    <button
                        className={`px-4 py-2  rounded-md text-sm${
                            currentPage === 1
                                ? "cursor-not-allowed opacity-50"
                                : "hover:bg-gray-100 cursor-pointer"
                        } `}
                        onClick={handlePrevPage}
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    <div className="flex space-x-2">
                        {Array.from({ length: totalPage }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(index + 1)}
                                className={`${
                                    currentPage === index + 1 &&
                                    "border border-blue-500 hover:border-blue-300 px-4 py-2 hover:bg-white"
                                } px-4 py-2 rounded-md hover:bg-gray-100`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        className={`px-4 py-2 rounded-md text-sm ${
                            currentPage === totalPage
                                ? "cursor-not-allowed opacity-50"
                                : "hover:bg-gray-100 cursor-pointer"
                        }  `}
                        onClick={handleNextPage}
                    >
                        <ChevronRight className="size-5" />
                    </button>
                    <select
                        name="items"
                        id="items"
                        onChange={(e) => onSelect(Number(e.target.value))}
                        className="px-2 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
                    >
                        {[5, 10, 20, 30].map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};
export default UserList;
