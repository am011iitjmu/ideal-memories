
import mongoose from "mongoose"
const connectDB=async()=>{
    try{
    const connect=await mongoose.connect("mongodb+srv://Sufyan123:NWgkNPxxZPSkNMRw@cluster0.uy8gs.mongodb.net/Memories?retryWrites=true&w=majority",{ useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true})
    console.log(`Connected at ${connect.connection.host}`)
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}
export default connectDB;