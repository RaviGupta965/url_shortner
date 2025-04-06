import mongoose from "mongoose";
const dbconnect=()=>{
    try {
        mongoose.connect(process.env.MONGO_URI+process.env.DB_NAME)
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('ERROR :: ',error);
    }
}



export {dbconnect};