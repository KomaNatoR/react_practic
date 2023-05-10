import { NavLink } from "react-router-dom";

import { NavTag } from "./nav.styled";

const Nav = () => {
    return (
        <NavTag>
            <NavLink to="/news">news</NavLink>
            <NavLink to="/notices">notices</NavLink>
            <NavLink to="/friends">friends</NavLink>
        </NavTag>
    )
};


export default Nav;