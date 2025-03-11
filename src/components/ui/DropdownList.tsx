import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export interface DropdownOption {
    id: number;
    label: string;
    value: string;
}

interface DropdownListProps<T extends FieldValues> {
    label: string;
    dropdownOption: DropdownOption[];
    required?: boolean;
    control: Control<T>;
    name: Path<T>;
    error?: string | React.ReactNode;
}

const DropdownList = <T extends FieldValues>({
    label,
    dropdownOption,
    name,
    required,
    control,
    error,
}: DropdownListProps<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    console.log(error);
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required ? { value: true, message: `กรุณาเลือก${label}` } : undefined,
            }}
            render={({ field: { onChange, value } }) => (
                <div className="relative w-full" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className={`flex w-full justify-between items-center rounded-md bg-white px-4 py-2 border-1 border-gray-200 shadow-md text-gray-700 hover:bg-gray-100 transition ${
                            error ? "border-red-500" : ""
                        }`}
                    >
                        <span className={`${!value && "text-gray-500"}`}>
                            {value
                                ? dropdownOption.find((option) => option.value === value)?.label
                                : label}
                        </span>
                        <span
                            className={`transition-transform duration-300 text-gray-600 ${
                                isOpen && "rotate-180"
                            }`}
                        >
                            <ChevronDown size={20} />
                        </span>
                    </button>
                    <ul
                        className={`${
                            !isOpen && "hidden"
                        } absolute mt-2 py-2 w-full bg-white shadow-lg border border-gray-200 z-50 rounded-md overflow-y-scroll`}
                    >
                        {dropdownOption.map((option) => (
                            <li
                                key={option.id}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`cursor-pointer px-4 py-2 hover:bg-blue-100 transition`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            )}
        />
    );
};
export default DropdownList;
