import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const queryContext = createContext()

export const QueryProvider = ({children})=>{
    let location = useLocation()
    const queryparams = new URLSearchParams(location.search);
    let [query,setQuery]=useState(queryparams);
    return (
        <queryContext.Provider value={{query,setQuery}}>
            {children}
        </queryContext.Provider>
    )
}

export const useQuery = ()=>{
    //this hook is used to change query params
    let history = useNavigate()
    let location = useLocation()
    let {query} = useContext(queryContext)

    const removeQuery = (key) =>{
        query.delete(key)
        history({search:query.toString()})
    }

    const setQuery = (key,value)=>{
        query.set(key,value)
        history({pathname:location.pathname,search:query.toString()})
    }
    return [query,setQuery,removeQuery]
}
