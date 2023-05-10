import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import AuthNav from "./AuthNav/AuthNav";
import { HeaderContainer } from "./header.styled";

const Header = () => {
    return(
        <HeaderContainer>
            <Link to="/">LOGO!</Link>
            <Nav />
            <AuthNav />
        </HeaderContainer>
    )
};


export default Header;