import mongoose from 'mongoose';
import 'dotenv/config'


const db = async ()=>{
 await mongoose.connect(process.env.URL)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default db;