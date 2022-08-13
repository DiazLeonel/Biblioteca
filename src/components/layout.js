
import { getValue } from "@testing-library/user-event/dist/utils";
import NavBar from "./navBar";

const containerStyle = {
    width:"90%",
    margin:"100px auto"
}

export default function Layout({children}){
    return <div>
        <NavBar/>
        <div style={containerStyle}>{children}</div>
    </div>
}