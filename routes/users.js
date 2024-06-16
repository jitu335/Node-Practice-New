
import express from "express";
import userController from "../controllers/users.js";
import UserControllerAggregation from "../aggregation/users.js";



const router = express.Router();

router.get("/users", userController.getAllUsers);  
router.post("/users", userController.createNewsUser);   
router.put("/users/:id", userController.updateUser); 
router.delete("/users/:id", userController.deleteUser);  

//----------------------------- aggrigation----------------------------------- 
router.get("/use", UserControllerAggregation.getAggregation); 


export default router;
