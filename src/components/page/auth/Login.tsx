import Button from "../../button/Button";
import FormInput from "../../form/FormInput";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
    const { password, username, handleLogin, handleUsernameChange, handlePasswordChange } = useLogin();

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4 bg-white p-12 rounded-2xl shadow-lg">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <div className="text-sm text-gray-400 my-2">
                            <p>Glad to see you again 👋🏻</p>
                            <p>Login to your account below</p>
                        </div>
                    </div>

                    <FormInput
                        label={"Username"}
                        name={"username"}
                        type={"text"}
                        placeholder="Enter username.."
                        onChange={handleUsernameChange}
                        defaultValue={username}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password.."
                        onChange={handlePasswordChange}
                        defaultValue={password}
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
