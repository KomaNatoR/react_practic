import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import AuthNav from "./AuthNav/AuthNav";
import { DivTag } from "./header.styled";
import logo from "../../img/logo.png";

const Header = () => {
    return(
        <DivTag>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Nav />
            <AuthNav />
        </DivTag>
    )
};


export default Header;