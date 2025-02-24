interface FormInputProps {
    label: string;
    name: string;
    id?: string;
    type: string;
    placeholder?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const FormInput = ({
    label,
    name,
    id = name,
    type,
    placeholder,
    defaultValue,
    onChange,
    className = "",
}: FormInputProps) => {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="p-2 w-full border-1 border-gray-200 rounded-md shadow-md mt-1"
                onChange={onChange}
            />
        </div>
    );
};
export default FormInput;
