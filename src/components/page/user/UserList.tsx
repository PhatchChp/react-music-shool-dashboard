import { useEffect, useState } from "react";
import { User, userService } from "../../../services/userService";
import { toDate } from "../../../utils/formatDate";
import Table from "../../table/Table";
import Pagination from "../../table/Pagination";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [totalItem, setTotalItem] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onItemsPerPageChange = (number: number) => {
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
            })
            .finally(() => setIsLoading(false));
    }, [currentPage, itemsPerPage]);

    const headers = ["#", "Name", "Username", "Role", "CreatedAt", "UpdatedAt"];
    const userRows = users.map((user) => ({
        "#": user.id,
        Name: user.name,
        Username: user.username,
        Role: user.role,
        CreatedAt: toDate(user.createdAt),
        UpdatedAt: toDate(user.updatedAt),
    }));

    return (
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
    );
};
export default UserList;
