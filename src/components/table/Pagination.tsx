import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    totalPage: number;
    totalItem: number;
    itemsPerPage: number;
    currentPage: number;
    isLoading: boolean;
    setCurrentPage: (number: number) => void;
    onItemsPerPageChange: (number: number) => void;
}

const Pagination = ({
    totalPage,
    totalItem,
    itemsPerPage,
    currentPage,
    isLoading,
    setCurrentPage,
    onItemsPerPageChange,
}: PaginationProps) => {
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

    return (
        <div
            className={`${
                isLoading || totalItem === 0
                    ? "hidden"
                    : "flex justify-between px-6 items-center text-sm "
            } `}
        >
            <p className="text-gray-500">Total {totalItem} items</p>
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
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    className="px-4 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                    {[10, 20, 30, 50].map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
export default Pagination;
