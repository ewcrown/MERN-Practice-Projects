import mongoose from "mongoose";

const password = "admin123";

const mongoURL = `mongodb+srv://admin:${password}@cluster0.opsvtxz.mongodb.net/foodApp?retryWrites=true&w=majority`;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        
        const fetch_data = mongoose.connection.db.collection("food_items")
        const data = await fetch_data?.find({})?.toArray()
        
        global.food_items = data     

        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default mongoDB;
