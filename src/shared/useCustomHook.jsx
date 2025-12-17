import React, {  useEffect, useState } from 'react';

const useCustomHook = (url) => {
    const [items,setItem] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[url])
    return {items}
};

export default useCustomHook;