import Button from "./Button";

interface ModalConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    description?: string;
    isOpen: boolean;
}

const ModalConfirm = ({ onConfirm, onCancel, title, description, isOpen }: ModalConfirmProps) => {
    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            onClick={handleClose}
            className={`fixed inset-0 flex items-center justify-center bg-black/50 z-10`}
        >
            <div
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="bg-white shadow-lg rounded-md px-10 py-6 flex flex-col justify-between w-full max-w-[400px] h-full max-h-[200px]"
            >
                <div className="text-center">
                    <h1 className="text-lg">{title}</h1>
                    <p className="text-sm text-gray-500 mt-2">{description}</p>
                </div>
                <div className="flex gap-2 justify-center mt-8">
                    <Button
                        text={"ไม่"}
                        type={"button"}
                        onClick={onCancel}
                        className="bg-white border-1 hover:border-blue-400 hover:text-blue-500 border-gray-200 px-8 py-1 rounded-md"
                    />
                    <Button
                        text={"ใช่"}
                        type={"button"}
                        onClick={onConfirm}
                        className=" bg-blue-500 hover:opacity-70 text-white px-8 py-1 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};
export default ModalConfirm;
