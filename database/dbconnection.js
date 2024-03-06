import mongoose from "mongoose";

export const dbconnect=async()=>{
    mongoose.connect("mongodb+srv://ayushishukla7024:ayushi123@cluster0.o3a05yc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
        .then(() => console.log("Mongodb started")) 
        .catch((err) => console.log(err))

}

