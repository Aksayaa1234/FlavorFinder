import { useEffect, useState } from "react";


const useSearch=(location,history)=>
{
    let [suggestions,setSuggestions]=useState([]);
    let [searchToken,setsearchToken]=useState('');

    const handleChange=(token)=>{
        let search=token;
        setsearchToken(search);
        if(search.trim().length>0)
        {
            fetchSuggestion(search);
        }
        else {
            setSuggestions([]);
        }
    }

    useEffect(()=>{
        const queryparams = new URLSearchParams(location.search);
        if(searchToken)
        {
            queryparams.set('token',searchToken);
        }
        else
        {
            queryparams.delete('token');
        }
        history({ pathname: '/', search: queryparams.toString() }, { replace: true });
    },[searchToken])

    const fetchSuggestion=async(search)=>{
        try
        {
            const response= await fetch(`http://localhost:8000/api/recipe/search?token=${search}&limit=5`);
            const data=await response.json()
            setSuggestions(data.data);
            //console.log(suggestions);
        }
        catch(err)
        {
            console.log("error in fetching suggestion",err);
        }
    }

    return [suggestions,handleChange]
}

export default useSearch;