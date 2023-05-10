import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/news">news</NavLink>
            <NavLink to="/notices">notices</NavLink>
            <NavLink to="/friends">friends</NavLink>
        </nav>
    )
};


export default Nav;