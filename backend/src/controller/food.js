import { Food } from "../models/foodSchema.js"

export const createFood =  async (req, res) =>{
    try {
        const {foodName, price, image, ingredients, category} = req.body;
         console.log("reqbody", foodName)
         Food.create({
            foodName:foodName,
            price:price,
            image:image,
            ingredients:ingredients,
            category:category
        })
        res.status(200).send("food successfully created")
    } catch (error) {
        res.status(500).send("there was a problem with creating the food")
    }
}
export const getFood = async(req, res) =>{
    try {
        console.log("GETTING FOOD REQ WORKS");
        
        const result = await Food.find();    
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const updateFood = async(req, res) =>{

    const {id} = await req.params
    const {body} = req
    console.log("id", body)

    try {
        await Food.findByIdAndUpdate(id, body)
        res.status(200).send("updated successfully")
    } catch (error) {
        res.status(500).send("wasnt updated")
    }
}
export const deleteFood = async (req, res) =>{
    const {id} = await req.params
    try {
        await Food.findByIdAndDelete(id)
        res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(500).send("deletion failed")
    }
}