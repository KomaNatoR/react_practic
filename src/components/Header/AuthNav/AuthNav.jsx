import { AuthNavList } from "./authNav.styled";

const AuthNav = () => {
    return (
        <AuthNavList>
            <li>
                <button type="button">Log IN</button>
            </li>
            <li>
                <button type="button">Registration</button>
            </li>
        </AuthNavList>
    )
};


export default AuthNav;