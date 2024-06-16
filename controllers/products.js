import productModel from "../models/products.js" 

class ProductController { 

    static getAllProducts =  (req, res) => { 
        productModel.find().then(item => { 
              console.log(item);
              res.status(201).json({ message: 'Products Fetched Successfully!', data: item });
            })
              .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Server error' }); 
              });
    }

    static createProducts = (req, res) => { 
  
            const newProduct = new productModel(req.body); 
            newProduct.save().then(item => {
              console.log(item);
              res.status(201).json({ message: 'Item added successfully' });
            })
              .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Server error' });
              });
            }
            
            static updateProducts = (req, res) => {  
                    const { id } = req.params;
                    productModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
                      console.log(item);
                      res.status(203).json({ message: 'Item Fetched Successfully', data:item });
                    })
                      .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Server error' });
                      });
            }


            static deleteProducts = (req, res) => {  
                    const { id } = req.params;
                    productModel.findByIdAndRemove(id).then(item => {
                      res.status(203).json({ message: 'Deleted Successfully' });
                    })
                      .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Server error' });
                      });
            }
}

export default ProductController;