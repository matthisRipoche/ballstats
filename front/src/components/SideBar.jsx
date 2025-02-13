// import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const SideBar = () => {

    return (
        <div className="sidebar-container">
            <div className="sidebar-admin">
                <h1>BallStats</h1>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/dashboard-admin"><FaHome /> Home</Link></li>
                        <li><Link to="/dashboard-admin/users"><FaUser /> Users</Link></li>
                        <li><Link to="/dashboard-admin/teams"><RiTeamFill /> Teams</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
