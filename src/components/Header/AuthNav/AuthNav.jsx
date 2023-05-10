import { Link } from "react-router-dom";

import { UlTag } from "./authNav.styled";

const AuthNav = () => {
    return (
        <UlTag>
            <li>
                <Link to="/login">Log IN</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
        </UlTag>
    )
};


export default AuthNav;