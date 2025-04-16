import Link from "next/link"
import Image from "next/image" 

export const dynamic = 'force-dynamic'

// アイテムの型定義
interface Item {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
}


// getAllItems 関数に戻り値の型を付与
const getAllItems = async (): Promise<Item[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`);
  const jsonData = await response.json();
  const allItems = jsonData.allItems;
  return allItems;
} 

const ReadAllItems = async() => {
  const allItems: Item[] = await getAllItems()
  return(
    <div className="grid-container-in">
      {allItems.map((item)=>
        <Link href={`/item/readsingle/${item.id}`} key={item.id}>
          <Image src={item.image} width={750} height={500} alt="item-image" priority/>
          <h2>{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      )}
    </div>
  )
}

export default ReadAllItems