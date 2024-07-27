const app=require("./app");
const dotenv=require("dotenv");
dotenv.config({path:"backend/config/config.env"});

const connectDatabase=require("./config/database")
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${(process.env.PORT)}`);
})