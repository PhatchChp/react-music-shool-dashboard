import FormInput from "../../form/FormInput";
import DropdownList from "../../ui/DropdownList";
import Loading from "../../ui/Loading";
import Form from "./Form";
import useUserForm from "./hook/useUserForm";

const UserForm = ({ fetchUser }: { fetchUser: () => void }) => {
    const {
        isFormOpen,
        setIsFormOpen,
        onFormCancel,
        onSubmit,
        roleOptions,
        register,
        errors,
        control,
        isLoading,
    } = useUserForm(fetchUser);

    return isLoading ? (
        <Loading />
    ) : (
        <div className="flex justify-between">
            <button
                onClick={() => setIsFormOpen(true)}
                type={"button"}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Add +
            </button>
            <Form
                onSubmit={onSubmit}
                onCancel={onFormCancel}
                isOpen={isFormOpen}
                title={"เพิ่มผู้ใช้+"}
            >
                <div className="flex flex-col gap-4 p-4">
                    <FormInput
                        label={"ชื่อ"}
                        name={"name"}
                        type={"text"}
                        placeholder="กรอกชื่อ"
                        required
                        register={register}
                        error={errors.name?.message}
                    />
                    <FormInput
                        label={"ชื่อผู้ใช้"}
                        name={"username"}
                        type={"text"}
                        placeholder="กรอกชื่อผู้ใช้"
                        required
                        register={register}
                        error={errors.username?.message}
                    />
                    <FormInput
                        label={"รหัสผ่าน"}
                        name={"password"}
                        type={"password"}
                        placeholder="กรอกรหัสผ่าน"
                        required
                        register={register}
                        error={errors.password?.message}
                    />
                    <DropdownList
                        label={"เลือกบทบาท"}
                        dropdownOption={roleOptions}
                        control={control}
                        name="role"
                        error={errors.role?.message}
                        required
                    />
                </div>
            </Form>
        </div>
    );
};
export default UserForm;
