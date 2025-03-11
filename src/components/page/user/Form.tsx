import React, { FormEvent } from "react";

interface FormProps {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onSubmit: (e: FormEvent) => void;
    onCancel: () => void;
}

const Form = ({ isOpen, title, children, onSubmit, onCancel }: FormProps) => {
    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            onClick={(e: React.MouseEvent) => handleClose(e)}
            className="fixed inset-0 flex h-screen items-center justify-center bg-black/40 z-10"
        >
            <div
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="min-w-[460px] min-h-[500px] bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform scale-95"
            >
                <div className="border-b border-gray-300 px-4 py-3">
                    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                </div>
                <div className="p-6">
                    <form onSubmit={onSubmit}>
                        {children}
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                type="button"
                                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Form;
