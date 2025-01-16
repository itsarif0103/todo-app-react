import React, {useState, useEffect} from 'react'

const useMyHook = (initialValue, key) => {
    
    const [name, setName] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    )
    useEffect(() =>{
        localStorage.setItem(key, name)
    }, [name, key])

 return [name, setName]
}

export default useMyHook
