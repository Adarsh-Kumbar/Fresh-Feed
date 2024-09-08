
import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@freshfeed.rvfm6.mongodb.net/Project 0?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser : true});
        console.log('Database connected successfully')
    } catch (error) {
        console.log('error while connecting with the database', error)
    }

}


export default Connection;