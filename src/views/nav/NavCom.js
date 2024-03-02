// import React from "react";
// import "./NavCss.scss"
// class NavCom extends React.Component {
//     render() {
//         return (

//             <div class="topnav">
//                 <a class="active" href="/">Home</a>
//                 <a href="/todos">Todos</a>
//                 <a href="/job">Job</a>
//                 <a href="#about">About</a>
//             </div>
//         )
//     }
// }
// export default NavCom;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavCss.scss";

class NavCom extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" label="Home" />
                <NavLink to="/todos" label="Todos" />
                <NavLink to="/job" label="Job" />
                <NavLink to="#about" label="About" />
            </div>
        );
    }
}

const NavLink = ({ to, label }) => {
    const location = useLocation();

    return (
        <Link
            to={to}
            className={location.pathname === to ? "active" : ""}
        >
            {label}
        </Link>
    );
};

export default NavCom;
