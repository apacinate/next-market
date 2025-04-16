import Image from "next/image"
import Link from "next/link"

const getSingleItem = async(id) => {
    console.log(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    console.log("jsonData.singleItem:",jsonData.singleItem)
    const singleItem = jsonData.singleItem
    return singleItem
}

const ReadSingleItem = async({params}) => {
    console.log("params:",params)
    const singleItem = await getSingleItem(params.id)
    console.log("singleItem:",singleItem)
    return(
        <div className="grid-container-in">
            <div>
                <Image src={singleItem[0].image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem[0].title}</h1>
                <h2>￥{singleItem[0].price}</h2>
                <hr/>
                <p>
                    {singleItem[0].description}
                </p>
                <div>
                    <Link href={`/item/update/${singleItem[0].id}`}>アイテム編集</Link>
                    <Link href={`/item/delete/${singleItem[0].id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem