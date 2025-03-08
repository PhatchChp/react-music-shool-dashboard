import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-80">
            <LoaderCircle className="animate-spin text-blue-400 size-8" />
        </div>
    );
};
export default Loading;
