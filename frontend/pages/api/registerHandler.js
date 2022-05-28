const { connectToDatabase } = require("../../lib/mongodb")
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
    try {
        let {db} = await connectToDatabase()

        let dataToInsert = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            public_hash: req.body.public_hash,
        }

        if(req.body.desgination === 'doctor')
        {
            dataToInsert['hospital_name'] = req.body.hospital_name
        }
        await db.collection(req.body.designation).insertOne(dataToInsert)
        
        return res.json({
            message: "Regisered Successfully",
            success: true,
        })
    }
    catch(error){
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}