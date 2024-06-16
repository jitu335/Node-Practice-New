import express from "express";
import multer from "multer";
import userController from "../controllers/products.js"; 

const productsrouter = express.Router();

//---------------------------------------------- Multer---------------------------------

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, `public/`);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
//  const upload = multer({ storage: storage });

// router.post("/users", upload.single("profile"), userController.createNewsUser);

productsrouter.get("/products", userController.getAllProducts); 
productsrouter.post("/products", userController.createProducts);   
productsrouter.put("/products/:id", userController.updateProducts); 
productsrouter.delete("/products/:id", userController.deleteProducts);  

export default productsrouter;  