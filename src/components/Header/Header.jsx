import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import AuthNav from "./AuthNav/AuthNav";
import { HeaderContainer } from "./header.styled";
import logo from "../../img/logo.png";

const Header = () => {
    return(
        <HeaderContainer>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Nav />
            <AuthNav />
        </HeaderContainer>
    )
};


export default Header;