import { Flip, toast } from "react-toastify";

export const useToast = () => {
    return {
        toastSuccess: (message: string) =>
            toast.success(message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                transition: Flip,
            }),
        toastError: (message: string) =>
            toast.error(message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                transition: Flip,
            }),
        toastWarning: (message: string) =>
            toast.warn(message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                transition: Flip,
            }),
        toastInfo: (message: string) => toast.info(message, {}),
    };
};
