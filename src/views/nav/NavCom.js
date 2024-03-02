import React from "react";
import "./NavCss.scss";
import {

    Link, NavLink

} from "react-router-dom";
class NavCom extends React.Component {
    render() {
        return (

            <div class="topnav">
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/todos" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/job" activeClassName="active">
                    Job
                </NavLink>

                {/* <a class="active" href="/">Home</a> */}

                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </div>
        )
    }
}
export default NavCom;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./NavCss.scss";

// class NavCom extends React.Component {
//     render() {
//         return (
//             <div className="topnav">
//                 <NavLink to="/" label="Home" />
//                 <NavLink to="/todos" label="Todos" />
//                 <NavLink to="/job" label="Job" />
//                 <NavLink to="#about" label="About" />
//             </div>
//         );
//     }
// }

// const NavLink = ({ to, label }) => {
//     const location = useLocation();

//     return (
//         <Link
//             to={to}
//             className={location.pathname === to ? "active" : ""}
//         >
//             {label}
//         </Link>
//     );
// };

// export default NavCom;
