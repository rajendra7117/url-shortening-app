
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";

 const useHttp = () => {

    const [status, setStatus] = useState<string>('normal')
    const ctx = useContext(Context)
    // const [status, setStatus] = useState<string>('')
    const fetchAPI = async(url: String) => {
        ctx.toggleLoading()
        setStatus('loading')
        ctx.clearError()
        try{
            const res= await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            if(res.status!==201){
                console.log(res)
                setStatus('error')
                return 
            }
            const data = await res.json()
            console.log(data)
           
            if(data){
                setStatus('success')
                ctx.toggleLoading()
               return data.result.short_link
            }
        }
        catch(err){
            ctx.clearError()
        }
     
       
    } 

    
 return {
     fetchAPI, status
 }
}

export default useHttp;
