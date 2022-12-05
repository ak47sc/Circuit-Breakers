import { useState , createContext, useContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [role, setrole] = useState(null)

    const login = (data)=>{
        localStorage.setItem("user",data)
    }

    const logout = () =>{
        setUser(null)
        setrole(role)
        localStorage.clear()
    }

    return(
        <AuthContext.Provider value={{user ,role ,login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}