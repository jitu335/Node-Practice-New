import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  }, { timestamps: true });

  const productModel = mongoose.model('Product', productSchema); 

  export default productModel;