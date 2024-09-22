import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const queryContext = createContext()

export const QueryProvider = ({children})=>{
    let location = useLocation()
    const queryparams = new URLSearchParams(location.search);
    let [query,setQueryparams]=useState(queryparams);
    return (
        <queryContext.Provider value={{query,setQueryparams}}>
            {children}
        </queryContext.Provider>
    )
}

export const useQuery = ()=>{
    //this hook is used to change query params
    let history = useNavigate()
    let location = useLocation()
    let {query,setQueryparams} = useContext(queryContext)

    const removeQuery = (key) =>{
        query.delete(key)
        history({search:query.toString()})
    }

    const setQuery = (key,value)=>{
        query.set(key,value)
        setQueryparams(()=>(new URLSearchParams(query)));
        history({pathname:location.pathname,search:query.toString()})
    }

    const clearQuery=()=>{
        for (let key of query.keys()) {
            query.delete(key);
        }
        history({pathname:location.pathname})
    }
    return [query,setQuery,removeQuery,clearQuery]
}
