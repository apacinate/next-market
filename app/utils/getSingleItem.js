export const getSingleItem = async(id) => {
    console.log(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    console.log("jsonData.singleItem:",jsonData.singleItem)
    const singleItem = jsonData.singleItem
    return singleItem
}