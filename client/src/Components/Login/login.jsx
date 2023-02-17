import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const loginButtom = ()=>{
const {loginWithRedirect} = useAuth0;

return <button onClick={()=> loginWithRedirect}>Login account</button>
}