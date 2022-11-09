import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Life Care`
    }, [title])
}
export default useTitle