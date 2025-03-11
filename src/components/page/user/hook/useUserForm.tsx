import { useEffect, useState } from "react";
import { DropdownOption } from "../../../ui/DropdownList";
import { useForm } from "react-hook-form";
import { UserFormData, userSchema } from "./userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role, userService } from "../../../../services/userService";
import { useToast } from "../../../../hooks/useToast";

const useUserForm = (fetchUser: () => void) => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toastSuccess, toastError } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            role: undefined,
        },
    });

    const onSubmit = handleSubmit((data) => {
        setIsLoading(true);

        userService
            .create(data)
            .then(() => {
                toastSuccess("เพิ่มข้อมูลผู้ใช้สำเร็จ!");
                fetchUser();
                onFormCancel();
            })
            .catch((error) => {
                console.error(error);
                toastError("เกิดข้อผิดพลาดในการเพิ่มข้อมูลผู้ใช้!");
            })
            .finally(() => setIsLoading(false));
    });

    const onFormCancel = () => {
        reset();
        setIsFormOpen(false);
    };

    useEffect(() => {}, []);

    const roleOptions: DropdownOption[] = [
        { id: 1, label: "🔥 Admin", value: Role.ADMIN },
        { id: 2, label: "👤 User", value: Role.USER },
    ];

    return {
        setIsFormOpen,
        onFormCancel,
        onSubmit,
        register,
        isFormOpen,
        roleOptions,
        control,
        errors,
        isLoading,
    };
};
export default useUserForm;
