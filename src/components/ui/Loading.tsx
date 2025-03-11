import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
            <LoaderCircle className="animate-spin text-blue-400 size-8" />
        </div>
    );
};
export default Loading;
