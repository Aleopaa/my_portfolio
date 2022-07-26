import React from "react";
import {default as Header} from "./Header";
import {Outlet} from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Layout;