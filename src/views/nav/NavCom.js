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

                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </div>
        )
    }
}
export default NavCom;

