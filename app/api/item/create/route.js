import { NextResponse } from "next/server";
import supabase from "../../../utils/database";

export async function POST(request){
    const reqBody = await request.json()
    console.log(reqBody)
try{
        const { data, error } = await supabase.from("items").insert(reqBody);
        console.log("data",data)
        console.log("error",error)
        if(error) throw new Error(error.message)
        return NextResponse.json({message: "アイテム作成成功"})
    }　catch(err) {
        return NextResponse.json({message: `アイテム作成失敗:${err}`})
    }
}