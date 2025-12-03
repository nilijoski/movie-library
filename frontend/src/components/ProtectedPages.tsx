import {Navigate, Outlet} from "react-router-dom";
import {type UserProps} from "../type/user.ts";

const ProtectedPages= (props: UserProps) =>{

        if(props.user === undefined){
           return (<div>Loading...</div>)
        }
        return (
            props.user? <Outlet/>: <Navigate to={"/"} />
        )
}

export default ProtectedPages;