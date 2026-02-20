import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden">

            <Navbar />
            <main className="flex-1 max-w-6xl mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;