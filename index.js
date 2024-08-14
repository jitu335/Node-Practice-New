import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors"; 
import connectToMongo from "./db/config.js"; 
import router from "./routes/users.js";
import productsrouter from './routes/products.js';  

const app = express();  
const PORT = process.env.PORT || 5000;

connectToMongo() 
app.use(bodyParser.json()); 
app.use(cors()); 

app.use("/api", router);
app.use("/api", productsrouter); 

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); 
});
