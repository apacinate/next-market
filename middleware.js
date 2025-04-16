import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    console.log("ミドルウェア")
    const token = await request.headers.get("Authorization")?.split(" ")[1]
    console.log("token:",token)
    if(!token){
        return NextResponse.json({message:"トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-route-handlers")
        const decordedJwt = await jwtVerify(token, secretKey)
        console.log("decordedJwt:",decordedJwt)
        return NextResponse.next() 
    } catch(err){
        console.log("JWT検証エラー:", err)
        return NextResponse.json({message:"トークンが正しくないので、ログインしてください。"}) 
    }
}

export const  config = {
    matcher:["/api/item/create","/api/item/update:path*","/api/item/delete/:path*"],
}