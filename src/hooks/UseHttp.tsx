
import React, { useState, useEffect } from "react";

 const useHttp = () => {

    const [status, setStatus] = useState<string>('normal')
    // const [status, setStatus] = useState<string>('')
    const fetchAPI = async(url: String) => {
        console.log('fet')
        setStatus('loading')
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
               return data.result.short_link
            }
        }
        catch(err){

        }
     
       
    } 

    
 return {
     fetchAPI, status
 }
}

export default useHttp;
