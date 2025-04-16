import Form from "./form"
import { getSingleItem } from "../../../utils/getSingleItem"

const UpdateItem=async(context)=>{
    const params=await context.params
    console.log("params:",params)
    const singleItem=await getSingleItem(params.id)
    return(
        <div>
            <h1 className="page-title"></h1>
            <Form params={params} singleItem={singleItem}/>
        </div>
    )
}
export default UpdateItem