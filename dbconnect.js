import mongoose from "mongoose";
const dbconnect=()=>{
    try {
        mongoose.connect('mongodb+srv://Ravi:Ravi2004@cluster0.j82qs.mongodb.net/'+process.env.DB_NAME)
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('ERROR :: ',error);
    }
}



export {dbconnect};