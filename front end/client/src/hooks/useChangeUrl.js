import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "../context/QueryContext";


const useChangeUrl=()=>{
    //this hook is used to change the url using navigate in can change only path or path with same query params based on reset
   let navigate=useNavigate();
   let [query,setQuery,removeQuery]=useQuery();

   const change=(path,reset=false)=>{
    if(reset)
    {
        navigate({pathname:path})
    }
    else
    {
        navigate({pathname:path,search:query.toString()})
    }
   } 
   return change;
}

export default useChangeUrl;