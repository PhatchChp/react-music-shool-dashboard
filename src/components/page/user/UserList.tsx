import Table from "../../table/Table";
import Pagination from "../../table/Pagination";
import UserForm from "./UserForm";
import useUserList from "./hook/useUserList";

const UserList = () => {
    const {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPage,
        totalItem,
        isLoading,
        onItemsPerPageChange,
        headers,
        userRows,
        fetchUser,
    } = useUserList();

    return (
        <div className="flex flex-col gap-4">
            <UserForm fetchUser={fetchUser} />
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <Table headers={headers} rows={userRows} isLoading={isLoading} />
                <Pagination
                    totalItem={totalItem}
                    itemsPerPage={itemsPerPage}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};
export default UserList;
