import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const SharedLayout = () => {
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
};


export default SharedLayout ;