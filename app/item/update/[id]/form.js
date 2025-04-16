"use client"

import { useRouter } from "next/navigation"
import useAuth from "../../../utils/useAuth"

const UpdateItem = (props) => {
    const router = useRouter()
    const loginUserEmail = useAuth()

    const handleSubmit = async(formData) => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/update/${props.params.id}`,{
                method:"PUT",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    title:formData.get("title"),
                    price:formData.get("price"),
                    image:formData.get("image"),
                    description:formData.get("description"),
                    email:formData.get("loginUserEmail")
                })
            })
           
            const jsonData = await response.json()
            alert(jsonData.message)
            router.push("/")
        } catch {
            alert("アイテム編集失敗")
        }
    }
    

    if(loginUserEmail === props.singleItem[0].email){
        return (
            <div>
                <h1 className="page-title">アイテム編集</h1>
                <form onSubmit={handleSubmit}>
                    <input defaultValue={props.params.title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                    <input defaultValue={props.params.price} onChange={(e)=>setPrice(e.target.value)} type="text" name="price" placeholder="価格" required/>
                    <input defaultValue={props.params.image} onChange={(e)=>setImage(e.target.value)} type="text" name="image" placeholder="画像" required/>
                    <textarea defaultValue={props.params.description} onChange={(e)=>setDescription(e.target.value)} name="description" rows={15} placeholder="商品説明" required></textarea>
                    <button>編集</button>
                </form>
            </div>
        )
    } else {
        return<h1>権限がありません</h1>
    }
}

export default UpdateItem