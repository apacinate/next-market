import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { jwtVerify }  from "jose"
const useAuth = () => {
    const [loginUserEmail, setLoginUserEmail] = useState("")
    const router = useRouter()
    useEffect(()=>{
        const checkToken = async() => {
            const token = localStorage.getItem("token")
            console.log("token::",token)
            if(!token){
                router.push("/user/login")
            }

            try{
                const secretKey = new TextEncoder().encode("next-market-route-handlers")
                const decodedJwt = await jwtVerify(token, secretKey)
                setLoginUserEmail(decodedJwt.payload.email)
            }catch{
                router.push("/user/login")
            }
        }
        checkToken()
    },[router])

    return loginUserEmail
}
export default useAuth