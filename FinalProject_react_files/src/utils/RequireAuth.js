import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = (props)=>{

    if(!localStorage.getItem('user')){
        return <Navigate to ="/user/login"/>
    }
    else if(localStorage.getItem('user') === props.allowedrole){
        return props.children
    }
    else return <Navigate to ="/user/login"/>

}