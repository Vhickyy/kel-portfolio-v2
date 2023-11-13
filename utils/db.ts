import mongoose from "mongoose";

const connect = async () => {
    if(mongoose.connections[0].readyState) return;
    try{
        await mongoose.connect(process.env.MONGO_URL!)
        console.log("connected")
    }catch (err){
        throw new Error("Error connecting to db")
    }
}

export default connect;