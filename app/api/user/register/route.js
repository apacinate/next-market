import { NextResponse } from "next/server"
import supabase from "../../../utils/database"

export async function POST(request, context) {
    const reqBody = await request.json()
    const params = await context.params

    try{
        const { data, error }= await supabase.from("users").insert(reqBody)
        if(error) throw new Error(error.message)
        return NextResponse.json({message:"ユーザー登録成功",allItems: data})
    } catch(err) {
        return NextResponse.json({message:`ユーザー登録失敗:${err}`})
    }
}