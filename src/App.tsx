import { ToastContainer, Flip } from "react-toastify";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <AuthProvider>
            <ToastContainer transition={Flip} />
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;
