import { useState } from "react";
import Loading from "../ui/Loading";

interface RowData {
    [key: string]: string | number | boolean;
}

interface TableProps {
    headers: string[];
    rows: RowData[];
    isLoading: boolean;
}

const Table = ({ headers, rows, isLoading }: TableProps) => {
    const [selectRowIndex, setSelectRowIndex] = useState<number[]>([]);

    const handleRowClick = (index: number) => {
        setSelectRowIndex((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((prevIndex) => prevIndex !== index)
                : [...prevSelected, index]
        );
    };

    return (
        <div className="relative min-h-[300px]">
            {isLoading && <Loading />}
            {rows.length === 0 && !isLoading ? (
                <div className="flex items-center justify-center text-gray-500 min-h-[300px]">
                    <p>No data available</p>
                </div>
            ) : (
                <table
                    className={"min-w-full border-spacing-2 text-sm text-left transition-opacity"}
                >
                    <thead className="bg-blue-50 text-xs text-gray-700 uppercase">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => handleRowClick(rowIndex)}
                                className={`${
                                    selectRowIndex.includes(rowIndex)
                                        ? "bg-gray-100 shadow-xs border-gray-200"
                                        : "bg-blue"
                                } border-b border-gray-100  hover:bg-blue-100 cursor-pointer`}
                            >
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex} className="px-6 py-6">
                                        {row[header] || "-"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
