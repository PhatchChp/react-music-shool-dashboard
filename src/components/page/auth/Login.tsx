import Button from "../../ui/Button";
import FormInput from "../../form/FormInput";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
    const { register, errors, handleLogin } = useLogin();

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4 p-8 min-w-[300px] bg-white rounded-2xl shadow-lg sm:p-12 sm:w-md">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">ยินดีต้อนรับ</h1>
                        <div className="text-sm text-gray-400 my-2">
                            <p>ดีใจที่ได้พบคุณอีกครั้ง 👋🏻</p>
                            <p>เข้าสู่ระบบด้วยชื่อผู้ใช้ของคุณข้างล่าง</p>
                        </div>
                    </div>
                    <FormInput
                        label={"ชื่อผู้ใช้"}
                        name={"username"}
                        type={"text"}
                        placeholder="กรอกชื่อผู้ใช้..."
                        register={register}
                        required
                        autoComplete="username"
                        error={errors.username?.message}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password.."
                        register={register}
                        required
                        autoComplete="current-password"
                        error={errors.password?.message}
                    />
                    <div className="mt-2">
                        <Button text="Login" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Login;
