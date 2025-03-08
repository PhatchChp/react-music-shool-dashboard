import React from "react";

export type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
    text: string;
    type: ButtonType;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({
    text,
    type,
    color,
    onClick,
    className,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${
                className
                    ? className
                    : `shadow-2xl ${color ? color : "bg-violet-600 p-2 rounded-md text-white w-full hover:bg-violet-500"}  
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                `}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
export default Button;
