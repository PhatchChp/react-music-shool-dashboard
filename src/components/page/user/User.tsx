import { useEffect, useState } from "react";
import { UserResponse, userService } from "../../../services/userService";
import { toDate } from "../../../utils/formatDate";
import { ChevronLeft, ChevronRight } from "lucide-react";

const User = () => {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [selectIndex, setSelectIndex] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(10);
    const itemPerPage = 2;

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
        const findIndex = selectIndex?.includes(index);
        if (findIndex) {
            const removeIndex = selectIndex?.filter(
                (prevIndex) => prevIndex !== index
            );
            setSelectIndex(removeIndex);
        } else {
            setSelectIndex([...selectIndex, index]);
        }
    };

    useEffect(() => {
        userService.getAll().then((response) => {
            setUsers(response);
            setTotalPage(Math.ceil(response.length / itemPerPage));
        });
    }, []);

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
                                selectIndex.includes(index)
                                    ? "bg-gray-100 shadow-xs border-gray-200"
                                    : "bg-blue"
                            } border-b border-gray-100  hover:bg-blue-100 cursor-pointer`}
                        >
                            <td className="px-6 py-6 ">{user.id}</td>
                            <td className="px-6 py-6">{user.name}</td>
                            <td className="px-6 py-6">{user.username}</td>
                            <td className="px-6 py-6">{user.role}</td>
                            <td className="px-6 py-6">
                                {toDate(user.createdAt)}
                            </td>
                            <td className="px-6 py-3">
                                {toDate(user.updatedAt)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between px-6 items-center text-sm">
                <p>Total {itemPerPage} items</p>
                <div className="flex justify-center py-4 space-x-2">
                    <button
                        className={`${
                            currentPage === 1
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                        } px-4 py-2  rounded-md hover:bg-gray-100 text-sm`}
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
                        className={`${
                            currentPage === totalPage
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                        } px-4 py-2  rounded-md hover:bg-gray-100 text-sm`}
                        onClick={handleNextPage}
                    >
                        <ChevronRight className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default User;
