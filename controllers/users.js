import userModel from "../models/users.js";

class UserController {
  static getAllUsers =  (req, res) => {
    userModel.find().then(item => { 
        console.log(item);
        res.status(200).json({ message: 'Item fetched successfully', data: item, });
      })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: 'Server error' });
        });
  };

  static createNewsUser = (req, res) => {
    const newUser = new userModel(req.body);
    console.log(newUser);
    newUser
      .save()
      .then((item) => {
        console.log(item);
        res.status(201).json({ message: "Item added successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  };

  static updateUser = (req, res) => {  
    const { id } = req.params;
    userModel.findByIdAndUpdate(id, req.body, { new: true })
      .then((item) => {
        console.log(item);
        res
          .status(203)
          .json({ message: "Item Fetched Successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  };

  static deleteUser = (req, res) => {
    const { id } = req.params;
    userModel.findByIdAndRemove(id) 
      .then((item) => {
        console.log(item);
        res
          .status(203)
          .json({ message: "Item Fetched Successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  };
}

export default UserController;
