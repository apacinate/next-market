import { NextResponse } from "next/server"
import supabase from "../../../utils/database"
import { SignJWT } from "jose"

export async function POST(request) {
    const reqBody = await request.json()

    try{
        const { data, error }= await supabase.from("users").select().eq("email", reqBody.email).single()

    if(!error){
        if(reqBody.password ==data.password){
            const secretKey =  new TextEncoder().encode("next-market-route-handlers")
            const payload = {email:reqBody.email,}
            const token = await new SignJWT(payload).setProtectedHeader({alg:"HS256"}).setExpirationTime("1d").sign(secretKey)
            console.log("token:", token)
            return NextResponse.json({message:"ログイン成功",token: token})
        } else {
            return NextResponse.json({message:"ログインパスワードが間違っています"})
        }
    } else {
        return NextResponse.json({message:"ログイン失敗:ユーザー登録をしてください"})
    }
    } catch(err) {
        
        return NextResponse.json({message:`ログイン失敗:${err}`})
    }
}