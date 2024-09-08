
import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@freshfeed.rvfm6.mongodb.net/Project 0?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { 
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
            serverSelectionTimeoutMS: 30000 // 30 seconds
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }

}


export default Connection;