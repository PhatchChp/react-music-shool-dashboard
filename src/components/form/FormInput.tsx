import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    id?: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    disabled?: boolean;
    autoComplete?: React.HTMLInputAutoCompleteAttribute;
    register?: UseFormRegister<T>;
    error?: string | React.ReactNode;
    className?: string;
}

const FormInput = <T extends FieldValues>({
    label,
    name,
    id,
    type = "text",
    placeholder,
    defaultValue,
    required = false,
    disabled = false,
    autoComplete = "off",
    register,
    error,
    className = "",
}: FormInputProps<T>) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={id || name} className="font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...(register ? register(name) : {})} // รองรับการใช้งานนอก react-hook-form
                id={id || name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                disabled={disabled}
                autoComplete={autoComplete}
                className={`p-2 w-full border rounded-md shadow-sm transition focus:ring focus:ring-blue-300 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                required={required}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default FormInput;
