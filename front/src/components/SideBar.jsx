// import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser} from "react-icons/fa";

const SideBar = () => {
    /*
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    */

    return (
        <div className="sidebar-container">
            <div className="sidebar-admin">
                <h1>BallStats Admin</h1>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/dashboard-admin"><FaHome /> Home</Link></li>
                        <li><Link to="/dashboard-admin/users"><FaUser /> Users</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
