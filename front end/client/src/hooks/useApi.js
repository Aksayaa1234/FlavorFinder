import axios from "axios";
import { useEffect , useState} from "react";

export const useGetApi=(url,query,body={},header={})=>{
    //this hook is used to response from the backend by giving input url,query,(body and header is optional)
    //and the output is stored in state and input is stored using changeInput method in two state 
    let [state,setState]=useState(null);
    let [queryState,setQueryState]=useState(query);
    let [bodyState,setBodyState]=useState(body);

    useEffect(()=>{
        if(queryState==null)
            return;
        axios.get(url,{
        params:queryState,
        body:bodyState,
        ...header
        })
        .then((res)=>{
            setState(()=>(res.data.data));
        }
    )},[queryState,bodyState]);

    const changeInput=(query,body={})=>{
        setQueryState(()=>(query));
        setBodyState(()=>(body));
        //console.log("change");
    }
    return [state,changeInput];
}
